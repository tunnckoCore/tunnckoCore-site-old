'use strict'

var fs = require('fs')
var path = require('path')
var gulp = require('gulp')
var rename = require('gulp-rename')
var cssnano = require('gulp-cssnano')
var htmlmin = require('gulp-htmlmin')
var inliner = require('html-inline')
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')
var concat = require('concat-stream')

gulp.task('css', function() {
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

gulp.task('html', ['inline'], function() {
  return gulp.src('./dist/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
})

gulp.task('inline', function () {
  return fs.createReadStream(__dirname + '/index.html')
    .pipe(inliner())
    .pipe(fs.createWriteStream('dist/index.html'))
})


gulp.task('watch', function () {
  return gulp.watch('src/**/*', ['css'])
})
