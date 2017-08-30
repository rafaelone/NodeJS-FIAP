module.exports = function(app){
	app.get('/cadastrarCliente', (req,res) => {
		res.render('admin/form_add_cliente');
	});

	app.post('/cliente/cadastrar', (req, res) => {
		var cliente = req.body;
		var connection = app.config.dbConnection();
		var clienteModel = app.app.models.clienteModel;

		clienteModel.salvarClientes(cliente, connection, (error, result)=>{
			res.redirect('/clientes');
		});
	});
}