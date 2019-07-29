var gulp               = require('gulp');
var del                = require('del');
var gulpLoadPlugins    = require('gulp-load-plugins');
var path               = require('path');
var cleanCSS           = require('gulp-clean-css');
var runSequence        = require('run-sequence');
var del                = require('del');
var fs                 = require('fs');
var minify             = require('gulp-minify');
var rename             = require('gulp-rename');
var autoprefixer       = require('gulp-autoprefixer');
var concat             = require('gulp-concat');


var options = {};

options.rootPath = {
  project     : __dirname + '/',
  theme       : __dirname + '/'
};

options.theme = {
  root  : options.rootPath.theme,
  sass  : options.rootPath.theme + 'sass/',
  js    : options.rootPath.theme + 'js/',
  dist  : options.rootPath.theme + 'dist/'
};

var sassFiles = [
  options.theme.sass + '**/*.scss',
  // Do not open Sass partials as they will be included as needed.
  '!' + options.theme.sass + '**/_*.scss',
  // Hide additional files
  '!' + options.theme.sass + 'vendors/govau-design-system.scss',
  '!' + options.theme.sass + 'vendors/font-awesome/font-awesome.scss'
];

var $ = gulpLoadPlugins();
/**
 * Generate styles with soucemap and uncompressed.
 */
gulp.task('styles:dev', function(callback) {
  runSequence(
    'styles:clean',
    'styles:generate:dev',
    callback);
});

/**
 * Generate styles without sourcemap and compress them.
 */
gulp.task('styles:prod', function(callback) {
  runSequence(
    'styles:clean',
    'styles:generate:prod',
    'styles:compress',
    callback);
});

/**
 * Generate styles without sourcemap and compress them.
 */
gulp.task('js:dev', function(callback) {
  runSequence(
    'js:clean',
    'js:compress:dev',
    callback);
});

/**
 * Generate styles without sourcemap and compress them.
 */
gulp.task('js:prod', function(callback) {
  runSequence(
    'js:clean',
    'js:compress:prod',
    callback);
});

// Clean CSS files.
gulp.task('styles:clean', function() {
  return del([
    options.theme.dist + '**/*.css',
    options.theme.dist + '**/*.map',
    '!' + options.theme.dist + 'print.css'
  ], {force: true});
});

/**
 * Compress the css.
 */
gulp.task('styles:compress', function(){
  return gulp.src(options.theme.dist + '/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(options.theme.dist));
});

gulp.task('js:clean', function() {
  return del([
    options.theme.dist + '/*.js',
  ], {force: true});
});

gulp.task('js:compress:dev', function() {
  gulp.src(options.theme.js + 'src/*.js')
    .pipe(rename(function (path) {
      path.basename += ".min";
      path.extname = ".js";
    }))
    .pipe(gulp.dest(options.theme.dist))
});

gulp.task('js:compress:prod', function() {
  gulp.src([options.theme.js + '/libraries/*.js', options.theme.js + '/src/*.js'])
    .pipe(minify({
      ext: {
        min:'.min.js'
      },
      noSource: true,
    }))
    .pipe(concat('healthgovau-ds.min.js'))
    .pipe(gulp.dest(options.theme.dist))
});

/**
 * Generate css with source map.
 */
gulp.task('styles:generate:dev', function(){
  return gulp.src(sassFiles)
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      sourcemap: true,
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer())
    .pipe($.sourcemaps.write('./'))
    .pipe($.size({title: 'Styles'}))
    .pipe(gulp.dest(options.theme.dist));
});

/**
 * Generate css without sourcemap.
 */
gulp.task('styles:generate:prod', function(){
  return gulp.src(sassFiles)
    .pipe($.sass({
      precision: 10,
      sourcemap: false
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer())
    .pipe($.size({title: 'Styles (production)'}))
    .pipe(rename(function (path) {
      path.basename += ".min";
      path.extname = ".css";
    }))
    .pipe(gulp.dest(options.theme.dist));
});

// Watch files for changes & reload
gulp.task('watch', function(){
  gulp.watch([options.theme.sass + '/**/*.scss']);
  gulp.watch([options.theme.js + '/src/*.js']);
});

// Watch and reload
gulp.task('prod', ['styles:prod', 'js:prod']);

// Watch and reload
gulp.task('default', ['styles:dev', 'js:dev']);