const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/deputies.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'opencam',
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
