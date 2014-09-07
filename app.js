// app.js

// BASE SETUP
// ==============================================

var express = require('express'),
	app     = express(),
	port    = process.env.PORT || 8080;

// ROUTES
// ==============================================

var router = express.Router();

router.get('/', function(req, res) {
	res.send('Curto Tabuleiro API');
});

router.get('/dailyConsumption', function(req, res) {
	res.send({});
});

router.put('/dailyConsumption', function(req, res) {
	res.send('PUT /dailyConsumption');
});

router.get('/products', function(req, res) {
	res.send({});
});

app.use('/', router);

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Curto Tabuleiro API on port ' + port);
