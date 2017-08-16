//var dbConnection = require("../../config/dbConnection");
module.exports = function (app){
	
	app.get('/clientes', (req, res) =>{
		var connection = app.config.dbConnection();
		connection.query(
			'select * from clientes',
				(error, result)=>{
					res.render("cliente/clientes", {clientes: result});
				}
			);
	});
};
