module.exports = function() {
	this.salvarClientes = function(cliente, connection, callback) {
		connection.query("INSERT INTO clientes SET ? ", cliente, callback);
	}
	return this;
}