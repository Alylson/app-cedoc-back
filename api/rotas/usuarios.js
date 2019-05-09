'use strict';

const express = require('express');
const router = express.Router();
const usuariosController = require('../controller/usuariosController');
const bcrypt = require('bcryptjs');
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

/**
 * Cadastra um novo usuario
 */
router.post('/', async (req, res, next) => {

    if(!req.body.nome || !req.body.email || !req.body.senha){
        return res.status(403).json([{ Erro : 'Parametros necessarios não enviados' }]);
    }

    var now = Date.now();
    var usuario = {
        c_nome: req.body.nome,
        c_email: req.body.email,
        c_senha: bcrypt.hashSync(req.body.senha, bcrypt.genSaltSync(8), null),
        active: 'true',
        created_at: now,
        updated_at: now,
        role: PERFIL_ALUNO,
        picture_path: '/'
    };

    try {
        let emailCheck = await usuariosController.buscarEmail(usuario.c_email);

        if (!utils.isEmpty(emailCheck)) {
            return res.status(403).json([{ Erro : 'Email ja registrado' }]);
        } else {
            usuariosController.cadastrarUsuario(usuario, pool, function(result2, error){
                if(error){
                    return res.status(500).json([{ Erro : 'Erro ao recuperar dados do banco de dados.' }]);
                }
                return res.status(201).json({ affectedRows: result2.affectedRows, changedRows: result2.changedRows });
            })
        }
    } catch (err) {
        return res.status(500).json([{ Erro : 'Erro ao recuperar dados do banco de dados.' }]);
    }
});

/**
 * Recupera os usuarios cadastrados
 */
router.get('/', function(req, res, next) {
    if(!req.headers.authorization){
        return res.status(401).json([{ Erro : 'Nenhum token enviado' }]);
    }

    try {
        var tokenBody = jwt.verify(req.headers.authorization, nconf.get('secret'));
    } catch (ex) {
        //console.log(utils.timestamp()+"Response enviada.");
        return res.status(401).json([{ Erro : 'Token invalido' }]);
    }

    if(tokenBody.user.role == PERFIL_ADMIN){
        if(req.query.active != null){
            var query = req.query.active == 'true' ? 'true' : 'false';
            usuariosController.buscarUsuariosActive(query, pool, function(result, error){
                if(error){
                    return res.status(500).json([{ Erro : 'Erro ao recuperar dados do banco de dados.' }]);
                }
                return res.status(200).json(result);
            });
        }else{
            usuariosController.buscarTodos(pool, function(result, error){
                if(error){
                    return res.status(500).json([{ Erro : 'Erro ao recuperar dados do banco de dados.' }]);
                }
                return res.status(200).json(result);
            });
        }
    } else {
        return res.status(401).json([{ Erro : 'Permissão insuficiente' }]);
    }

});

/**
 * Recupera um uusário especifico
 */
router.get('/:id', function(req, res, next) {
    if(!req.params.id){
        return res.status(403).json([{ Erro : 'Parametros necessarios não enviados' }]);
    }

    usuariosController.buscar(req.params.id, pool, function (result, error) {
        if(error){
            console.log(error)
            return res.status(500).json([{ Erro : 'Erro ao recuperar dados do banco de dados.' }]);
        }
        if (utils.isEmpty(result)) {
            return res.status(403).json([{ Erro : 'Usuario não encontrado' }]);
        }
        return res.status(200).json(result);
    });
});

/**
 * Altera o status de um usuario
 */
router.post('/:id/status', function(req, res, next) {
    if(!req.params.id){
        return res.status(403).json([{ Erro : 'Parametros necessarios não enviados' }]);
    }

    if(!req.headers.authorization){
        return res.status(401).json([{ Erro : 'Nenhum token enviado' }]);
    }

    try {
        var tokenBody = jwt.verify(req.headers.authorization, nconf.get('secret'));
    } catch (ex) {
        return res.status(401).json([{ Erro : 'Token invalido' }]);
    }

    if(tokenBody.user.role == PERFIL_ADMIN){

        var status = req.body.status ? 'true' : 'false';

        usuariosController.alterarStatus(req.params.id, status, pool, function(result, error){
            if(error){
                return res.status(500).json([{ Erro : 'Erro ao recuperar dados do banco de dados.' }]);
            }
            return res.status(200).json(result);
        });
    } else {
        return res.status(401).json([{ Erro : 'Permissão insuficiente' }]);
    }

});

/**
 * Altera a permissão de um usuario
 */
router.post('/:id/role', function(req, res, next) {
    if(!req.params.id || !req.body.role){
        return res.status(403).json([{ Erro : 'Parametros necessarios não enviados' }]);
    }

    if(req.body.role != PERFIL_PROFESSOR && req.body.role != PERFIL_ALUNO){
        return res.status(403).json([{ Erro : 'Parametro de permissão inválido' }]);
    }

    if(!req.headers.authorization){
        return res.status(401).json([{ Erro : 'Nenhum token enviado' }]);
    }

    try {
        var tokenBody = jwt.verify(req.headers.authorization, nconf.get('secret'));
    } catch (ex) {
        //console.log(utils.timestamp()+"Response enviada.");
        return res.status(401).json([{ Erro : 'Token invalido' }]);
    }

    if(tokenBody.user.role == PERFIL_ADMIN){

        var role = req.body.role;

        usuariosController.alterarRole(req.params.id, role, pool, function(result, error){
            if(error){
                return res.status(500).json([{ Erro : 'Erro ao recuperar dados do banco de dados.' }]);
            }
            return res.status(200).json(result);
        });
    } else {
        return res.status(401).json([{ Erro : 'Permissão insuficiente' }]);
    }

});

/**
 * Envia um email de recuperação de senha para o usuario
 */
router.post('/recovery', async (req, res, next) => {
    if(!req.body.email){
        return res.status(403).json([{ Erro : 'Parametros necessarios não enviados' }]);
    }

    try {

        let user = await usuariosController.buscarEmail(req.body.email);

        if (utils.isEmpty(user)) {

            return res.status(403).json([{ Erro : 'Email não encontrado' }]);
        } else {

            /* Gera um token para redefinição de senha válido por 24 horas */
            var token = jwt.sign({ id: user[0].n_pkid, email: user[0].c_email }, nconf.get('secret'), { expiresIn:  (24 * (60 * 60)) } );

            let success = await mail.sendEmail(
                [user[0].c_email],
                'CEDOC: Redefinição de senha',
                mail.getPlainTextRecoveryMessage(user[0].c_email, nconf.get('deployEndpoint') + '/usuario/recovery/password?t=' + token),
                mail.getHTMLRecoveryMessage(user[0].c_email, nconf.get('deployEndpoint') + '/usuario/recovery/password?t=' + token)
            );

            if (success) {
                return res.status(201).json({ success: true });
            } else {
                return res.status(403).json([{ Erro : 'Não foi possível enviar a redefinição de senha para este email. Tente novamente.' }]);
            }
        }
    } catch (err) {
        return res.status(500).json([{ Erro : 'Erro ao recuperar dados do banco de dados.' }]);
    }

});

/**
 * Renderiza a view de redefinição de senha
 */
router.get('/recovery/password', async (req, res) => {

    if(!req.query.t){
        return res.render(
            'recovery.ejs',
            { endpoint: nconf.get('deployEndpoint'), success: false, errorMessage: 'Token de verificação não foi enviado' }
        );
    }

    try {
        var tokenBody = jwt.verify(req.query.t, nconf.get('secret'));
        return res.render(
            'recovery.ejs',
            { endpoint: nconf.get('deployEndpoint'), success: true, user: { id: tokenBody.id, email: tokenBody.email, token: req.query.t } }
        );
    } catch (err) {

        let errorMessage = '';
        try {
            errorMessage = err.message
        } catch (e) {}

        if (errorMessage == 'jwt expired') {
            return res.render(
                'recovery.ejs',
                { endpoint: nconf.get('deployEndpoint'), success: false, errorMessage: 'O Token enviado expirou' }
            );
        } else {
            return res.render(
                'recovery.ejs',
                { endpoint: nconf.get('deployEndpoint'), success: false, errorMessage: 'O Token enviado é inválido' }
            );
        }
    }
});

/**
 * Redefine a senha do usuário
 */
router.post('/recovery/password', async (req, res) => {
    if(!req.body.t || !req.body.p){
        return res.status(401).json([{ Erro : 'Parametros necessários não enviados' }]);
    }

    try {
        let tokenBody = jwt.verify(req.body.t, nconf.get('secret'));
        let result = await usuariosController.alterarSenha(tokenBody.id, bcrypt.hashSync(req.body.p, bcrypt.genSaltSync(8), null));
        return res.status(200).json(result);
    } catch (err) {
        return res.status(401).json([{ Erro : 'Não foi possível autenticar o request' }]);
    }
});

module.exports = router;