var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

gulp.task('templates', function () {
  return gulp.src(['./src/app/components/templates/**/*'])
    .pipe(gulp.dest('./dist/app/components/templates/'));
});

