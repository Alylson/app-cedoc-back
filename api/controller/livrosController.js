'use strict';

var mysqlQuery = require('../model/mysqlQuery');
var utils = require('../model/utils');

exports.buscarTodos = function(req, res, pool){

	const SQL = "SELECT n_pkent, n_pktipo, c_nome, c_autor, DATE_FORMAT(d_publi, \"%M %d, %Y\") as d_publi, n_datapost, c_info, c_displocal, c_dispebook, c_linkdown, n_curtidas, c_thumbnail, c_categoria FROM liv_ent";

	mysqlQuery(SQL, pool).then((result) => {
		res.json(result);
		//console.log(utils.timestamp()+"Response enviada.");
	}).catch((err) => {
		console.log(err);
		res.send('Erro ao recuperar dados do banco de dados.');
	});
}

exports.buscar = function(req, res, pool){

	const SQL = "SELECT n_pkent, n_pktipo, c_nome, c_autor, DATE_FORMAT(d_publi, \"%M %d, %Y\") as d_publi, n_datapost, c_info, c_displocal, c_dispebook, c_linkdown, n_curtidas, c_thumbnail, c_categoria FROM liv_ent WHERE n_pkent = "+req.params.id;

	mysqlQuery(SQL, pool).then((result) => {
		res.json(result);
		//console.log(utils.timestamp()+"Response enviada.");
	}).catch((err) => {
		console.log(err);
		res.send('Erro ao recuperar dados do banco de dados.');
	});
}

exports.buscarCategoria = function(req, res, pool){

	const SQL = "SELECT n_pkent, n_pktipo, c_nome, c_autor, DATE_FORMAT(d_publi, \"%M %d, %Y\") as d_publi, n_datapost, c_info, c_displocal, c_dispebook, c_linkdown, n_curtidas, c_thumbnail, c_categoria FROM liv_ent WHERE c_categoria LIKE '%"+req.query.categoria+"%' ";

	mysqlQuery(SQL, pool).then((result) => {
		res.json(result);
		//console.log(utils.timestamp()+"Response enviada.");
	}).catch((err) => {
		console.log(err);
		res.send('Erro ao recuperar dados do banco de dados.');
	});
}

exports.buscarFavorites = function(req, res, pool){

	const SQL = "SELECT n_pkent, n_pktipo, c_nome, c_autor, DATE_FORMAT(d_publi, \"%M %d, %Y\") as d_publi, n_datapost, c_info, c_displocal, c_dispebook, c_linkdown, n_curtidas, c_thumbnail, c_categoria FROM liv_ent WHERE n_pkent in("+req.query.favs+") ";

	mysqlQuery(SQL, pool).then((result) => {
		res.json(result);
		//console.log(utils.timestamp()+"Response enviada.");
	}).catch((err) => {
		console.log(err);
		res.json([]);
	});
}

exports.buscarSqlite = function(query, callback){

    dbSqlite.all(query, function(err, row) {
        if (err) {
            return callback(err, null)
        } else {
            return callback(null, row)
		}
    });
}