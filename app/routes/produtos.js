//var dbConnection = require("../../config/dbConnection");

module.exports = function(app){

	
app.get('/produtos', (req, res) => {
	var connection = app.config.dbConnection();
		connection.query( 
			'select * from produtos',
			(error, result)=>{
				res.render('produtos/produtos', {produtos: result});
			}
		 );
	});
};