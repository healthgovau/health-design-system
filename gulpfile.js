const gulp          = require('gulp');
const del           = require('del');
const sass          = require('gulp-sass');
const rename        = require("gulp-rename");
const concat        = require("gulp-concat");
const minify        = require('gulp-minify');
const cleanCss      = require('gulp-clean-css');
const header        = require('gulp-header');
const filelist      = require('gulp-filelist');
const autoprefixer  = require('gulp-autoprefixer');

const pkg         = require('./package.json');

const options = {
  paths : {
    sass: 'source/sass/',
    js: 'source/js/',
    dist: 'build/',
    styleGuide: 'style-guide/'
  },
  name: 'hds'
};

const banner = '/*! <%= pkg.name %> v<%= pkg.version %> */\n';

sass.compiler = require('node-sass');

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
  return gulp.src(options.paths.sass + '*.scss', { sourcemaps: true })
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename(function (path) {
      path.basename = options.name + '-' + path.basename;
      path.extname = ".css";
    }))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest(options.paths.dist + 'css', { sourcemaps: '.' }));
}

function cssProd() {
  return gulp.src(options.paths.sass + '*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(rename(function (path) {
      path.basename = options.name + '-' + path.basename;
      path.extname = ".min.css";
    }))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest(options.paths.dist + 'css'));
}

// ===================================
// Copying
// ===================================

function libraries() {
  return gulp.src(options.paths.js + 'libraries/*')
    .pipe(gulp.dest(options.paths.dist + 'js/libraries'));
}


// ===================================
// Javascript
// ===================================

function jsClean() {
  return del([
    options.paths.dist + 'js/*.js'
  ]);
}

function js() {
  return gulp.src(options.paths.js + 'src/*.js')
    .pipe(concat(options.name + '.js'))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(minify({
      ext:{
        min:'.min.js'
      },
      preserveComments: 'some'
    }))
    .pipe(gulp.dest(options.paths.dist + 'js'));
}


function styleGuide() {
  return gulp.src(options.paths.dist + '**')
    .pipe(gulp.dest(options.paths.styleGuide + 'public/build'));
}

// ===================================
// Watch
// ===================================

function watching() {
  gulp.watch([options.paths.js + 'src/*.js'], gulp.series(jsClean, js, styleGuide));
  gulp.watch([options.paths.sass + '**/*.scss'], gulp.series(cssClean, gulp.parallel(cssDev, cssProd), styleGuide));
}

// ===================================
// Exports
// ===================================

exports.default = gulp.series(
  gulp.parallel(
    gulp.series(jsClean, js),
    gulp.series(cssClean, gulp.parallel(cssDev, cssProd)),
    libraries
  ),
  styleGuide
);

exports.watch = watching;