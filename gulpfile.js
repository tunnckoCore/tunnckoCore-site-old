'use strict'

var gulp = require('gulp')
var rename = require('gulp-rename')
var cssnano = require('gulp-cssnano')
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('default', function() {
  return gulp.src('src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 3 versions']
    }))
    .pipe(cssnano())
    .pipe(rename(function (path) {
      path.extname = '.min.css'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/css/'))
})

gulp.watch('src/**/*', ['default'])
