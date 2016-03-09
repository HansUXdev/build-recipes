var gulp      = require('gulp');
var csvtojson = require('gulp-csvtojson');

// 
// This task should
// 

gulp.task('csv', function () {
    return gulp.src('csv/*.csv')
        .pipe(
        	csvtojson(
        		{genjs: true}
        	)
        )
        .pipe(
        	gulp.dest('dist/csv-data')
        );
});

// Combine multiple csv files after they are converted into json
var jsoncombine = require("gulp-jsoncombine");
 
gulp.src("dist/csv-data/*.json")
	.pipe(jsoncombine("result.js",function(data){...}))
	.pipe(gulp.dest("./dist/csv-data/final"));


// A more generalized version plugin to test out the differences

var convert = require('gulp-convert');
 
gulp.task('csv2json', function(){
  gulp.src(['data/csv/*.csv'])
    .pipe(convert({
      from: 'csv',
      to: 'json'
     }))
    .pipe(gulp.dest('data/json/'));

// Or if you are dealing with excel files for say activity logs...
var excel2json = require('gulp-excel2json');
