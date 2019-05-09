'use strict';

var authController = require('../controller/authController');
var utils = require('../model/utils');

module.exports = function(app, pool, jwt) {

	//Autentica o usuario e gera um token de autenticação
	app.route('/auth').post(function(req, res, next) {
		authController.autenticarUsuario(req, res, pool, jwt);
	});

	//Valida o token de autenticação
	app.route('/auth').get(function(req, res, next) {
		authController.autenticarToken(req, res, jwt);
	});
}