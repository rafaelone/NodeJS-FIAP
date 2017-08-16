module.exports = function(app){
	app.get('/cadastrar', (req, res) => {
		res.render('admin/form_add_produto');
	});
}
