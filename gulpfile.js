'use strict';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
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
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('public'));
});

gulp.task('watch', () => {
  gulp.watch('./assets/styles/**/*.scss', ['scssLint', 'sass']);
});
