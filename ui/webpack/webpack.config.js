const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const config = require('../config');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${config.host}:${config.clientPort}`,
    'webpack/hot/only-dev-server',
    './ui/common/theme/elements.scss',
    './ui/client/index.js'
  ],
  output: {
    publicPath: `http://${config.host}:${config.clientPort}/static/`,
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'babel-loader',
            query: {
              babelrc: false,
              presets: ["es2015", "stage-0", "react"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              sourceMap: true,
              module: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            query: {
              outputStyle: 'expanded',
              sourceMap: true
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  },
  devServer: {
    port: config.clientPort,
    hot: true,
    inline: false,
    historyApiFallback: true
  }
};
