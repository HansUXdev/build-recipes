var gulp            = require('gulp'),
    $               = require('gulp-load-plugins')(),
    argv            = require('yargs').argv,
	inlineCss 		= require('gulp-inline-css'),
	combineMq 		= require('gulp-combine-mq'),
    bless 			= require('gulp-bless'),
    autopolyfiller	= require('gulp-autopolyfiller'),
    isProduction    = !!(argv.production);

////////////////////////////////////////////////////////////////////////
// This file should contain all your tasks for linting code
// 1). 10k selector bug - Bless plugin will automatically splits CSS files suitably for Internet Explorer < 10
// 2). Media Query Bug - inline with conditional media Query?
// 3). Headless screenshots (TrifleJS and PhantomJS) ?
	// This plugin is used to merge mq created with scss
	// could also be used with a <style media="" > for super old support
	// If you really want to go overboard you can use inline css
	// <!--[if lt IE 8]>
	// <link rel="stylesheet" type="text/css" media="all" href="style-ie.css"/>
	// <![endif]-->
// ------------------------------
////////////////////////////////////////////////////////////////////////





// Ensure your CSS won't be discarded by IE 9 and below because of crazy stylesheets limitation of legacy IE.
// IF this returns TRUE, run bless and create conditional IE comments FOReach file to be loaded
gulp.task('IE9', function() {
  gulp.src('./src/css/style.css')
  .pipe(legacyIeCssLint({ throw: true, log: true}))
  .pipe(gulp.dest('./build'));
});