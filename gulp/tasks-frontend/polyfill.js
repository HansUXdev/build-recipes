var gulp            = require('gulp'),
    $               = require('gulp-load-plugins')(),
    argv            = require('yargs').argv,
	inlineCss 		= require('gulp-inline-css'),
	combineMq 		= require('gulp-combine-mq'),
	webstandards 	= require('gulp-webstandards');
    bless 			= require('gulp-bless')
    isProduction    = !!(argv.production);

///////////////// DOCS ////////////////////////////
// A). https://cdn.polyfill.io/v2/docs/
////////////////////////////////////////////////////////////////////////
// This file should contain all your tasks should help pollyfill the latest html, css and js features
// 1). Check source for web standards -- https://www.npmjs.com/package/gulp-webstandards/
// 2). If it fails, print out an error or automatically fix it with a polyfil.
// ------------------------------
////////////////////////////////////////////////////////////////////////


 
gulp.task('webstandards', function () {
    return gulp.src('YOUR_COMPILED_FILES/**/*')
        .pipe(webstandards());
});


gulp.task("custom-modernizr", function() {
    return gulp.src("bower_components/modernizr/modernizr.js")
        .pipe(require("gulp-modulizr")([
            "cssclasses",
            "svg",
            "url-data-uri"
        ]))
        .pipe(require("gulp-add-src")([
            "bower_components/modernizr/feature-detects/url-data-uri.js"
        ]))
        .pipe(require("gulp-concat")("custom-modernizr.js"))
        .pipe(gulp.dest("public/assets");
});

