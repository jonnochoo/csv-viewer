var gulp = require('gulp');
var bower = require('gulp-bower');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// Dev Tasks
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

// Build Tasks
gulp.task('build', function() {

  gulp.src('./*.jade')
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest('./dist/'))

  gulp.src('./js/*.js')
    .pipe(gulp.dest('./dist/js/'))

  gulp.src('./bower_components/**')
    .pipe(gulp.dest('./dist/bower_components'))

  gulp.src('./css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css/'))    
});