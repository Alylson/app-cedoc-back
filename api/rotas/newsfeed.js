'use strict';

var newsfeedController = require('../controller/newsfeedController');

module.exports = function(app, pool) {
	
	app.route('/newsfeed').get(function(req, res, next) {
		newsfeedController.buscarTodos(req, res, pool);
	});
}