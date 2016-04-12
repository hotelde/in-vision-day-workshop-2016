var gulp = require('gulp');
var gutil = require('gutil');
var webpack = require('webpack');
var minifyHTML = require('gulp-minify-html');
var webpackConfig = require('./../webpack.config.js');

gulp.task('build:index', function () {

  return gulp.src('index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('dist'));
});

gulp.task('build:bundle', function (cb) {

  webpack(webpackConfig, function (err, stats) {

    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString({

      // output options, tbd.
    }));

    cb();
  });
});


gulp.task('build', ['build:index', 'build:bundle']);
