module.exports = function(app){
	app.get('/cadastrarCliente', (req,res) => {
		res.render('admin/form_add_cliente');
	});

	app.post('/cliente/cadastrar', (req, res) => {
		var cliente = req.body;
		var connection = app.config.dbConnection();
		var clienteModel = new app.app.models.ClienteDAO(connection);

		clienteModel.salvarClientes(cliente, (error, result)=>{
			res.redirect('/clientes');
		});
	});
}