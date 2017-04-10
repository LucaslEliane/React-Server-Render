require('babel-polyfill')

require('babel-register')({
  presets: ['env', 'react']
})

require('css-modules-require-hook')({
  extensions: ['.less'],
  camelCase: true,
      preprocessCss: function(css, filename) {
        var _result;
        require('less').render(css, {syncImport: true, filename: filename}, function(err, result) {
            if (err) {
                throw err;
            }
            _result = result.css;
        });
        return _result;
    },
  generateScopedName: '[local]'
})

const Koa = require('koa')
  , app = new Koa()
  , views = require('koa-views')
  , router = require('./routes')
  , clientRoute = require('./middleware/clientRoute.js')
  , config = require('../webpack.config')
  , webpack = require('webpack')
  , compiler = webpack(config)
  , path = require('path')
  , convert = require('koa-convert')
  , webpackDevMiddleware = require('koa-webpack-dev-middleware')
  , webpackHotMiddleware = require('koa-webpack-hot-middleware')
  , fs = require('fs')


app.use(convert(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
})))
app.use(convert(webpackHotMiddleware(compiler)))

app.use(views(path.resolve(__dirname, "../views")), {
  map: {
    html: "ejs"
  }
})
app.use(clientRoute)
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)