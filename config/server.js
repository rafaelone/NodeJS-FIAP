var express = require('express');
var msg = require ('../mod_teste');
var app = express();
// a engine de view agora mudou, será o ejs
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	module.exports = {
		app,
		msg
	};