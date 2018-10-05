const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'Opencam',
    libraryTarget: 'umd',
    filename: 'opencam.umd.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
