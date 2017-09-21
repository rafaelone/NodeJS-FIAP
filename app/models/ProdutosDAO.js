function ProdutosDAO( connection){
	this._connection = connection;


}

	ProdutosDAO.prototype.getProdutos = function( callback) {
		this._connection.query('select * from produtos', callback);
	}

	ProdutosDAO.prototype.getProduto = function ( params,  callback){
		const id = params.id;
		this._connection.query(`SELECT * FROM produtos WHERE id_produtos = ${id}`, callback);
	}

	ProdutosDAO.prototype.salvarProdutos =  function(produto,  callback){
		this._connection.query("INSERT INTO produtos SET ? ", produto, callback);
	}

	ProdutosDAO.prototype.get5UltimosProdutos = function (callback){
		this._connection.query("SELECT * FROM produtos LIMIT 5", callback);
	}

module.exports = function() {
	
	return ProdutosDAO;
}
