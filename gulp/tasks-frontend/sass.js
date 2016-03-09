var gulp            = require('gulp'),
	jsonToSass 		= require('gulp-json-to-sass'),
    $               = require('gulp-load-plugins')(),
    argv            = require('yargs').argv,
    isProduction    = !!(argv.production);

////////////////////////////////////////////////////////////////////////
// This file should contain all your tasks for linting code
// 1). Preprocess with scss (you can change this if you want)
// 2). Autoprefixing option with autoprefixer & pleeease
// 3). Combine Combine Media Queries
// 4). Uncss with --production flag
// 5). Split up css file if there is more then 10k selectors
// ------------------------------
////////////////////////////////////////////////////////////////////////


var PATHS = {
  minify: isProduction ? true : false,	 // minify file on production
  distCSS: isProduction ? 'www' : 'dist/assets/css',
  // YOUR SCSS Libraries
  sass: [
    'bower_components/foundation-sites/scss',
    'bower_components/motion-ui/src/'
  ],
  sourcemaps: isProduction ? false : false,
  
  // Autoprefixing and IE support
  COMPATIBILITY: ['last 2 versions', 'ie >= 9'],
  mqpacker: isProduction ? true : true,  // Combine Media Queries
  rem: true, 			// Generates px for rem for IE support (only IE 11 supports rem fully)
  pseudoElements: true, // Converts ::before to :before
  opacity: true,		// Filter for IE 8
};

// Compile Sass into CSS
// In production, the CSS is compressed
gulp.task('sass', function() {
  var uncss = $.if(isProduction, $.uncss({
    html: ['dist/**/*.html'],
    ignore: [
      new RegExp('.foundation-mq'),
      new RegExp('^meta\..*'),
      new RegExp('^\.is-.*')
    ]
  }));

  return gulp.src('src/assets/scss/*.scss')
    // .pipe($.sourcemaps.init())
    .pipe($.sass({ includePaths: PATHS.sass })
    .on('error', $.sass.logError))
    
    .pipe($.autoprefixer({browsers: PATHS.COMPATIBILITY}))
    
    .pipe($.pleeease({
        sass: true,
        includePaths: PATHS.sass,
        sourcemaps: PATHS.sourcemaps,
        mqpacker: PATHS.mqpacker,
        rem: PATHS.rem,
        pseudoElements: PATHS.pseudoElements,
        opacity: PATHS.opacity,
        minifier: PATHS.minify,
    }))
    .pipe($.bless())
    .pipe(gulp.dest(PATHS.distCSS));
});
