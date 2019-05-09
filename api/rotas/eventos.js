const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const nconf = require('nconf');
const settings = require("path").join(__dirname, '..', '..', 'config', 'settings.json');
nconf.argv().env();
nconf.file({ file: settings });

const eventosController = require('../controller/eventosController');

/**
 * Cadastra um evento
 */
router.post('/', async (req, res) => {
    if(!req.headers.authorization)
        return res.status(401).json([{ Erro : 'Nenhum token enviado' }]);

    let tokenBody;
    try {
        tokenBody = jwt.verify(req.headers.authorization, nconf.get('secret'));
    } catch(ex) {
        return res.status(401).json([{ Erro : 'Token invalido' }]);
    }

    if(tokenBody.user.role == 'admin'){
        try {
            let evento = await eventosController.cadastrarEvento({
                c_titulo: req.body.c_titulo,
                c_local: req.body.c_local,
                c_data: req.body.c_data,
                c_horario: req.body.c_horario,
                c_datacompleta: req.body.c_datacompleta,
                c_local_lat: req.body.c_local_lat,
                c_local_long: req.body.c_local_long,
                c_presencas: 0,
                active: 'true',
                created_at: Date.now(),
                updated_at: Date.now(),
                picture_path: ""
            });
            return res.status(201).json({ affectedRows: evento.affectedRows, changedRows: evento.changedRows });
        } catch (err) {
            return res.status(400).json([{ Erro : 'Erro ao cadastrar evento' }]);
        }
    } else {
        return res.status(401).json([{ Erro : 'Permissão insuficiente' }]);
    }
});

/**
 * Busca os eventos disponíveis
 */
router.get('/', async (req, res) => {
    try {
        return res.status(200).json(await eventosController.buscarEventos());
    } catch (err) {
        return res.status(400).json([{ Erro : 'Erro ao recuperar eventos' }]);
    }
});

/**
 * Confirmar a participação de um usuario ao evento
 */
router.put('/confirmar/presenca/:idEvento', async (req, res) => {
    if(!req.headers.authorization)
        return res.status(401).json([{ Erro : 'Nenhum token enviado' }]);

    let tokenBody;
    try {
        tokenBody = jwt.verify(req.headers.authorization, nconf.get('secret'));
    } catch(ex) {
        return res.status(401).json([{ Erro : 'Token invalido' }]);
    }

    try {
        let evento = await eventosController.buscarEvento(req.params.idEvento);
        let newFields = {
            c_presencas: ++evento.c_presencas
        };
        let eventosUpdated = await eventosController.atualizarEvento(newFields, req.params.idEvento);
        evento.updated_at = eventosUpdated.updated_at;
        return res.status(200).json(evento);
    } catch (err) {
        return res.status(400).json([{ Erro : 'Erro ao confirmar ´resemã' }]);
    }
});

module.exports = router;