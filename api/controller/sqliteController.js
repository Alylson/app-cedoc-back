'use strict';

const utils = require('../model/utils');

const AUDIOVISUAL = "cedoc_audiovisual";
const CAMPUS_JOURNAL = "cedoc_campusjournal";
const CAMPUS_REPORTER = "cedoc_campusreporter";

const selectAll = function(query, callback){

    dbSqlite.all(query, function(err, row) {
        if (err) {
            return callback(err, null)
        } else {
            return callback(null, row)
        }
    });
};

const buscarDocs = function(tipo, callback){

    switch (tipo) {
        case AUDIOVISUAL:{
            let query = "SELECT * " +
                "FROM cedoc_audiovisual " +
                "INNER JOIN cedoc_doc ON cedoc_audiovisual.doc_ptr_id=cedoc_doc.id " +
                "INNER JOIN cedoc_audiovisual_categories ON cedoc_doc.id=cedoc_audiovisual_categories.audiovisual_id " +
                "INNER JOIN cedoc_categoria ON cedoc_audiovisual_categories.categoria_id=cedoc_categoria.id";

            selectAll(query, callback);
            break;
        }
        case CAMPUS_JOURNAL:{
            let query = "SELECT * " +
                "FROM cedoc_campusjournal " +
                "INNER JOIN cedoc_doc ON cedoc_campusjournal.doc_ptr_id=cedoc_doc.id";

            selectAll(query, callback);
            break;
        }
        case CAMPUS_REPORTER:{
            let query = "SELECT * " +
                "FROM cedoc_campusreporter " +
                "INNER JOIN cedoc_doc ON cedoc_campusreporter.doc_ptr_id=cedoc_doc.id";

            selectAll(query, callback);
            break;
        }
        default:
            callback("Tipo inválido", null);
    }
};

const buscarDocsWhere = function(tipo, where, callback){

    switch (tipo) {
        case AUDIOVISUAL:{
            let query = "SELECT * " +
                "FROM cedoc_audiovisual " +
                "INNER JOIN cedoc_doc ON cedoc_audiovisual.doc_ptr_id=cedoc_doc.id " +
                "INNER JOIN cedoc_audiovisual_categories ON cedoc_doc.id=cedoc_audiovisual_categories.audiovisual_id " +
                "INNER JOIN cedoc_categoria ON cedoc_audiovisual_categories.categoria_id=cedoc_categoria.id " +
                "WHERE cedoc_doc.id in("+where+") ";

            selectAll(query, callback);
            break;
        }
        case CAMPUS_JOURNAL:{
            let query = "SELECT * " +
                "FROM cedoc_campusjournal " +
                "INNER JOIN cedoc_doc ON cedoc_campusjournal.doc_ptr_id=cedoc_doc.id " +
                "WHERE cedoc_doc.id in("+where+") ";

            selectAll(query, callback);
            break;
        }
        case CAMPUS_REPORTER:{
            let query = "SELECT * " +
                "FROM cedoc_campusreporter " +
                "INNER JOIN cedoc_doc ON cedoc_campusreporter.doc_ptr_id=cedoc_doc.id " +
                "WHERE cedoc_doc.id in("+where+") ";

            selectAll(query, callback);
            break;
        }
        default:
            callback("Tipo inválido", null);
    }
};

const buscarDocsAudiovisualPorCategoria = function(categoriaId, callback){

    const QUERY = "SELECT * " +
        "FROM cedoc_doc " +
        "INNER JOIN cedoc_audiovisual ON cedoc_doc.id=cedoc_audiovisual.doc_ptr_id " +
        "INNER JOIN cedoc_audiovisual_categories ON cedoc_doc.id=cedoc_audiovisual_categories.audiovisual_id " +
        "INNER JOIN cedoc_categoria ON cedoc_audiovisual_categories.categoria_id=cedoc_categoria.id " +
        "WHERE cedoc_audiovisual_categories.categoria_id = " + categoriaId;

    selectAll(QUERY, callback);
};

const buscarCategorias = function(callback){

    const QUERY = "SELECT * " +
        "FROM cedoc_categoria";

    selectAll(QUERY, callback);
};

const buscarCategoria = function(idCategoria, callback){

    const QUERY = "SELECT * " +
        "FROM cedoc_categoria " +
        "WHERE id="+idCategoria;

    selectAll(QUERY, callback);
};

module.exports = {
    AUDIOVISUAL: AUDIOVISUAL,
    CAMPUS_JOURNAL: CAMPUS_JOURNAL,
    CAMPUS_REPORTER: CAMPUS_REPORTER,

    selectAll: selectAll,
    buscarDocs: buscarDocs,
    buscarDocsWhere: buscarDocsWhere,
    buscarCategorias: buscarCategorias,
    buscarDocsAudiovisualPorCategoria: buscarDocsAudiovisualPorCategoria,
    buscarCategoria: buscarCategoria
};
