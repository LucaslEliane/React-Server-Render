const webpack = require('webpack')
  , path = require('path')

process.noDeprecation = true

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
    chunkFilename: '[name].js',
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
          loader: "css-loader?modules&camelCase&importLoaders=1&localIdentName=[local]"
        }, {
          loader: "less-loader"
        }]
      }, {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader?modules&camelCase&importLoaders=1&localIdentName=[local]"
        }]
      }, {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'es2015', 'stage-0']
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.less', '.css']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}