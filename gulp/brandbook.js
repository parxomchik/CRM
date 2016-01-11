var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var fileinclude = require('gulp-file-include');


gulp.task('brandbook', function() {
    gulp.src(['./src/brandbook/brandbook.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./src/app/brandbook'));
});