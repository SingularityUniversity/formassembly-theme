'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var tools = require('./scripts/gulp-tools');
var prompts = require('prompts');

gulp.task('scss', function () {
    return tools.compile( gulp.src('./src/themes/**/*.scss') )
        .pipe(livereload());
});

gulp.task('bundle', function() {
    /* bundle all */
    /* Match each theme's main.scss file */
    return gulp.src('./src/themes/**/main.scss')
        .pipe(tools.bundle())
        .pipe(rename(function (destpath) {
            // use folder name in /src/themes as theme name.
            destpath.basename = destpath.dirname;
            destpath.dirname = '';
        }))
        .pipe(gulp.dest('./dist/themes-scss'));
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./src/themes/**/*.scss', ['scss']);
});

/* */
gulp.task('create', async function() {
    let theme = await
    prompts({
        type: 'text',
        name: 'name',
        message: 'Choose a name for your theme:'
    });
    tools.create(theme.name);
    console.log('Done. Your work folder is in src/'+theme.name
        + '. Your theme preview page is preview/'+theme.name+'.html. You can run `gulp watch` now.');
});

gulp.task('refresh', function() {
    tools.refresh();
});

gulp.task('default',['scss','bundle']);