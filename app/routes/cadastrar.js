module.exports = function(app){
	app.get('/cadastrar', (req, res) => {
		res.render('admin/form_add_produto');
	});

	app.post('/produtos/salvar', (req, res) => {
		var produto = req.body;
	
		var connection = app.config.dbConnection();
		var produtosModel =  new app.app.models.ProdutosDAO(connection);
		
		produtosModel.salvarProdutos(produto,  (error, result)=>{
			//res.render('produtos/produtos');
			res.redirect('/produtos');
			});
	});
}