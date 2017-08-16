var express = require('express');
var consign = require('consign');
var msg = require ('../mod_teste');
var app = express();
// a engine de view agora mudou, será o ejs
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.into(app);


	module.exports = {
		app,
		msg
	};