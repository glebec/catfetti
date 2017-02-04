const path = require('path');

const devMode = process.env.NODE_ENV === 'development';

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
  furtiveCSS: path.resolve(__dirname, 'node_modules/furtive/css/furtive.min.css')
};

module.exports = {
  context: __dirname,
  target: 'web',
  entry: './src/js/index.js',
  output: {
    filename: 'js/bundle.js',
    path: PATHS.dist
  },
  devtool: devMode ? 'cheap-module-eval-source-map' : 'source-map',
  resolve: {
    alias: {
      src: PATHS.src,
      furtiveCSS: PATHS.furtiveCSS
    }
  },
  module: {
    rules: [{
      test: /\.html$/,
      loader: 'file-loader',
      query: { name: '[name].[ext]' }
    }, {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: { presets: ['es2015'] }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      loader: 'file-loader',
      query: { name: 'img/[name].[ext]' }
    }]
  }
};
