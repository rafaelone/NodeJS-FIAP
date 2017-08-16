var dbConnection = require("../../config/dbConnection");
module.exports = function(app){
	var connection = dbConnection();
app.get('/produtos', (req, res) => {
		connection.query( 
			'select * from produtos',
			(error, result)=>{
				res.render('produtos/produtos', {produtos: result});
			}
		 );
	});
};