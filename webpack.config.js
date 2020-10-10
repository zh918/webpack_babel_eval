var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            use: [ 'babel-loader' ],
            exclude: /node_modules/,
        },
    ]
  },
  mode: 'development',
  node: {
    fs: 'empty'
  }
};