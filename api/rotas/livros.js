'use strict';

var livrosController = require('../controller/livrosController');

module.exports = function(app, pool) {

    app.route('/livros').get(function(req, res, next) {
        if(req.query.categoria != null){
            livrosController.buscarCategoria(req, res, pool);
        } else {
            livrosController.buscarTodos(req, res, pool);
        }
    });

    app.route('/livros/:id').get(function(req, res, next) {
        livrosController.buscar(req, res, pool);
    });

    app.route('/favorites').get(function(req, res, next) {
        livrosController.buscarFavorites(req, res, pool);
    });
}