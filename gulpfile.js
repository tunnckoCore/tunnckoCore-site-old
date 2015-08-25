'use strict'

var fs = require('fs')
var path = require('path')
var gulp = require('gulp')
var rename = require('gulp-rename')
var cssnano = require('gulp-cssnano')
var htmlmin = require('gulp-htmlmin')
var uglifyjs = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')
var inliner = require('html-inline')
var concat = require('concat-stream')

gulp
  .task('css', function() {
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
      .pipe(gulp.dest('dist/css'))
  })
  .task('js', function() {
    gulp.src('src/js/*.js')
      .pipe(uglifyjs())
      .pipe(rename(function (path) {
        path.extname = '.min.js'
      }))
      .pipe(gulp.dest('dist/js'))
  })
  .task('html', ['inline'], function() {
    return gulp.src('./dist/index.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist'))
  })
  .task('inline', function () {
    return fs.createReadStream(__dirname + '/src/index.html')
      .pipe(inliner())
      .pipe(fs.createWriteStream('dist/index.html'))
  })
  .task('copy', function () {
    return fs.createReadStream(__dirname + '/dist/index.html')
      .pipe(fs.createWriteStream(__dirname + '/index.html'))
  })

/**
 * Watch and default
 */

gulp
  .task('watch', function () {
    return gulp.watch('src/**/*', ['css', 'html', 'js'])
  })
  .task('default', ['css', 'js', 'html'])
