var gulp            = require('gulp'),
    $               = require('gulp-load-plugins')(),
    argv            = require('yargs').argv,
    blaze 			= require('gulp-blaze'), // npm i --save gulp-blaze
    isProduction    = !!(argv.production);

////////////////////////////////////////////////////////////////////////
// This file should contain all your tasks for crawling a website
// ------------------------------
////////////////////////////////////////////////////////////////////////

gulp.task('compile:rules', function () {
  gulp.src('path/to/rules.yaml')
    .pipe(blaze({
      debug: true
    }))
    .pipe(gulp.dest('compiled/rules.json'));
});