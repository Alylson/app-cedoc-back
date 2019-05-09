'use strict';

const mysqlQuery = require('../model/mysqlQuery');
const utils = require('../model/utils');

const TABLE_NAME = "liv_noticia";

exports.buscarTodos = function(){
	
	const SQL = "SELECT * FROM liv_noticia";
	
	return mysqlQuery(SQL, pool)
};

exports.buscar = function(id, callback){
	
	const SQL = "SELECT * FROM liv_noticia WHERE n_pknoticia = "+id;
	
	mysqlQuery(SQL, pool).then((result) => {
        callback(result, null)
	}).catch((err) => {
        callback(null, err)
	});
};

exports.cadastrarNoticia = function(noticia){

    const SQL_CADASTRO = "INSERT INTO "+TABLE_NAME+"(c_titulo, c_autor, c_texto, n_datapost, n_curtidas, c_thumbnail) "
        +"values("
        + "'" + noticia.c_titulo + "', "
        + "'" + noticia.c_autor + "', "
        + "'" + noticia.c_texto + "', "
        + "'" + noticia.n_datapost + "', "
        + noticia.n_curtidas + ", "
        + "'" + noticia.c_thumbnail + "')";

    return mysqlQuery(SQL_CADASTRO, pool)
};