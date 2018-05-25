
var express = require('express');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.dev');
var path = require('path');
var app = express();
var compiler = webpack(config);
var staticPath = path.posix.join('/', 'static')
// 添加了一些过滤器
require('../server/express')(app);

// 添加静态资源路径
app.use(staticPath,express.static(path.join(__dirname, '../static')));//静态资源
app.use('/KnowledgePay',express.static(path.join(__dirname, '../src')));//静态资源
console.log(path.join(__dirname, '../static'))
// server.use(staticPath, express.static('./static'))
// webpack中间件
app.use(webpackMiddleware(compiler, { 
	noInfo: false,
	publicPath: config.output.publicPath,
	hot: true,
	stats: {
		colors: true,
		chunks: false
	}
}));
// 热加载中间件
app.use(webpackHotMiddleware(compiler));
require('../server/server')(app);
require('../server/error')(app);
require('../bin/www')(app);
