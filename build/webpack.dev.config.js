const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ProgressBarPlugin = require('progress-bar-webpack-plugin')

process.noDeprecation = true

module.exports = {
    devtool: 'eval-source-map',
    context: path.resolve(__dirname, ".."),
    entry: {
        bundle: [
            './client',
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
        ],
        vendor: [
            'react',
            'react-dom',
            'redux',
            'react-redux',
            'superagent',
            'lodash'
        ]
        // 将依赖模块打包成单独的模块，在进行更新的时候，依赖模块不需要更新，可以使用缓存
    },
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: '[name].js',
        chunkFilename: 'chunk.[name].js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react', 'stage-0', 'react-hmre'],
                    plugins: ['transform-runtime', 'add-module-exports'],
                    cacheDirectory: true
                }
            }
        }, {
            test: /\.less$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader?modules&camelCase&importLoaders=1&localIdentName=[local]'},
                { loader: 'less-loader'}
            ]
        }, {
            test: /\.(jpg|png|gif|webp)$/,
            use: {
                loader: 'url-loader?limit=8000'
            }
        }, {
            test: /\.json$/,
            use: {
                loader: 'json-loader'
            }
        }, {
            test: /\.html$/,
            use: {
                loader: 'html-loader?minimize=false'
            }
        }]
    },
    resolve: {extensions: ['.js', '.json', '.less', 'html']},
    plugins: [
        // 需要打包成单独文件的模块。vendor在前面已经声明，manifest打包一些webpack的启动文件
        // 这些启动文件一般不需要更新。文件的导入顺序就是按照names指定的顺序进行打包的
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            filename: '[name].js'
        }),
        // 废弃
        new webpack.HotModuleReplacementPlugin(),
        // 废弃
        // 用来定义一些全局变量标识，业务代码可以直接使用这些标识，主要用于环境的区分
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
        // 这个插件可以用来帮助生成HTML文件，自动将生成的脚本打包到HTML文件中
        new HtmlWebpackPlugin({
            filename: '../views/dev/index.html',
            template: './views/tpl/index.tpl.html'
        }),
        new ProgressBarPlugin({summary: false})
    ]
}
