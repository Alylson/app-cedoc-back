'use strict';

var mysqlQuery = require('../model/mysqlQuery');
var utils = require('../model/utils');

var path = require("path");
var nconf = require('nconf');
var settings = path.join(__dirname, '..', '..', 'config', 'settings.json');
nconf.argv().env();
nconf.file({ file: settings });

exports.buscarTodos = function(pool, callback){
	
	const SQL = "SELECT * FROM liv_usuario";
	
	mysqlQuery(SQL, pool).then((result) => {
		callback(result, null);
	}).catch((err) => {
    	callback(null, err);
	});
}

exports.buscar = function(id ,pool, callback){

	const SQL = "SELECT * FROM liv_usuario WHERE n_pkid = "+id;

    mysqlQuery(SQL, pool).then((result) => {
		callback(result, null);
	}).catch((err) => {
		callback(null, err);
	});
}

exports.cadastrarUsuario = function(usuario, pool, callback){

	const SQL_CADASTRO = "INSERT INTO liv_usuario(c_nome, c_email, c_senha, active, created_at, updated_at, role, picture_path) "
		+"values("
		+ "'" + usuario.c_nome + "', "
		+ "'" + usuario.c_email + "', "
		+ "'" + usuario.c_senha + "', "
		+ "'" + usuario.active + "', "
		+ usuario.created_at + ", "
		+ usuario.updated_at + ", "
		+ "'" + usuario.role + "',"
		+ "'" + usuario.picture_path + "')";

    mysqlQuery(SQL_CADASTRO, pool).then((result) => {
			callback(result, null);
	}).catch((err) => {
			callback(null, err);
	});
}

exports.buscarEmail = function(email, callback){

    const SQL = "SELECT * FROM liv_usuario where c_email = '"+email+"'";

    return mysqlQuery(SQL, pool)
};

exports.buscarUsuariosActive = function(active, pool, callback){

    const SQL = "SELECT * FROM liv_usuario where active = '"+active+"'";

    mysqlQuery(SQL, pool).then((result) => {
        callback(result, null);
    }).catch((err) => {
        callback(null, err);
    });

}

exports.alterarStatus = function(id, status, pool, callback){

    const SQL = "UPDATE liv_usuario set active = '"+ status +"' where n_pkid = "+id;

    mysqlQuery(SQL, pool).then((result) => {
        callback(result, null);
    }).catch((err) => {
        callback(null, err);
    });

}

exports.alterarRole = function(id, role, pool, callback){

    const SQL = "UPDATE liv_usuario set role = '"+ role +"' where n_pkid = "+id;

    mysqlQuery(SQL, pool).then((result) => {
        callback(result, null);
    }).catch((err) => {
        callback(null, err);
    });

}

exports.alterarSenha = function(id, senha){
    const SQL = "UPDATE liv_usuario set c_senha = '"+ senha +"' where n_pkid = "+id;
    return mysqlQuery(SQL, pool)
};