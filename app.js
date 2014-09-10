// app.js

// BASE SETUP
// ==============================================

var express  = require('express'),
	mongoose = require('mongoose'),
	app      = express(),
	env      = require('./config/environment'),
	routes   = require('./routes'),
	port     = process.env.PORT || 5000;

mongoose.connect(env.config.mongo);

// ROUTES
// ==============================================

app.use('/products', routes.products);

app.use('/dailyConsumption', routes.daily);

app.use('*', routes.notFound);

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Curto Tabuleiro API on port ' + port);
