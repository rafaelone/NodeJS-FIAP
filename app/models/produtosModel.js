module.exports = function() {
	this.getProdutos = function(connection, callback) {
		connection.query('select * from produtos', callback);
	}
	this.getProduto = function (connection, params,  callback){
		const id = params.id;
		connection.query(`SELECT * FROM produtos WHERE id_produto = ${id}`, callback);
	}

	this.salvarProdutos = function(produto, connection, callback){
		connection.query("INSERT INTO produtos SET ? ", produto, callback);
	}

	return this;
}
