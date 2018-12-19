var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../package.json').config;
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var runseq = require('run-sequence');

sass.compiler = require('node-sass');
gulp.task('sass', function () {
  return gulp.src(config.src.sass + '/**/*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.build.css));
});

gulp.task('sass-amp', function () {
    return gulp.src(config.src.sassamp + '/**/*-amp.{scss,sass}')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([ autoprefixer() ]))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.ampbuild.css));
});

gulp.task('sass-amp-build', function () {
    return gulp.src(config.src.sassamp + '/**/*-amp.{scss,sass}')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([ autoprefixer() ]))
      .pipe(gulp.dest(config.ampbuild.css));
});

gulp.task('sass:watch', function () {
  gulp.watch(config.src.sass + '/**/*.*', ['sass']);
});

gulp.task('sass-amp:watch', function () {
    gulp.watch(config.src.sassamp + '/**/*.*', ()=>runseq('copy-amp','sass-amp','inject'));
  });
