var gulp            = require('gulp'),
    $               = require('gulp-load-plugins')(),
    argv            = require('yargs').argv,
    isProduction    = !!(argv.production);

////////////////////////////////////////////////////////////////////////
// This file should contain all your tasks for your javascript code
// 1). lint all javascript & json code
// 2). beautify all code for development
// 3). OPTIONAL ES2016 support
// 4). combine all js script
// ------------------------------
////////////////////////////////////////////////////////////////////////