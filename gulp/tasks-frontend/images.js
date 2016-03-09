var gulp          = require('gulp');
var imageResize 	= require('gulp-image-resize');
var rename 			  = require("gulp-rename");
var responsive 		= require('gulp-responsive');
////////////////////////////////////////////////////////////////////////
// This file should contain all your tasks that optimize images
// 1). Automatically create Responsive images for every asset
// 2). SPRITE options for images (including svgs)
// 3). base-64 option
// 4). Compresssion after it all
// ------------------------------
// This should be done to optiminize your assets, load speeds 
// and the number of requests and ensure a smooth and effortless build 
// every time.
////////////////////////////////////////////////////////////////////////



gulp.task('optimize-images', 
	[
	'clean-images', 
	'sprite-images', 
	'base-64', 
	'responsive-images', 
	'compress-images'
	]
);
            
var INTERCHANGE = {  
  dest: ['./docs/assets/img/interchange'],
  small: [
    './docs/assets/img/*.{jpeg,jpg,png,svg}'
  ],
  medium: [
    './docs/assets/img/*.{jpeg,jpg,png,svg}'
  ],
  large: [
    './docs/assets/img/*.{jpeg,jpg,png,svg}'
  ],
  xsmall: ['320'],
  xmedium: ['480'],
  xlarge: ['920']
};

// INTERCHANGE task will dynamically resize all the images and rename them 
// which means you can get stay off photoshop and keep coding...
gulp.task('interchange', function() {
  gulp.src(INTERCHANGE.small)
    .pipe(rename({suffix: '@small'}))
    .pipe(imageResize({ width: INTERCHANGE.xlarge }))
    .pipe(gulp.dest(INTERCHANGE.dest));
  gulp.src(INTERCHANGE.medium)
    .pipe(rename({suffix: '@medium'}))
    .pipe(imageResize({ width: INTERCHANGE.xmedium }))
    .pipe(gulp.dest(INTERCHANGE.dest)) 
  gulp.src(INTERCHANGE.large)
    .pipe(imageResize({ width: INTERCHANGE.xsmall }))
    .pipe(rename({suffix: '@large'}))
    .pipe(gulp.dest(INTERCHANGE.dest))
});