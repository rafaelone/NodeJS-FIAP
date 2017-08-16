var http = require('http');

var server = http.createServer(function(req, res){
	var categoria = req.url;
		if(categoria == "/tecnologia"){
			res.end("<html><body style='background: black'><p style='text-align: center; color: blue; font-size: 40px; '>Categoria e Tecnologia</p></body></html>");
		}else if (categoria == "/lol"){
			res.end("<html><body style='background: black'><p style='text-align: center; color: red; font-size: 40px;'>Categoria League of Legends</p></body></html>");
		}else if (categoria == "/pop"){
			res.end("<html><body style='background: black'><p style='text-align: center; color: blue; font-size: 20px '>Cantores pop</p></body></html>");

		}
		res.end("<html><body style='background: black'><p style='text-align: center; color: blue; font-size: 20px '>Index</p></body></html>");
});

server.listen(3000);
