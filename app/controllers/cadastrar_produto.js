module.exports.form_add_produto = function (app, req, res){
    res.render('admin/form_add_produto', {validacao: {}, produto:{} });
}

module.exports.add_produto = function (app, req, res){
    var produto = req.body;
		
		req.assert('nome', 'Nome é obrigatorio').notEmpty();
		req.assert('descricao', 'Descrição é obigatoria').notEmpty();

		var erros = req.validationErrors();

		console.log(erros);
		if (erros){
			res.render('admin/form_add_produto', {validacao: erros, produto : produto});
			return;
		}

		var connection = app.config.dbConnection();
		var produtosModel =  new app.app.models.ProdutosDAO(connection);
		
		produtosModel.salvarProdutos(produto,  (error, result)=>{
			//res.render('produtos/produtos');
			res.redirect('/produtos');
			});
}