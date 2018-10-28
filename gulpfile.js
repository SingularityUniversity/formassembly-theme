'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var tools = require('./scripts/gulp-tools');
var prompts = require('prompts');
sass.compiler = require('node-sass');


gulp.task('scss', function () {
    return gulp.src('./src/themes/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(rename(function (dpath) {
            // use folder name in /src/themes as theme name.
            dpath.basename = dpath.dirname;
            dpath.dirname = '';
        }))
        .pipe(gulp.dest('./dist/themes'))
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
});

gulp.task('refresh', function() {
    tools.refresh();
});

gulp.task('default',['scss','bundlescss']);