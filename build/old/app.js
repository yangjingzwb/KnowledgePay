
var express = require('express');
var path = require('path');
var config = require('./server/config');

var app = express();
require('./server/express')(app);
app.use('/KnowledgePay',express.static(path.join(__dirname, 'release')));
app.use(express.static(config.root + '/release'));
require('./server/server')(app);
require('./server/error')(app);
require('./bin/www')(app);
