module.exports.index = function (app, req, res){


    var connection = app.config.dbConnection();
    var ProdutosDAO = new app.app.models.ProdutosDAO(connection);
    console.log("teste");
    ProdutosDAO.get5UltimosProdutos(function (error, result) {
        console.log(result);
    res.render('home/index', {produtos: result});
    });
}