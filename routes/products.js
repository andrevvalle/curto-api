var express = require('express'),
	router = express.Router();

var Product = require('../models/product');

router.get('/', function(req, res) {
  	Product.find({}, {'_id': 0}).exec(function(err, result){
        res.json(result);
    });
});

module.exports = router;
