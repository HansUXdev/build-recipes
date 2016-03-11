var gulp            = require('gulp'),
    $               = require('gulp-load-plugins')(),
    argv            = require('yargs').argv,
    babel 			= require('gulp-babel'),
    isProduction    = !!(argv.production);

////////////////////////////////////////////////////////////////////////
// This file should contain all your tasks for your javascript code
// 1). lint all javascript & json code
// 2). beautify all code for development
// 3). OPTIONAL ES2016 support
// 4). combine all js script
// ------------------------------
////////////////////////////////////////////////////////////////////////


var concat          = require('gulp-concat');
var rimraf          = require('rimraf');
var sequence        = require('run-sequence');

// TODO
/// USE gulp-add-src to clean up the process
    // gulp.task('build', function () {
    //   return gulp.src('files/coffee/*.coffee')   // start with the .coffee files in the project 
    //     .pipe(coffee())                          // compiles coffee script 
    //     .pipe(addsrc('files/js/*.js'))           // we use addsrc to add our .js files to the mix 
    //     .pipe(uglify())                          // we minify everything 
    //     .pipe(gulp.dest('dist'));                // and write to dist 
    // });


// Expectations
//
// 1. ES 2015 Compatibility
// 2. 
// IDEAL: Each page should only load the javascript needed
// Complie Scripts For each Page based on the javascript used

var javascript = {
    // ../HansUXdev.github.io
    DESTjs: isProduction ? 'dist/assets/js': 'dist/assets/js',
    DEP: [
        // Foundation Requirements
        'bower_components/jquery/dist/jquery.js',
        'bower_components/what-input/what-input.js',
        //
        'bower_components/velocity/velocity.min.js',
        'bower_components/cta/dist/cta.min.js',
        'bower_components/waypoints/lib/jquery.waypoints.min.js',
        // 'bower_components/flexslider/jquery.flexslider-min.js',
        'bower_components/textillate/assets/jquery.lettering.js',
        'bower_components/textillate/assets/jquery.fittext.js',
        'bower_components/textillate/jquery.textillate.js',
        'bower_components/velocity/velocity.min.js',
        'bower_components/wow/dist/wow.min.js'
    ],
    FOUNDATIONjs: [
        'bower_components/foundation-sites/js/foundation.core.js',
        'bower_components/foundation-sites/js/foundation.util.*.js',
        'bower_components/foundation-sites/js/foundation.abide.js',
        'bower_components/foundation-sites/js/foundation.accordion.js',
        'bower_components/foundation-sites/js/foundation.accordionMenu.js',
        'bower_components/foundation-sites/js/foundation.drilldown.js',
        'bower_components/foundation-sites/js/foundation.dropdown.js',
        'bower_components/foundation-sites/js/foundation.dropdownMenu.js',
        'bower_components/foundation-sites/js/foundation.equalizer.js',
        'bower_components/foundation-sites/js/foundation.interchange.js',
        'bower_components/foundation-sites/js/foundation.magellan.js',
        'bower_components/foundation-sites/js/foundation.offcanvas.js',
        'bower_components/foundation-sites/js/foundation.orbit.js',
        'bower_components/foundation-sites/js/foundation.responsiveMenu.js',
        'bower_components/foundation-sites/js/foundation.responsiveToggle.js',
        'bower_components/foundation-sites/js/foundation.reveal.js',
        'bower_components/foundation-sites/js/foundation.slider.js',
        'bower_components/foundation-sites/js/foundation.sticky.js',
        'bower_components/foundation-sites/js/foundation.tabs.js',
        'bower_components/foundation-sites/js/foundation.toggler.js',
        'bower_components/foundation-sites/js/foundation.tooltip.js',
        'bower_components/motion-ui/dist/motion-ui.min.js'
    ],
    classie : [
        'bower_components/classie/classie.js',
        'vendor/ButtonComponentMorph/js/uiMorphingButton_inflow.js',
        'src/assets/js/morphing-newsletter.js'
    ],
    blog: [
      'bower_components/classie/classie.js',
      'src/assets/js/**/*.js',
      'src/assets/js/main-blog.js'
    ],
    SRC : [
        'src/assets/js/app.js'
        // 'bower_components/classie/classie.js',
        // 'vendor/ButtonComponentMorph/js/uiMorphingButton_inflow.js',
        // 'src/assets/js/morphing-newsletter.js'
    ]
};

var DEST = isProduction ? 'dist/assets/js': '_build';
var DESTjs = isProduction ? '../HansUXdev.github.io/assets/js': 'dist/assets/js';





// Combine JavaScript into one file
// In production, the file is minified
gulp.task('javascript', function() {
  var uglify = $.if(isProduction, $.uglify()
    .on('error', function (e) {
      console.log(e);
    }));

  return gulp.src(PATHS.javascript)
    .pipe($.sourcemaps.init())
    .pipe($.concat('app.js'))
    .pipe(uglify)
    .pipe($.if(!isProduction, $.sourcemaps.write()))
    .pipe(gulp.dest(distJS));
});

gulp.task('javascript:blog', function() {
  var uglify = $.if(isProduction, $.uglify()
    .on('error', function (e) {
      console.log(e);
    }));
  return gulp.src(PATHS.blog)
    .pipe($.sourcemaps.init())
    .pipe($.concat('main-blog.js'))
    .pipe(uglify)
    .pipe($.if(!isProduction, $.sourcemaps.write()))
    .pipe(gulp.dest(distJS));
});



gulp.task('js:vendor', function() {
    var uglify = $.if(isProduction, $.uglify()
    .on('error', function (e) {
      console.log(e);
    }));
  return gulp.src(javascript.DEP)
    .pipe(concat('vendor.js'))
    .pipe(uglify)
    .pipe(gulp.dest('_build/'));
});

gulp.task('js:foundation', function() {
    var uglify = $.if(isProduction, $.uglify()
    .on('error', function (e) {
      console.log(e);
    }));
  return gulp.src(javascript.FOUNDATIONjs)
    .pipe(concat('foundation.js'))
    .pipe(uglify)
    .pipe(gulp.dest('_build/'));
});

gulp.task('js:src', function() {
    var uglify = $.if(isProduction, $.uglify()
    .on('error', function (e) {
      console.log(e);
    }));
  return gulp.src(javascript.SRC)
    .pipe(concat('src.js'))
    .pipe(uglify)
    .pipe(gulp.dest('_build/'));
});

gulp.task('js:combine', function() {
    var uglify = $.if(isProduction, $.uglify()
    .on('error', function (e) {
      console.log(e);
    }));
    return gulp.src(
    [
        '_build/vendor.js',
        '_build/foundation.js',
        '_build/src.js'
    ]
    )
    .pipe(concat('app.js'))
    .pipe(uglify)
    .pipe(gulp.dest(javascript.DESTjs));
});

gulp.task('js:build', [
    // 'clean:js',
    'js:vendor', 
    'js:foundation', 
    'js:src'
    ] 
);


// gulp.task('js', [
//     // 'clean:js',
//     'js:build', 
//     'js:test' 
//     ] 
// );

