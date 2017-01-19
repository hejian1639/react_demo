'use strict';
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var change = require('gulp-change');
var rjs = require('gulp-r');
var clean = require('gulp-clean');
var eslint = require('gulp-eslint');
var runSequence = require('run-sequence');

gulp.task('build', function(){
	return gulp.src('./src/*.jsx')
		.pipe(babel({
			presets: ['es2015', 'react', 'stage-0']
		}).on('error', function (err) {
			console.error('**********ERROR**********');
			console.error('FileName: ' + (err.fileName || 'N/A'));
			console.error('Line: ' + (err.lineNumber || 'N/A'));
			console.error('Message: ' + (err.message || 'N/A'));
			console.error('**********ERROR**********');
		}))
		.pipe(rename(function(path) {
			path.extname = '.js';
		}))
		.pipe(gulp.dest('./app'));
});

gulp.task('watch', function () {
   gulp.watch('./src/*.jsx', ['build']);
});

gulp.task('default', ['build'], function(){
   gulp.watch('./src/*.jsx', ['build']);
});
