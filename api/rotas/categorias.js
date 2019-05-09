'use strict';

var categoriasController = require('../controller/categoriasController');

module.exports = function(app, pool) {
	
	app.route('/categorias').get(function(req, res, next) {
		if(req.query.contagem != null && req.query.contagem == 'true') {
			categoriasController.buscarTodosContagem(req, res, pool);
		} else {
			categoriasController.buscarTodos(req, res, pool);
		}
	});
	app.route('/categorias/:id').get(function(req, res, next) {
		categoriasController.buscar(req, res, pool);
	});
}