'use strict';

const gulp         = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync  = require('browser-sync').create();
const sass         = require('gulp-sass');
const sassGlob     = require('gulp-sass-glob');
const scssLint     = require('gulp-scss-lint');
const webpack      = require('webpack-stream');

const scriptsDir   = './assets/scripts/';
const stylesDir    = './assets/styles/';
const publicDir    = './public/';

gulp.task('js', () => {
  gulp.src(scriptsDir + 'main.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(publicDir))
    .pipe(browserSync.stream());
});

gulp.task('scssLint', () => {
  gulp.src(stylesDir + '**/*.scss')
    .pipe(scssLint({
      'config': 'config/scss-lint.yml'
    }));
});

gulp.task('sass', ['scssLint'], () => {
  gulp.src(stylesDir + 'main.scss')
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(publicDir))
    .pipe(browserSync.stream());
});

gulp.task('reload', () => {
  browserSync.reload();
});

gulp.task('default', ['sass'], () => {
  browserSync.init({
    server: publicDir,
  });

  gulp.watch(scriptsDir + '**/*.js', ['js']);
  gulp.watch(stylesDir + '**/*.scss', ['scssLint', 'sass']);
  gulp.watch(publicDir + '**/*.html', ['reload']);
});
