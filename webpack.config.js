var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: './app',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['ng-annotate'] },
      { test: /\.html$/, loaders: ['html-loader'] },
      { test: /\.less$/, loaders: ['style', 'css', 'less']},
      { test: /\.(ttf|eot|svg|woff|woff2|jpg|jpeg|png)$/, loaders: ['file-loader']}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
