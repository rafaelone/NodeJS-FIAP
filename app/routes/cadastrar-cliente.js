module.exports = function(app){
	app.get('/cadastrarCliente', (req,res) => {
		res.render('admin/form_add_cliente', {validacao: {}, cliente:{} });
	});

	app.post('/cliente/cadastrar', (req, res) => {
		var cliente = req.body;

		req.assert('nome', 'Nome é obrigatorio').notEmpty();
		req.assert('sobrenome', 'sobrenome é obrigatorio').notEmpty();
		req.assert('data_nasc', 'Data de nascimento é obrigatorio').notEmpty().isDate({format: 'DD-MM-YYYY'});
		req.assert('cep', 'cep é obrigatorio').notEmpty();
		req.assert('endereco', 'Endereço deve ter no minimo 10 e maximo 200 caracteres').len(10,200);
		req.assert('cpf', 'cpf é obrigatorio').notEmpty();
		req.assert('cpf', 'cpf deve conter 11 caracteres').len(11);

		var erros = req.validationErrors();

		console.log(erros);
		if (erros){
			res.render('admin/form_add_cliente', {validacao: erros, cliente : cliente});
			return;
		}

		var connection = app.config.dbConnection();
		var clienteModel = new app.app.models.ClienteDAO(connection);

		clienteModel.salvarClientes(cliente, (error, result)=>{
			res.redirect('/clientes');
		});
	});
}