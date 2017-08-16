var mysql = require("mysql");
var conecMySQL = function (){

console.log('Conexão foi estabelecida');
		var connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'fiap',
			database: 'sistema_produtos'
		});
		return connection;
}

	module.exports = function(){
		console.log('o autoload carregou o modulo de conexao');
		return conecMySQL;
}
