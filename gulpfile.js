var gulp = require('gulp');
var rigger = require('gulp-rigger');
gulp.task('html', function () {
  gulp.src('templates/*.html')
    .pipe(rigger())
    .pipe(gulp.dest('./'));
});

