var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('default', function() {
  gulp.src('./*.jade')
    .pipe(watch('./*.jade'))
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest('./dist/'))

  gulp.src('./js/*.js')
    .pipe(watch('./js/*.js'))
    .pipe(gulp.dest('./dist/js/'))

  gulp.src('./css/*.scss')
    .pipe(watch('./css/*.scss'))
    .pipe(sass())
    .pipe(gulp.dest('./dist/css/'))    
});