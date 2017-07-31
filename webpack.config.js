const path = require('path');

const SRC_DIR = path.resolve(__dirname, './client');
const BUILD_DIR = path.resolve(__dirname, './client');

module.exports = {
  entry: path.resolve(SRC_DIR, 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },  
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] }
        }],
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  }
}