// TODO Add copyright and license information

'use strict';

const _ = require('gulp-load-plugins')();
const del = require('del');
const gulp = require('gulp');
const pkg = require('./package.json');


// ----------------------------------------------------------------------------
// CONFIG
// ----------------------------------------------------------------------------

const libraryName = 'audi-type';

const banner = `/**
 * ${pkg.name} - ${pkg.description}
 * @version v${pkg.version}
 * @copyright ${new Date().getFullYear()} ${pkg.author}
 * @link ${pkg.homepage}
 */\n`;


// ----------------------------------------------------------------------------
// Build
// ----------------------------------------------------------------------------

gulp.task('build:css', function() {
  return gulp.src('src/scss/*.scss')
    .pipe(_.plumber())
    .pipe(_.sass({
      precision: 10
    }))
    .pipe(_.header(banner))
    .pipe(gulp.dest('dist/css'))
    .pipe(_.if('*.css', _.csso()))
    .pipe(_.header(banner))
    .pipe(_.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(_.size({
      title: _.util.colors.underline('CSS size:') + '\n',
      showFiles: true,
      showTotal: false,
      gzip: true
  }));
});

gulp.task('build:copy-fonts', function() {
  return gulp.src('src/fonts/*.+(eot|svg|ttf|woff|woff2)')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('build:copy-files', function() {
  return gulp.src(['src/*.html', 'src/.htaccess'])
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
  return del(['dist/css', 'dist/fonts']);
});


gulp.task('build', gulp.series('clean', 'build:css', 'build:copy-fonts', 'build:copy-files'));


// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

gulp.task('default', gulp.series('build'));
