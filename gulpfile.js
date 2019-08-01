const gulp        = require('gulp');
const del         = require('del');
const sass        = require('gulp-sass');
const sourcemaps  = require('gulp-sourcemaps');
const rename      = require("gulp-rename");
const concat      = require("gulp-concat");
const minify      = require('gulp-minify');
const cleanCss    = require('gulp-clean-css');
sass.compiler = require('node-sass');

const options = {
  paths : {
    sass: 'sass/',
    js: 'js/',
    dist: 'dist/'
  },
  name: 'hds'
};

// ===================================
// CSS
// ===================================

function cssClean() {
  return del([
    options.paths.dist + '*.css',
    options.paths.dist + 'maps'
  ]);
}

function cssDev() {
  return gulp.src(options.paths.sass + '*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(rename(function (path) {
      path.basename = options.name + '-' + path.basename;
      path.extname = ".css";
    }))
    .pipe(gulp.dest(options.paths.dist));
}

function cssProd() {
  return gulp.src(options.paths.sass + '*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(cleanCss())
    .pipe(rename(function (path) {
      path.basename = options.name + '-' + path.basename;
      path.extname = ".min.css";
    }))
    .pipe(gulp.dest(options.paths.dist));
}


// ===================================
// Javascript
// ===================================

function jsClean() {
  return del([
    options.paths.dist + '*.js'
  ]);
}

function js() {
  return gulp.src(options.paths.js + 'src/*.js')
    .pipe(concat(options.name + '.js'))
    .pipe(minify({
      ext:{
        min:'.min.js'
      }
    }))
    .pipe(gulp.dest(options.paths.dist));
}


// ===================================
// Watch
// ===================================

function watching() {
  gulp.watch([options.paths.js + 'src/*.js'], gulp.series(jsClean, js));
  gulp.watch([options.paths.sass + '**/*.scss'], gulp.series(cssClean, gulp.parallel(cssDev, cssProd)));
}

// ===================================
// Exports
// ===================================

exports.default = gulp.parallel(
  gulp.series(jsClean, js),
  gulp.series(cssClean, gulp.parallel(cssDev, cssProd))
);

exports.watch = watching;