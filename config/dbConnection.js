var mysql = require("mysql");
	module.exports = function(){
		var connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'fiap',
			database: 'sistema_produtos'
		});
		return connection;
}