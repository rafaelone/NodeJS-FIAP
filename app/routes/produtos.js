//var dbConnection = require("../../config/dbConnection");

module.exports = function(app){

	
	app.get('/produtos', (req, res) => {
		var connection = app.config.dbConnection();
		var produtosModel = app.app.models.produtosModel;
		produtosModel.getProdutos(connection, (error, result)=>{
			res.render('produtos/produtos', {produtos: result});
			});
		});

	app.get('/produto/:id', (req, res) => {
		const connection = app.config.dbConnection();
		var produtosModel = app.app.models.produtosModel;
		produtosModel.getProduto(connection, req.params, (error, result) => {
			res.render('produtos/produto', {produto: result[0]});
			});
		});
};