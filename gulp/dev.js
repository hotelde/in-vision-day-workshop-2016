var gulp = require('gulp');
var gutil = require('gutil');
var webpack = require('webpack');
var webpackConfig = require('./../webpack.config.js');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('dev:server', function () {

  gutil.log('webpack config');

  var compiler = webpack(webpackConfig);

  new WebpackDevServer(compiler, {
    // server and middleware options
    historyApiFallback: true
  }).listen(8080, 'localhost', function (err) {

    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }

    gutil.log('[webpack-dev-server]', 'running ...')
  });
});

gulp.task('dev', ['dev:server']);
