var express = require('express'),
	router = express.Router();

var Produto = require('../models/product');

router.get('/', function(req, res) {
  res.send({});
});

router.put('/', function(req, res) {
  res.send({});
});

module.exports = router;
