'use strict';

var mysqlQuery = require('../model/mysqlQuery');
var utils = require('../model/utils');

exports.buscarTodos = function(req, res, pool){
	
	const SQL_NEWSFEED = "SELECT * FROM liv_timeline";
	const SQL_NOTICIAS = "SELECT * FROM liv_noticia";
	const SQL_LIVROS = "SELECT n_pkent, n_pktipo, c_nome, c_autor, DATE_FORMAT(d_publi, \"%M %d, %Y\") as d_publi, n_datapost, c_info, c_displocal, c_dispebook, c_linkdown, n_curtidas, c_thumbnail, c_categoria FROM liv_ent";
	
	mysqlQuery(SQL_NEWSFEED, pool).then((resultNewsfeed) => {
		mysqlQuery(SQL_NOTICIAS, pool).then((resultNoticias) => {
			mysqlQuery(SQL_LIVROS, pool).then((resultLivros) => {
				res.json(utils.formatarNewsfeed(resultNewsfeed, resultNoticias, resultLivros));
				//console.log(utils.timestamp()+"Response enviada.");
			});
		});
	}).catch((err) => {
		console.log(err);
		res.send('Erro ao recuperar dados do banco de dados.');
	});
}