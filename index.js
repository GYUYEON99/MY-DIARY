// var async = require('async');
var express = require('express');
// var path = require('path');
// var fs = require('fs');

// var config = require('@vue/config');
// const log = require('@redsberry/log');
// const { mysql, redis } = require('@kidsfence/dbpool');
// const { traceRequest, errorHandler } = require('@kidsfence/middleware');

var app = express();

app.use('/', express.static('./public'));

app.listen(13101);
