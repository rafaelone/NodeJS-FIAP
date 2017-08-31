function ClienteDAO( connection){
	this._connection = connection;


}
	ClienteDAO.prototype.salvarClientes = function(cliente, callback) {
		this._connection.query("INSERT INTO clientes SET ? ", cliente, callback);
	}

module.exports = function() {
	
	return ClienteDAO;
}