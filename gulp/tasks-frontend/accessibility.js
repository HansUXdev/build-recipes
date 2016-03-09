var gulp            = require('gulp'),
    a11y            = require('gulp-a11y'),
    pa11y           = require('gulp-pa11y'),
    arialinter 		  = require('gulp-arialinter'),
    access 			    = require('gulp-accessibility'),
    $               = require('gulp-load-plugins')(),
    argv            = require('yargs').argv,
    isProduction    = !!(argv.production);

////////////////////////////////////////////////////////////////////////
// This file should help make your sites more accessibility
// 1). Check all HTML for accessibility standards
// 2). 
// ------------------------------
////////////////////////////////////////////////////////////////////////

var LINT = {
  domain: 'http://www.yourdomain.com',
  src: isProduction ? 'dist/**/*.html' : 'dist/**/*.html',
  dist: isProduction ? './dist' : './dist',
  log: isProduction ? true : false,
};


gulp.task('lint-aria', function () {
  gulp.src('partials/**/*.html', 'components/**/*.hbs')
      .pipe(arialinter({
        level: 'A',
        templates: true,
        rules: {
          contrastMinimum: false,
          doNotUseElementBlink: true
        }
      }))
      .pipe(gulp.dest('dist'));
});



  // P A 11 y  is really buggy...
  gulp.task('pally', 
      pa11y({
        url: 'http://www.yourdomain.com/blog.html',
        failOnError: false, 
        // fail tje build on error
        showFailedOnly: true, 
        // show errors only and override reporter
        reporter: 'console'
      })
  );



gulp.task('ally', function () {
  return gulp.src('./**/*.html')
    .pipe(a11y({
      viewportSize: '800x600',
      delay: 1
    }))
    .pipe(a11y.reporter());
});