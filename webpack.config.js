const webpack = require('webpack')
  , path = require('path')

module.exports = {
  entry: {
    vendor: [
      "react",
      "redux",
      "react-dom",
      "react-redux",
      "react-router"
    ],
    bundle: "./client"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist/client'),
    chunkFilename: '[name].[hash].js',
    publicPath: '/'
  },
  devtool: "source-map",
  context: __dirname,
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }]
      }, {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }]
      }, {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity
    })
  ]
}