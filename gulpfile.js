"use strict";

var gulp = require('gulp');
var aglio = require('gulp-aglio');
var rename = require('gulp-rename');
var rimraf = require('rimraf');

// directories
var DIR_PUBLIC = './public/';
var DIR_V1 = './blueprints/v1/';

// gulp tasks
gulp.task('render', function() {
    gulp.src(DIR_V1 + 'index.md')
        .pipe(aglio({
            template: 'default',
            fullWidth: true
        }))
        .pipe(rename('v1.html'))
        .pipe(gulp.dest('public'));
});

gulp.task('clean', function(cb) {
    rimraf(DIR_PUBLIC, cb);
});

gulp.task('watch', function () {
    gulp.watch(DIR_V1 + '*', ['build']);
    gulp.watch(DIR_V1 + '**/*', ['build']);
});

gulp.task('build', ['clean', 'render']);
gulp.task('default', ['watch']);
