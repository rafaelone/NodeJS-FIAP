module.exports = function(app){
	app.get('/cadastrarCliente', (req,res) => {
		app.app.controllers.cadastrar_cliente.formulario_cliente(app, req, res);
	});

	app.post('/cliente/cadastrar', (req, res) => {
		app.app.controllers.cadastrar_cliente.add_cliente(app, req, res);
	});
}