'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('style', function() {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer
    ]))
    .pipe(gulp.dest('source/css'));
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "source"
    }
  });
});
