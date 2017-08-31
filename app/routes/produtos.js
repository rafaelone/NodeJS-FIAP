//var dbConnection = require("../../config/dbConnection");

module.exports = function(app){

	
	app.get('/produtos', (req, res) => {
		var connection = app.config.dbConnection();
		var produtosModel = new app.app.models.ProdutosDAO(connection);
		produtosModel.getProdutos( (error, result)=>{
			res.render('produtos/produtos', {produtos: result});
			});
		});

	app.get('/produto/:id', (req, res) => {
		const connection = app.config.dbConnection();
		var produtosModel = new app.app.models.ProdutosDAO(connection);
		produtosModel.getProduto(req.params, (error, result) => {
			res.render('produtos/produto', {produto: result[0]});
			});
		});
};