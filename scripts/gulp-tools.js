'use strict';
const puppeteer = require('puppeteer');
const ncp = require('ncp').ncp;
const fs = require('fs');
const path = require('path');
const through = require('through2');
const rp = require('request-promise');
const pretty = require('pretty');
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
sass.compiler = require('node-sass');

/* FormAssembly resources needed to create the Theme Preview page */
const FORM_API_URL = 'https://app.formassembly.com/dist/form-builder/5.0.0/api.js';
const XSL_TEMPLATE_URL = 'https://app.formassembly.com/dist/final.xsl';
const WFORMS_JS_URL = 'https://app.formassembly.com/wForms/3.11/js/wforms.js';
const WFORMS_CSS_URL = 'https://app.formassembly.com/dist/form-builder/5.0.0/wforms-layout.css';
const WFORMS_CSS_JSONLY_URL = 'https://app.formassembly.com/dist/form-builder/5.0.0/wforms-jsonly.css';
const WFORMS_CALENDAR_JS_URL = 'https://app.formassembly.com/wForms/3.11/js/wforms_calendar.js';
const KALENDAE_JS_URL = 'https://app.formassembly.com/js/kalendae/kalendae.standalone.min.js';
const KALENDAE_CSS_URL = 'https://app.formassembly.com/css/kalendae.css';
const WFORMS_LOCALIZATION_JS_URL = 'https://app.formassembly.com/wForms/3.11/js/localization-en_US.js';


/* List of scripts in the /script folder used to generate the forms included in the Theme Preview page. */
const FORM_SCRIPTS = ['test-field-types.js', 'test-fieldsets.js', 'test-label-alignment.js', 'test-multi-page.js',
                      'test-conditionals.js', 'test-repeats.js', 'test-tables.js', 'test-field-decorators.js',
                      'test-errors.js', 'test-text-formatting.js', 'test-rtl-language.js'];

/**
 * Called from a gulp task (`gulp watch` or `gulp scss`)
 */
function compile(stream){
    return stream.pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed'})
            .on('error', function(err) {
                console.error('\x07');
                sass.logError.bind(this)(err);
            }))
        .pipe(sourcemaps.write())
        .pipe(rename(function (dpath) {
            // use folder name in /src/themes as theme name.
            dpath.basename = dpath.dirname;
            dpath.dirname = '';
        }))
        .pipe(gulp.dest('./dist/themes'));
}

/**
 * Called from a gulp task (`gulp create`)
 * Given a new Theme Name, creates the source files in src/themeName (by copying from src/themes/template)
 * and creates the preview page for the theme (as preview/themeName.html)
 * @param {string} themeName
 */
function create(themeName) {
    createSourceFiles(themeName);
    createPreviewPage(themeName);
}

/**
 * Called from gulp task (`gulp refresh`)
 * Finds all themes in the repo (folders under src/themes)
 * and recreate the Preview page for each.
 */
function refresh() {

    const getThemeNamesFromDirectories = (source) =>
        fs.readdirSync(source)
            .filter(name => fs.lstatSync(path.join(source, name)).isDirectory());

    const themes = getThemeNamesFromDirectories('./src/themes');
    themes.map( createPreviewPage );
}

/**
 * Copy content from /src/themes/template to a new /src/themes/themeName folder.
 * @param {string} themeName
 */
function createSourceFiles(themeName) {
    ncp('./src/themes/template', './src/themes/'+themeName, function (err) {
        if (err) {
            return console.error(err);
        }
        compile(gulp.src('./src/themes/**/main.scss'));
    });
}
/**
 * Retrieve the XSL from app.formassembly.com as a string.
 * (Used to render the forms on the preview page.)
 */
async function getPreviewXSL() {
    const options = {
        uri: XSL_TEMPLATE_URL,
        headers: { 'User-Agent': 'formassembly-theme-dev-kit' },
    };
    return rp(options);
}

/**
 * Launches the chromium browser
 * @returns {Promise<*>} Chromium browser instance.
 */
async function getBrowser() {
    return puppeteer.launch({headless: true});
}

/**
 * Given a js file defining a PreviewForm class (extending the Form API), returns the HTML for the form.
 * @param {string} scriptName The name of the js file (in /scripts)
 * @param {string} xslString XSL stylesheet
 * @param {Object} browser Puppeteer object
 * @returns {Promise<*>} HTML for the form (as a string)
 */
async function renderPreviewForm(scriptName, xslString, browser) {
    const page = await browser.newPage();
    page.on('console',  msg => { console.log('PAGE LOG:', msg.text()) });
    await page.addScriptTag({url: FORM_API_URL});
    await page.addScriptTag({path: './scripts/html-renderer.js'});
    await page.addScriptTag({path: './scripts/test-form.js'});
    await page.addScriptTag({path: './scripts/'+scriptName});
    try {
        await page.evaluate((xslString) => {
            let parser = new DOMParser();
            let xslTemplate = parser.parseFromString(xslString, "text/xml");
            let f = new PreviewForm();
            const renderer = new HTMLRenderer(xslTemplate);
            const parameters = {'languageDirection': f.getLanguageDirection()};
            renderer.render(f, parameters).then(() => {
                let textArea = document.documentElement.appendChild(document.createElement('textarea'));
                textArea.setAttribute('id', 'html-output');
                textArea.value = renderer.serialize();
            });
        }, xslString);

        return await page.evaluate(() => document.querySelector('#html-output').value);

    } catch(e) {
        throw e;
    }
}

/**
 * Patch an error in XSL file (to be fixed on app.formassembly.com. $formprocessor is an undefined parameter)
 */
function patchXSL(xsl) {
    return xsl.replace("{$formprocessor}","{$processor}");
}

/**
 * Patch wFORMS 3.11 to disable focus to first field when activating multi-page form. To be fixed in App.
 * @returns {string}
 */
function patchWFORMS() {
    return  `
    wFORMS.behaviors.paging.showPage = function(e){
        if(e) {
            if(!e.removeClass) { // no base2.DOM.bind to speed up function
                e.removeClass = function(className) { return base2.DOM.HTMLElement.removeClass(this,className) };
            }
            e.removeClass(wFORMS.behaviors.paging.CSS_PAGE);
            if(!e.addClass) { // no base2.DOM.bind to speed up function
                e.addClass = function(className) { return base2.DOM.HTMLElement.addClass(this,className) };
            }
            e.addClass(wFORMS.behaviors.paging.CSS_CURRENT_PAGE);
            // disable focus to first field.
            // e.querySelector('input, textarea, select').focus();
        }
    }
    `;
}

/**
 * Generates the HTML for the Preview page of the given theme.
 * @param {array} formsHTML HTML for all forms to be included in the preview page.
 * @param themeName
 * @returns {string}
 */
function generatePreviewHTML(formsHTML, themeName) {
    const allFormsHTML = formsHTML.map(html => `
        <div class="wFormContainer">
            <div class="wFormHeader"></div>
            ${html}            
         </div>
    `).join("\n");

    return `<!doctype html>
      <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />  
            <meta name="viewport" content="width=device-width" />          
            <link rel='stylesheet' href="${WFORMS_CSS_URL}" type='text/css' />
            <link rel='stylesheet' href="${WFORMS_CSS_JSONLY_URL}" type='text/css' />
            <link rel='stylesheet' href="../dist/themes/${themeName}.css" type='text/css' />
            <link rel="stylesheet" type="text/css" href="${KALENDAE_CSS_URL}">
            <script type='text/javascript' src="${WFORMS_JS_URL}"></script>
            <script type="text/javascript" src="${KALENDAE_JS_URL}"></script>
            <script type="text/javascript" src="${WFORMS_CALENDAR_JS_URL}"></script>
            <script type="text/javascript" src="${WFORMS_LOCALIZATION_JS_URL}"></script>
            <script type="text/javascript">${patchWFORMS()}</script>            
        </head>
        <body class="wFormWebPage">   
            ${allFormsHTML}            
        </body>
      </html>`;
}
/**
 * Create the preview page file (themeName.html) in the preview/ folder.
 * Compiles the html for all form (see FORM_SCRIPTS constant)

 * @param {string} themeName
 */
function createPreviewPage(themeName) {

    Promise.all([getPreviewXSL(), getBrowser()])
        .then(values  => {
            const xsl = patchXSL(values[0]);
            const browser = values[1];
            try {
                Promise.all(FORM_SCRIPTS.map( (scriptName) => renderPreviewForm(scriptName, xsl,browser) ))
                    .then(formsHTML => {
                        browser.close();
                        const html = pretty(generatePreviewHTML(formsHTML, themeName));
                        fs.writeFile("./preview/"+themeName+".html", html, function(err) {
                            if(err) {
                                return console.log(err);
                            }
                        });
                });
            } catch(e) {
                console.log(e);
            }
        });
}

function preserveSCSSVariables() {
    return through.obj(function(file, enc, cb) {
        let variables = {};
        let placeholders = {};
        let counter = 1;
        let scss = file.contents.toString('utf8');
        // find variable definitions supported by theme editor. $color-, $font-, $length-, $image-
        let regexes = [
            new RegExp('(\\$color-[^\\s:;]*)\\s*:\\s*([^;]*);', 'g'),
            new RegExp('(\\$font-[^\\s:;]*)\\s*:\\s*([^;]*);', 'g'),
            new RegExp('(\\$length-[^\\s:;]*)\\s*:\\s*([^;]*);', 'g'),
            new RegExp('(\\$image-[^\\s:;]*)\\s*:\\s*([^;]*);', 'g'),
        ];
        regexes.forEach( function(regex, index) {
            scss = scss.replace(regex, function(match, variableName, variableValue) {
                // save variable name and value.
                let placeholder, strCounter;
                variables[variableName] = variableValue;

                if(counter < 10) {
                    strCounter = "0" + counter;
                } else {
                    if(counter < 100) {
                        strCounter = counter;
                    } else {
                        throw 'Too many variables (99 max)';
                    }
                }
                // replace value with a unique placeholder.
                switch(index) {
                    case 0: /* color */
                        placeholder = "#1234" + strCounter;
                        break;
                    case 1: /* font */
                        placeholder = "placeholder"+strCounter+"";
                        break;
                    case 2: /* length */
                        placeholder = "placeholder"+strCounter+"";
                        break;
                    case 3: /* image */
                        placeholder = "placeholder"+strCounter+"";
                        break;
                }
                counter++;
                placeholders[variableName] = placeholder;
                return variableName + ":" + placeholder +";";
            });
        });
        let result;
        try {
            result = sass.compiler.renderSync({'data': scss})
        } catch(err) {
            return cb();
        }
        let css = result.css.toString();
        let vars = '';
        // restore scss variables
        for(let variableName in variables) {
            let variableValue = variables[variableName];
            let placeholder = placeholders[variableName];
            css = css.replace( new RegExp( placeholder, 'g'), variableName);
            vars += variableName + ": " + variableValue + ";\n";
        }
        // restore variable declarations;
        file.contents = new Buffer(vars + css);
        this.push(file);
        cb();
    });

}
/**
 * Called from a gulp task (`guld bundle`).
 * Consolidates .scss source files into a single .scss file.
 */
function bundle() {
    return through.obj(function(file, enc, cb) {
        if (file.isBuffer()) {
            let folder = path.resolve(file.path, '..');
            // replace the content of main.scss
            file.contents = function(file){
                let scss = file.toString('utf8');
                // find @import directives
                let regex = new RegExp('@import [\'\"]([^\"\']*)[^\n\r]+;', 'g');
                scss = scss.replace(regex, function(match, filename){
                    // get the filename corresponding to the @import directive
                    filename = folder + "/_" + filename + '.scss';
                    // read the file, and replace @import with the content of the file.
                    try {
                        var importedFile = fs.readFileSync(filename, "utf8");
                    } catch(err) {
                        // file not found. No replacement.
                        return match;
                    }
                    // replace @import with content of file
                    return importedFile;
                });
                return new Buffer(scss);
            }(file.contents);
        }
        this.push(file);
        cb();
    });
}

function screenshot(previewFile) {
    return through.obj(function(file, enc, cb) {
        getBrowser().then(async (browser) => {
            const page = await browser.newPage();
            await page.setViewport({ width: 800, height: 800 });
            await page.goto('file://'+ file.path);
            let filename = path.parse(file.path).name + '.png';
            page.screenshot({ path: 'dist/screenshots/' + filename, fullPage: true })
        });
        cb();
    });
}

module.exports = {
    'compile': compile,
    'create'  : create,
    'refresh' : refresh,
    'bundle' : bundle,
    'preserveSCSSVariables' : preserveSCSSVariables,
    'screenshot' : screenshot
};