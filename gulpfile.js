var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-clean-css');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');


gulp.task('default', ['watch']);

gulp.task('build-css', function() {
  return gulp.src('source/scss/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('public/assets/stylesheets'));
});

gulp.task('minify-css', function() {
  return gulp.src(['public/assets/stylesheets/*.css', '!public/assets/stylesheets/*.min.css'])
    .pipe(plumber())
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifyCss())
    .pipe(gulp.dest('public/assets/stylesheets'));
});

gulp.task('watch', function() {
  gulp.watch('public/assets/stylesheets/*.css', ['minify-css']);
  gulp.watch('source/scss/*.scss', ['build-css']);
});
