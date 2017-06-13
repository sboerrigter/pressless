'use strict';

const gulp         = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync  = require('browser-sync');
const sass         = require('gulp-sass');
const sassGlob     = require('gulp-sass-glob');
const scssLint     = require('gulp-scss-lint');

const stylesDir    = './assets/styles';
const publicDir    = './public';

gulp.task('scssLint', () => {
  gulp.src(stylesDir + '/**/*.scss')
    .pipe(scssLint({
      'config': 'config/scss-lint.yml'
    }));
});

gulp.task('sass', () => {
  gulp.src(stylesDir + '/main.scss')
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest(publicDir))
});

gulp.task('serve', function() {
  browserSync.init({
    server: publicDir,
  });
});

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('default', () => {
  gulp.run('serve');

  gulp.watch(stylesDir + '/**/*.scss', ['scssLint', 'sass', 'reload']);
  gulp.watch(publicDir + '/**/*.html', ['reload']);
});
