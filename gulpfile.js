'use strict';

const gulp = require('gulp');
const sassGlob = require('gulp-sass-glob');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const scssLint = require('gulp-scss-lint');

gulp.task('scssLint', () => {
  gulp.src('assets/styles/**/*')
    .pipe(scssLint({
      'config': 'config/scss-lint.yml'
    }));
});

gulp.task('sass', () => {
  gulp.src('assets/styles/main.scss')
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('public'));
});

gulp.task('watch', () => {
  gulp.watch('./assets/styles/**/*.scss', ['scssLint', 'sass']);
});
