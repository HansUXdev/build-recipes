var gulp = require('gulp');
// be sure to run npm i gulp-local-screenshots-for-windows --save-dev
var localScreenshots = require('gulp-local-screenshots-for-windows'); 


// This gulp task should be used to integrate with the zurb notable platform in a seemless way.
// 1). Stage 1 should take screenshots.
// 2). Stage 2 should zip the dist folder and its content, then upload it to notable.
// 


gulp.task('notable-screenshots', function () {
  gulp.src('./dist/*.html')
  .pipe(localScreenshots({
    width: ['1920', '720', '480', '320']
    height: ['1080', '405', '270', '180']
    name: ['full-hd', 'hd', 'md', 'sd']
   }))
  .pipe(gulp.dest('./screenshots/'));
});