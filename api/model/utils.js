'use strict'

const NOTICIA = 1;
const ENTIDADE = 2;

exports.timestamp = function() {
	var ts		= new Date(Date.now());
	let day 	= ts.getDate()		< 10 ? '0' + ts.getDate() 		: ts.getDate();
	let month 	= ts.getMonth()		< 10 ? '0' + (ts.getMonth()+1)	: (ts.getMonth()+1);
	let year	= ts.getFullYear();
	let hours	= ts.getHours()		< 10 ? '0' + ts.getHours() 		: ts.getHours();
	let minutes	= ts.getMinutes()	< 10 ? '0' + ts.getMinutes() 	: ts.getMinutes();
	let seconds	= ts.getSeconds()	< 10 ? '0' + ts.getSeconds() 	: ts.getSeconds();
	return "["+day+"/"+month+"/"+year+" "+hours+":"+minutes+":"+seconds+"] ";
}
 
exports.formatarNewsfeed = function(timeline, noticias, entidades) {
	var result = [];
	for(let item of timeline) {
		if(item.n_pktipo == NOTICIA) {
			for(let noticia of noticias) {
				if(item.n_pkent == noticia.n_pknoticia) {
					var data = {
						n_pktipo: item.n_pktipo,
						n_pkent: item.n_pkent,
						noticia: noticia
					}
					result.push(data);
					break;
				}
			}
		} else if(item.n_pktipo == ENTIDADE) {
			for(let entidade of entidades) {
				if(item.n_pkent == entidade.n_pkent) {
					var data = {
						n_pktipo: item.n_pktipo,
						n_pkent: item.n_pkent,
						entidade: entidade
					}
					result.push(data);
					break;
				}
			}
		} else {
			var data = {
				n_pktipo: item.n_pktipo,
				n_pkent: item.n_pkent
			}
			result.push(data);
		}
	}
	return result;
}

/**
 * Esse metodo faz a contagem de quantas entidades/livros existem em
 * cada categoria, monta e retorna um JSON com as informações dessa 
 * categoria e com a contagem de entidades dessa categoria.
 */
exports.contarLivrosCategoria = function(categorias, entidades){
	var result = [];
	for(let categoria of categorias){
		let count = 0;
		for(let entidade of entidades){
			if(entidade.c_categoria.indexOf(categoria.n_pkcatego) != -1){
				++count;
			}
		}
		var data = {
			n_pkcatego: categoria.n_pkcatego,
			c_nomecatego: categoria.c_nomecatego,
			c_thumbnail: categoria.c_thumbnail,
			listagem: count
		}
		result.push(data);
	}
	return result;
}

exports.isEmpty = function(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop)) return false;
    }
    return true;
}