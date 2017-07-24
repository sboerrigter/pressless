'use strict';

const gulp          = require('gulp');
const autoprefixer  = require('gulp-autoprefixer');
const browserSync   = require('browser-sync').create();
const sass          = require('gulp-sass');
const sassGlob      = require('gulp-sass-glob');
const scssLint      = require('gulp-scss-lint');
const webpack       = require('webpack-stream');

const publicDir     = './public/';
const scriptsDir    = './assets/scripts/';
const stylesDir     = './assets/styles/';
const scripts       = [scriptsDir + '**/*.js', scriptsDir + '**/*.vue'];
const styles        = stylesDir + '**/*.scss';

const webpackConfig = require('./webpack.config.js');

function webpackError() {
  this.emit('end');
}

gulp.task('js', () => {
  gulp.src(scriptsDir + 'main.js')
    .pipe(webpack(webpackConfig))
    .on('error', webpackError)
    .pipe(gulp.dest(publicDir))
    .pipe(browserSync.stream());
});

gulp.task('scssLint', () => {
  gulp.src(styles)
    .pipe(scssLint({
      'config': 'config/scss-lint.yml'
    }));
});

gulp.task('sass', ['scssLint'], () => {
  gulp.src(stylesDir + 'main.scss')
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'compressed'})
      .on('error', sass.logError)
    )
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

  gulp.watch(scripts, ['js']);
  gulp.watch(styles, ['scssLint', 'sass']);
  gulp.watch(publicDir + '**/*.html', ['reload']);
});
