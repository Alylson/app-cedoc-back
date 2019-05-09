'use strict';
var express = require('express');
var mysql = require('mysql');
var sqlite3 = require('sqlite3').verbose();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

var app = express();

var path = require("path");
var nconf = require('nconf');
var settings = path.join(__dirname, 'config', 'settings.json');
nconf.argv().env();
nconf.file({ file: settings });

/* Variaveis de configuração. */
const PORT = 80;

/* Inicia a conexão com o Banco de Dados */
global.pool = mysql.createPool({
	connectionLimit : 5,
	host: nconf.get('host'),
	user: nconf.get('user'),
	password: nconf.get('password'),
	database: nconf.get('database')
});

/* Inicia a conexão com o SQLite 3 */
var db = new sqlite3.Database(nconf.get('sqlitePath'));
global.dbSqlite = db;

/* Configura os CORS Headers */
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*, Content-Type');
    next();
});

app.set('views', __dirname + '/api/views');
app.engine('html', require('ejs').renderFile);

app.use(require('morgan')('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));

/**
 * Configura as rotas
 */

/* OBS: Refatorar essas rotas para utilizar o Router do exprees */
require('./api/rotas/livros')(app, pool);
require('./api/rotas/categorias')(app, pool);
require('./api/rotas/newsfeed')(app, pool);

require('./api/rotas/auth')(app, pool, jwt);
require('./api/rotas/admin')(app, pool, jwt);
/* FIM OBS */

app.use('/noticias', require('./api/rotas/noticias'));
app.use('/usuario', require('./api/rotas/usuarios'));
app.use('/doc', require('./api/rotas/doc'));
app.use('/eventos', require('./api/rotas/eventos'));

/* Inicia o servidor */
app.listen(PORT, () => {
	console.log("Servidor rodando na porta "+PORT+".");
});

process.on('SIGINT', function() {
	pool.end(function (err) {
		if(err){ console.log(err); }
        db.close();
        console.log('MySQL/SQLite! Conexões fechadas pelo término da aplicação');
        process.exit(0);
    });
});