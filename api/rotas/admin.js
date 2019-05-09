'use strict';

var adminController = require('../controller/authController');
var usuariosController = require('../controller/usuariosController');
var utils = require('../model/utils');

var path = require("path");
var nconf = require('nconf');
var settings = path.join(__dirname, '..', '..', 'config', 'settings.json');
nconf.argv().env();
nconf.file({ file: settings });

module.exports = function(app, pool, jwt) {


};