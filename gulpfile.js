'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// compile scss to css
function compileSass() {
    return gulp.src('./sass/styles.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({basename: 'styles.min'}))
        .pipe(gulp.dest('./css'));
}

// watch changes in scss files and run sass task
function watchSass() {
    gulp.watch('./sass/**/*.scss', compileSass);
}

// minify js
function minifyJs() {
    return gulp.src('./js/scripts.js')
        .pipe(uglify())
        .pipe(rename({basename: 'scripts.min'}))
        .pipe(gulp.dest('./js'));
}

// export tasks
exports.sass = compileSass;
exports.watch = watchSass;
exports.minifyJs = minifyJs;
exports.default = gulp.series(compileSass, minifyJs);