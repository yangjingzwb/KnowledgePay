
var express = require('express');
var path = require('path');
var config = require('../server/config');

var app = express();
require('../server/express')(app);
app.use('/KnowledgePay',express.static(path.join(__dirname, '../release')));
app.use(express.static(config.root + '../release'));
require('../server/server')(app);
require('../server/error')(app);
require('../bin/www')(app);
console.log("当前环境-DEPLOY_ENV：",process.env.DEPLOY_ENV);
console.log("当前环境-NODE_ENV：",process.env.NODE_ENV);
