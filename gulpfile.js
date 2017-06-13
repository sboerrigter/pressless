"use strict";

const gulp = require('gulp');
const sassGlob = require('gulp-sass-glob');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
  gulp.src('assets/styles/main.scss')
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function () {
  gulp.watch('./assets/styles/**/*.scss', ['sass']);
});
