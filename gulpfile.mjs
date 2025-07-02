import { dest, src, series, parallel, watch } from 'gulp';
import { deleteSync } from 'del';
import * as dartSass from 'sass';
import babel from 'gulp-babel';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import concat from 'gulp-concat';
import minify from 'gulp-minify';
import cleanCss from 'gulp-clean-css';
import header from 'gulp-header';
import autoprefixer from 'gulp-autoprefixer';

import pkg from './package.json' assert { type: "json" };

const sass = gulpSass(dartSass);

const options = {
  paths : {
    sass: 'source/sass/',
    js: 'source/js/',
    dist: 'build/',
    styleGuide: 'style-guide/',
    theme: 'style-guide/theme/'
  },
  name: 'hds'
};

const banner = '/*! <%= pkg.name %> v<%= pkg.version %> */\n';


// ===================================
// CSS
// ===================================

function cssClean(cb) {
  const deletedFiles = deleteSync([
    options.paths.dist + '*.css',
    options.paths.dist + 'maps'
  ]);

  cb();
}

function cssDev() {
  return src(options.paths.sass + '*.scss', { sourcemaps: true })
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename(function (path) {
      path.basename = options.name + '-' + path.basename;
      path.extname = ".css";
    }))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(dest(options.paths.dist + 'css', { sourcemaps: '.' }));
}

function cssProd() {
  return src(options.paths.sass + '*.scss')
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
    .pipe(dest(options.paths.dist + 'css'));
}

// ===================================
// Copying
// ===================================

function libraries() {
  return src(options.paths.js + 'libraries/*')
    .pipe(dest(options.paths.dist + 'js/libraries'));
}


// ===================================
// Javascript
// ===================================

function jsClean(cb) {
  const deletedFiles = deleteSync([
    options.paths.dist + 'js/*.js'
  ]);

  cb();
}

/**
 * Process JavaScript files into a single aggregate file.
 */
function jsAggregate() {
  return src(options.paths.js + 'src/*.js')
    .pipe(concat(options.name + '.js'))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(
      babel({
        presets: ['@babel/env']
      })
    )
    .pipe(minify({
      ext:{
        min:'.min.js'
      },
      preserveComments: 'some'
    }))
    .pipe(dest(options.paths.dist + 'js'));
}

/**
 * Process individual JavaScript files.
 */
function js() {
  return src(options.paths.js + 'src/*.js')
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(
      babel({
        presets: ['@babel/env']
      })
    )
    .pipe(minify({
      ext:{
        min:'.min.js'
      },
      preserveComments: 'some'
    }))
    .pipe(dest(options.paths.dist + 'js/modules'));
}

function styleGuide() {
  return src(options.paths.dist + '**')
    .pipe(dest(options.paths.styleGuide + 'public/build'));
}

function cssStyleGuide() {
  return src(options.paths.styleGuide + '/theme/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename("theme.css"))
    .pipe(dest(options.paths.styleGuide + 'public/themes/health'));
}

// ===================================
// Watch
// ===================================

function watching() {
  watch([options.paths.js + 'src/*.js'], series(jsClean, js, styleGuide));
  watch([options.paths.sass + '**/*.scss'], series(cssClean, parallel(cssDev, cssProd), styleGuide));
}

// ===================================
// Exports
// ===================================

export default series(
  parallel(
    series(jsClean, jsAggregate, js),
    series(cssClean, parallel(cssDev, cssProd)),
    libraries
  ),
  styleGuide,
  cssStyleGuide
);

export {
  watching as watch
};
