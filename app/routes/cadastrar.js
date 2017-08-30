module.exports = function(app){
	app.get('/cadastrar', (req, res) => {
		res.render('admin/form_add_produto');
	});

	app.post('/produtos/salvar', (req, res) => {
		var produto = req.body;
	
		var connection = app.config.dbConnection();
		var produtosModel = app.app.models.produtosModel;
		
		produtosModel.salvarProdutos(produto, connection, (error, result)=>{
			//res.render('produtos/produtos');
			res.redirect('/produtos');
			});
	});
}