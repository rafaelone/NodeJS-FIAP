module.exports = function(app){
	app.get('/cadastrar', (req, res) => {
		app.app.controllers.cadastrar_produto.form_add_produto(app, req, res);
	});

	app.post('/produtos/salvar', (req, res) => {
		app.app.controllers.cadastrar_produto.add_produto(app, req, res);
	});
}