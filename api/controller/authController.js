'use strict';

var mysqlQuery = require('../model/mysqlQuery');
var utils = require('../model/utils');
var bcrypt = require('bcryptjs');

var path = require("path");
var nconf = require('nconf');
var settings = path.join(__dirname, '..', '..', 'config', 'settings.json');
nconf.argv().env();
nconf.file({file: settings});

//Gera o token de Autenticação
var gerarToken = function (jwt, user) {
    var expiresIn = (24 * (60 * 60)) * 10; //Valido por 10 dias
    var expiresDate = new Date(Date.now() + (expiresIn * 1000)); // em segundos
    var payload = {
        user: user
    };

    // Gera um token baseado nos dados do usuário
    var token = jwt.sign(payload, nconf.get('secret'), {expiresIn: expiresIn});
    return {success: true, expires: expiresDate, Auth: token, user: user};
};

exports.autenticarUsuario = function (req, res, pool, jwt) {

    if (!req.body.email || !req.body.senha) {
        return res.status(403).json([{Erro: 'Parametros necessarios não enviados'}]);
    }

    const SQL = "SELECT * FROM liv_usuario where c_email = '" + req.body.email + "'";

    mysqlQuery(SQL, pool).then((result) => {
        if (!utils.isEmpty(result[0])) {
            if (result[0].active == 'false') {
                return res.status(401).json([{Erro: 'Essa conta está inativa'}]);
            }
            if (bcrypt.compareSync(req.body.senha, result[0].c_senha)) {
                delete result[0].c_senha;
                //console.log(utils.timestamp()+"Response enviada.");
                return res.status(200).json(gerarToken(jwt, result[0]));
            } else {
                //console.log(utils.timestamp()+"Response enviada.");
                return res.status(401).json([{Erro: 'Senha incorreta'}]);
            }
        } else {
            //console.log(utils.timestamp()+"Response enviada.");
            return res.status(403).json([{Erro: 'Email não encontrado'}]);
        }
    }).catch((err) => {
        console.log(err);
        return res.status(500).json([{Erro: 'Erro ao recuperar dados do banco de dados.'}]);
    });
}

exports.autenticarToken = function (req, res, jwt) {
    if (!req.headers.authorization) {
        return res.status(401).json([{Erro: 'Nenhum token enviado'}]);
    }
    try {
        var token = jwt.verify(req.headers.authorization, nconf.get('secret'));
        //console.log(utils.timestamp()+"Response enviada.");
        return res.status(200).json(token);
    } catch (ex) {
        //console.log(utils.timestamp()+"Response enviada.");
        return res.status(401).json([{Erro: 'Token invalido'}]);
    }
}