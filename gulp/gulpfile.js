var gulp            = require('gulp'),
    argv            = require('yargs').argv,
    $               = require('gulp-load-plugins')(),
    browser         = require('browser-sync'),
    rimraf          = require('rimraf'),
    sequence        = require('run-sequence'),
    requireDir      = require('require-dir'),
    yaml            = require('gulp-yaml'),
    addsrc          = require('gulp-add-src'),
    isProduction    = !!(argv.production);



// Load your task files here
requireDir('./tasks-frontend');   // Load front-end tasks
requireDir('./tasks-server');     // Load server side tasks
requireDir('./test');             // Load server test tasks



gulp.task('build', function(done) {
  sequence(
    'clean', 
    [
      'pages', 
      'sass', 
      'js', 
      'images', 
      'copy', 
      'json'
    ], 
    'js',
    done
  );
});


// Runs all of the above tasks and then waits for files to change
gulp.task('default', ['build'], function() {

});