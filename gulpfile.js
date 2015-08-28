'use strict'

/**
 * Built with PostCSS, Autprefixer
 * cssnano, rucksack, lost
 */

var fs = require('fs')
var gulp = require('gulp')
var concat = require('gulp-concat')
var postcss = require('gulp-postcss')
var uglifyjs = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')
var rucksack = require('gulp-rucksack')
var cssnano = require('gulp-cssnano')
var htmlmin = require('gulp-htmlmin')
var inliner = require('html-inline')
var precss = require('precss')
var lost = require('lost')

var paths = {
  js: [
    'src/js/*.js',
    'src/js/**/*.js'
  ],
  css: [
    'src/css/*.css',
    'src/css/**/*.css'
  ],
  html: [
    'src/*.html',
    'src/**/*.html'
  ]
}

gulp.task('js', function () {
  return gulp.src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(uglifyjs())
    .pipe(concat({path: 'main.min.js'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/'))
})
gulp.task('css', function () {
  return gulp.src(paths.css)
    .pipe(sourcemaps.init())
    .pipe(postcss([lost(), precss()]))
    .pipe(rucksack())
    .pipe(cssnano({autoprefixer: {browsers: ['last 4 versions']}}))
    .pipe(concat({path: 'main.min.css'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/'))
})
gulp.task('inline', ['js', 'css'], function (cb) {
  return fs.createReadStream(__dirname + '/src/index.html')
    .pipe(inliner())
    .pipe(fs.createWriteStream('dist/index.html'))
})
gulp.task('html', ['inline'], function () {
  return gulp.src('./dist/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
})

// Watch
gulp.task('watch', function () {
  gulp.watch(paths.js, ['js', 'html'])
  gulp.watch(paths.css, ['css', 'html'])
  gulp.watch(paths.html, ['html'])
})

// Define cli tasks
gulp.task('build', ['html'])
gulp.task('default', ['html', 'watch'])
