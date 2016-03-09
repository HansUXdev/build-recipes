var gulp            = require('gulp'),
    $               = require('gulp-load-plugins')(),
    argv            = require('yargs').argv,
    includer 		= require('gulp-htmlincluder'),
    dom  			= require('gulp-dom'),
    domSrc 			= require('gulp-dom-src'),
    cheerio 		= require('gulp-cheerio'),
    isProduction    = !!(argv.production);

////////////////////////////////////////////////////////////////////////
// npm i -d gulp-htmlincluder && gulp-dom
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// This file should contain all your tasks for manipulating the D.O.M.
//
// ------------------------------
////////////////////////////////////////////////////////////////////////