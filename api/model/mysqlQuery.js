'use strict'
module.exports = function(SQL, pool){
	return new Promise(function (resolve, reject) {
		pool.query(SQL, (err, rows, fields) => {
			if (err) reject(err);
			resolve(rows);
		});
	})
}