module.exports = function(app){
	app.get('/cadastrar', (req, res) => {
		res.render('admin/form_add_produto');
	});

	app.post('/produtos/salvar', (req, res) => {
		var produto = req.body;
		res.send(produto);
		//res.send('oola');
	});
}