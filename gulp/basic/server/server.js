var gulp 		= require('gulp');
var browser 	= require('browser-sync');
var requireDir 	= require('require-dir');
var $           = require('gulp-load-plugins')();
var argv        = require('yargs').argv;
var rimraf      = require('rimraf');
var sequence    = require('run-sequence');
var port 		= process.env.SERVER_PORT || 3000;


gulp.task('server:serve', ['build'], function(){
  browser.init({server: './_build', port: port});
});

// Watch files for changes
gulp.task('server:watch', function() {
  gulp.watch('docs/**/*', ['docs', browser.reload]);
  gulp.watch(['docs/layout/*.html', 'docs/partials/*.html'], ['docs:all', browser.reload]);
  gulp.watch('scss/**/*', ['sass', browser.reload]);
  gulp.watch(['docs/assets/scss/**/*', 'foundation-docs/scss/**/*'], ['sass:docs', browser.reload]);
  gulp.watch('js/**/*', ['javascript:foundation', browser.reload]);
  gulp.watch('docs/assets/js/**/*', ['javascript:docs', browser.reload]);
});

gulp.task('server', ['serve', 'server:watch']);