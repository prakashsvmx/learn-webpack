const path = require('path');

module.exports = {
  entry: {
    index: { import: './src/js/index.js', dependOn: 'shared' },
    sum: { import: './src/js/sum.js', dependOn: 'shared' },
    shared: 'lodash',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
