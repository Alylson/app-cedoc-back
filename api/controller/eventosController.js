'use strict';

const mysqlQuery = require('../model/mysqlQuery');

const TABLE_NAME = "liv_evento";

exports.cadastrarEvento = function(evento){

    const SQL_CADASTRO = "INSERT INTO "+TABLE_NAME+"(c_titulo, c_local, c_data, c_horario, c_datacompleta, c_local_lat, c_local_long, c_presencas, active, created_at, updated_at, picture_path) "
        +"values("
        + "'" + evento.c_titulo + "', "
        + "'" + evento.c_local + "', "
        + "'" + evento.c_data + "', "
        + "'" + evento.c_horario + "', "
        + "'" + evento.c_datacompleta + "', "
        + evento.c_local_lat + ", "
        + evento.c_local_long + ", "
        + evento.c_presencas + ", "
        + "'" + evento.active + "', "
        + evento.created_at + ", "
        + evento.updated_at + ", "
        + "'" + evento.picture_path + "')";

    return mysqlQuery(SQL_CADASTRO, pool)
};

exports.buscarEventos = function(){
    const SQL_SELECT = "SELECT * FROM "+TABLE_NAME+";";
    return mysqlQuery(SQL_SELECT, pool)
};

exports.buscarEvento = async (idEvento) => {
    const SQL_SELECT_ONE = "SELECT * FROM "+TABLE_NAME+" WHERE n_pkid = "+idEvento+";";
    let e = JSON.stringify(await mysqlQuery(SQL_SELECT_ONE, pool));
    e = JSON.parse(e);
    try {
        if (e[0] != null) {
            if (e[0].RowDataPacket != null) {
                return e[0].RowDataPacket;
            } else {
                return e[0]
            }
        }
    } catch (err) {}
    return e
};

exports.atualizarEvento = async (newFields, idEvento) => {
    let updateDate = Date.now();
    const SQL_UPDATE = "UPDATE "+TABLE_NAME+" SET"
        + (newFields.c_titulo != null ? " c_titulo = '" + newFields.c_titulo + "'," : "")
        + (newFields.c_local != null ? " c_local = '" + newFields.c_local + "'," : "")
        + (newFields.c_data != null ? " c_data = '" + newFields.c_local + "'," : "")
        + (newFields.c_horario != null ? " c_horario = '" + newFields.c_local + "'," : "")
        + (newFields.c_datacompleta != null ? " c_datacompleta = '" + newFields.c_local + "'," : "")
        + (newFields.c_local_lat != null ? " c_local_lat = " + newFields.c_local_lat + "," : "")
        + (newFields.c_local_long != null ? " c_local_long = " + newFields.c_local_long + "," : "")
        + (newFields.c_presencas != null ? " c_presencas = " + newFields.c_presencas + "," : "")
        + (newFields.active != null ? " active = '" + newFields.active + "'," : "")
        + (newFields.created_at != null ? " created_at = " + newFields.created_at + "," : "")
        + (newFields.picture_path != null ? " picture_path = '" + newFields.picture_path + "'," : "")
        + " updated_at = " + updateDate
        + " WHERE n_pkid = " + idEvento + ";";
    let res = await mysqlQuery(SQL_UPDATE, pool);
    res["updated_at"] = updateDate;
    return res
};