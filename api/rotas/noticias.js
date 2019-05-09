'use strict';

'use strict';

const express = require('express');
const router = express.Router();
const utils = require('../model/utils');
const mail = require("../model/mail");
const jwt = require('jsonwebtoken');
const path = require("path");
const nconf = require('nconf');
const settings = path.join(__dirname, '..', '..', 'config', 'settings.json');
nconf.argv().env();
nconf.file({ file: settings });

const PERFIL_ALUNO = 'aluno';
const PERFIL_PROFESSOR = 'professor';
const PERFIL_ADMIN = 'admin';


var Parser = require('rss-parser');
var parser = new Parser();

var noticiasController = require('../controller/noticiasController');

router.get('/', async (req, res) => {
    try {
       // let noticias = await noticiasController.buscarTodos();
        let feedUnb = await parser.parseURL('http://www.noticias.unb.br/publicacoes?format=feed&type=rss');

        let result = [];

        /* Busca o JSON de resposta com o feed de notícias da UNB */
        for(let noticia of feedUnb.items){

            let newItem = {
                c_titulo: noticia.title,
                c_autor: noticia.author,
                c_texto: noticia.contentSnippet,
                n_datapost: new Date(noticia.isoDate).getTime(),
                n_curtidas: 0,
                c_thumbnail: noticia.content.substr(13, noticia.content.indexOf('\" /></p><p>') - 13)
            };

            result.push(newItem);
            /*
            if (noticias != null && noticias.length < 1) {

                console.log("cadastrado");
                //await noticiasController.cadastrarNoticia(newItem);
            } else {

                for(let noticia_bd of noticias){

                    if (noticia.title != noticia_bd.c_titulo) {
                        console.log("cadastrado");

                       // await noticiasController.cadastrarNoticia(newItem);
                    }
                }
            }
            */
        }

        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json([{ Erro : 'Erro ao recuperar dados do banco de dados.' }]);
    }
});

router.get('/:id', async (req, res) => {
    if(!req.params.id){
        return res.status(403).json([{ Erro : 'Parametros necessarios não enviados' }]);
    }

    noticiasController.buscar(req.params.id, function(data, error){
        if(error){
            return res.status(500).json([{ Erro : 'Erro ao recuperar dados do banco de dados.' }]);
        }
        return res.status(200).json(data);
    });
});

module.exports = router;