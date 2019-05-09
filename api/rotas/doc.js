var express = require('express');
var router = express.Router();

var sqliteController = require('../controller/sqliteController');

/* Busca todos os docs audiovisuais */
router.get('/audiovisual', function (req, res) {

    sqliteController.buscarDocs(sqliteController.AUDIOVISUAL, function(err, result) {
        if (err) {
            return res.status(500).json({ error: err, message: 'Erro interno no servidor!'});
        }
        return res.status(200).json(result);
    });

});

/* Busca todos os docs campus journal */
router.get('/campusjournal', function (req, res) {

    sqliteController.buscarDocs(sqliteController.CAMPUS_JOURNAL, function(err, result) {
        if (err) {
            return res.status(500).json({ error: err, message: 'Erro interno no servidor!'});
        }
        return res.status(200).json(result);
    });

});

/* Busca todos os docs e formata o JSON de reposta baseado nas categorias */
router.get('/formatado/audiovisual', function (req, res) {

    if (req.query.favs != null) {
        sqliteController.buscarDocsWhere(sqliteController.AUDIOVISUAL, req.query.favs, function (err, docs) {

            if (err) { return res.status(500).json({ error: err, message: 'Erro interno no servidor!'}); }
            return res.status(200).json(docs);
        });
    } else {

        sqliteController.buscarCategorias(function(err, categorias) {

            if (err) { return res.status(500).json({ error: err, message: 'Erro interno no servidor!'}); }

            if (categorias) {
                sqliteController.buscarDocs(sqliteController.AUDIOVISUAL, function (err, docs) {

                    if (err) { return res.status(500).json({ error: err, message: 'Erro interno no servidor!'}); }
                    let formatedDocs = [];

                    for (let categoria of categorias) {

                        let formatedCategoria = {
                            idCategoria: categoria.id,
                            categoria: categoria.categoria,
                            docs: []
                        };

                        for (let doc of docs) {
                            if (doc.categoria_id === categoria.id) {
                                formatedCategoria.docs.push(doc)
                            }
                        }
                        formatedDocs.push(formatedCategoria)
                    }
                    return res.status(200).json(formatedDocs);
                });
            } else {
                return res.status(200).json({});
            }
        });

    }

});

/* Busca os docs de uma determinada categoria e formata o JSON de reposta baseado na categoria */
router.get('/formatado/audiovisual/categoria/:idCategoria', function (req, res) {

    sqliteController.buscarCategoria(req.params.idCategoria, function(err, categorias) {

        if (err) { return res.status(500).json({ error: err, message: 'Erro interno no servidor!'}); }

        if (categorias) {
            sqliteController.buscarDocsAudiovisualPorCategoria(req.params.idCategoria, function (err, docs) {

                if (err) { return res.status(500).json({ error: err, message: 'Erro interno no servidor!'}); }
                let formatedDocs = [];

                for (let categoria of categorias) {

                    let formatedCategoria = {
                        idCategoria: categoria.id,
                        categoria: categoria.categoria,
                        docs: []
                    };

                    for (let doc of docs) {
                        if (doc.categoria_id === categoria.id) {
                            formatedCategoria.docs.push(doc)
                        }
                    }
                    formatedDocs.push(formatedCategoria)
                }
                return res.status(200).json(formatedDocs);
            });
        } else {
            return res.status(200).json({});
        }
    });

});

/* Buscar todas as categorias */
router.get('/categorias', function (req, res) {

    sqliteController.buscarCategorias(function(err, result) {
        if (err) {
            return res.status(500).json({ error: err, message: 'Erro interno no servidor!'});
        }
        return res.status(200).json(result);
    });

});

/* Busca uma categoria especifica */
router.get('/categorias/:idCategoria', function (req, res) {

    sqliteController.buscarCategoria(req.params.idCategoria, function(err, result) {
        if (err) {
            return res.status(500).json({ error: err, message: 'Erro interno no servidor!'});
        }
        return res.status(200).json(result);
    });

});

module.exports = router;