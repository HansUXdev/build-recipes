var gulp            = require('gulp'),
    $               = require('gulp-load-plugins')(),
    argv            = require('yargs').argv,
    fontcustom		= require('gulp-fontcustom'),
    iconfont		= require('gulp-iconfont'),
    ttf				= require('gulp-svg2ttf'),
    woff			= require('gulp-ttf2woff'),
    eot				= require('gulp-ttf2eot'),
    isProduction    = !!(argv.production);

////////////////////////////////////////////////////////////////////////
// This file should contain all your tasks for creating custom icon fonts
// 1). Grab SVG Files from an array (they need to be black and white)
// 2). Merge (sprite) them into a single svg file 
// 3). Create fonts in TTF, EOT, WOFF, etc
// 4). MODULARITY - Only icons used on the site should be compiled
// 5). Send the file to a CDN
// ------------------------------
////////////////////////////////////////////////////////////////////////