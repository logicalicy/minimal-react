var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './public/index.html'
    }])
  ]
};
