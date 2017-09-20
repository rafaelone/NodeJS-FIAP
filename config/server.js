var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator')
var msg = require ('../mod_teste');
var app = express();
// a engine de view agora mudou, será o ejs
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(expressValidator());
	consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);


	module.exports = {
		app,
		msg
	};