var express = require('express'),
	router = express.Router();

var Product = require('../models/product');

router.get('/', function(req, res) {
  	Product.find().exec(function(err, result){
        res.json(result);
    });
});

module.exports = router;
