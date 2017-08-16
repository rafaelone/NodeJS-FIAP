var dbConnection = require("../../config/dbConnection");
module.exports = function (app){
	var connection = dbConnection();
	app.get('/clientes', (req, res) =>{
		connection.query(
			'select * from clientes',
				(error, result)=>{
					res.render("cliente/clientes", {clientes: result});
				}
			);
	});
};