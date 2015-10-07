var webpack = require('webpack');
var StaticSiteGeneratorPlugin = require('static-render-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');

var posts  = fs.readdirSync(__dirname + '/data/posts').map(filenameToRoute);
var routes = [
  '/',
  '/about',
  '/posts',
  { path: '/404',  output: '/404.html' },
  { path: '/feed',  output: '/feed.xml' }
].concat(posts);

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
    new StaticSiteGeneratorPlugin('static.js', routes)
  ]
};

function filenameToRoute(filename) {
  return '/' + filename.replace(/\..*$/, '');
}
