var gulp            = require('gulp'),
    $               = require('gulp-load-plugins')(),
    argv            = require('yargs').argv,
    isProduction    = !!(argv.production);

////////////////////////////////////////////////////////////////////////
// This file should contain all your tasks for copying files
// 1). basic copy task
// ------------------------------
////////////////////////////////////////////////////////////////////////