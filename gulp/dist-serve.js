'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open');


gulp.task('serve-dist', function () {
  connect.server({
    root: 'dist',
    port: 8001,
    livereload: true
  });
  gulp.src('')
    .pipe(open({app: 'Google Chrome', uri: 'http://localhost:8001'}));
});
