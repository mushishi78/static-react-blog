var webpack = require('webpack');
var StaticWebpackPlugin = require('static-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'client': './client.js',
    'static': './static.js'
  },
  output: {
    path: './public',
    libraryTarget: 'umd',
    filename: '[name].js',
    publicPath: '/static-react-blog'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel' },
      { test: /\.yml$/,  loader: 'json!yaml' },
      { test: /\.md$/,   loader: 'markdown-with-front-matter' },
      { test: /\.css$/,  loader: ExtractTextPlugin.extract('style', 'css') }
    ]
  },
  devServer: { contentBase: './public' },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new ExtractTextPlugin('styles.css'),
    new StaticWebpackPlugin('static.js')
  ]
};
