require('babel-polyfill')

require('babel-register')({
  presets: ['env', 'react']
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


// compiler.plugin('emit', (compilation, callback) => {
//     const assets = compilation.assets
//     let file, data

//     Object.keys(assets).forEach(key => {
//         if (key.match(/\.html$/)) {
//             file = path.resolve(__dirname, key)
//             data = assets[key].source()
//             fs.writeFileSync(file, data)
//         }
//     })
//     callback()
// })
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