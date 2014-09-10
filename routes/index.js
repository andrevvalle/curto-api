/*
 * Routes index.
 */

exports.products = require('../routes/products');

exports.daily = require('../routes/daily');

exports.notFound = function(req, res){
	res.send(404, {name: 'NotFound', message: 'Resource was not found'});
};
