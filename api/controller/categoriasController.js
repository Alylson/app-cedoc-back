 'use strict';

var mysqlQuery = require('../model/mysqlQuery');
var utils = require('../model/utils');

exports.buscarTodos = function(req, res, pool){
	
	const SQL = "SELECT * FROM liv_catego";
	
	mysqlQuery(SQL, pool).then((result) => {
		res.json(result);
		//console.log(utils.timestamp()+"Response enviada.");
	}).catch((err) => {
		console.log(err);
		res.send('Erro ao recuperar dados do banco de dados.');
	});
}

exports.buscar = function(req, res, pool){
	
	const SQL = "SELECT * FROM liv_catego WHERE n_pkcatego = "+req.params.id;
	
	mysqlQuery(SQL, pool).then((result) => {
		res.json(result);
		//console.log(utils.timestamp()+"Response enviada.");
	}).catch((err) => {
		console.log(err);
		res.send('Erro ao recuperar dados do banco de dados.');
	});
}

exports.buscarTodosContagem = function(req, res, pool){
	
	const SQL = "SELECT * FROM liv_catego";
	const SQL_LIVROS = "SELECT * FROM liv_ent";
	
	mysqlQuery(SQL, pool).then((resultCategorias) => {
		mysqlQuery(SQL_LIVROS, pool).then((resultLivros) => {
			res.json(utils.contarLivrosCategoria(resultCategorias, resultLivros));
			//console.log(utils.timestamp()+"Response enviada.");
		})
	}).catch((err) => {
		console.log(err);
		res.send('Erro ao recuperar dados do banco de dados.');
	});
}