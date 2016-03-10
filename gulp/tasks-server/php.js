var gulp            = require('gulp'),
    $               = require('gulp-load-plugins')(),
    argv            = require('yargs').argv,
    php2html 		= require('gulp-php2html'),
    swig 			= require('gulp-swig'),
    phpBeauty		= require('gulp-phpcbf'),
    phplint			= require('gulp-phplint'),
    isProduction    = !!(argv.production);

// Commands
	// npm install -- save-dev gulp-php2html && gulp-mamp && gulplint && gulp-phpcbf

// gulp-php2html requires php-cgi to be installed
	// brew tap homebrew/dupes
	// brew tap homebrew/versions
	// brew tap homebrew/homebrew-php
	// brew install php56

////////////////////////////////////////////////////////////////////////
// This file should contain all your tasks for php
// ------------------------------
////////////////////////////////////////////////////////////////////////


gulp.task('php', function () {
  gulp.src('src/php/**/*.php')
  .pipe(phplint())
  .pipe(phpBeauty())
  .pipe(php2html())	
  .pipe(gulp.dest('dist/'));
});


// MAMP Options
	gulp.task('config', function(cb){
		mamp(options,'config', cb);
	});
	gulp.task('start', function (cb) {
		mamp(options,'start', cb);
	});
	gulp.task('stop', function (cb) {
		mamp(options,'stop', cb);
	});

gulp.task('mamp', ['config', 'start']);