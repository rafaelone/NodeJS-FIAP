const { app, msg } = require('./config/server');

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Servidor Ativo e rodando com Express na porta ${PORT}`);
	console.log(msg());
});

/*app.get('/tecnologia', function(req, res){
	
	res.send("<html><body style='background: black'><p style='text-align: center; color: blue; font-size: 40px; '>Categoria e Tecnologia</p></body></html>");
	
});

app.get('/lol', function(req, res){
	
	res.send("<html><body style='background: black'><p style='text-align: center; color: blue; font-size: 40px; '>League of legends</p></body></html>");
	
});


app.get('/musica', function(req, res){
	
	res.send("<html><body style='background: black'><p style='text-align: center; color: blue; font-size: 40px; '>Musica</p></body></html>");
	
});

*//*
app.get('/tabuada', (req, res) => {
	var mensagem = "<center><h2 style='text-align: center; font-weight: bold; border-bottom: 1px solid black;'>Tabuadas</h2>";
	for (e=1; e <=10; e++) { 

 		mensagem += "<p> Tabuada do: " +e+ "</p>";
	
 	for (i=1; i<=10; i++) { 
 	
 	 	var resultado =  "<h4>"+ e +" X " + i + " = " + e*i +"</h4>";
 	 	mensagem += resultado;
 	 } 
	}
	mensagem += "<hr>";
	mensagem += '</center>';
 		
 	res.send(mensagem);

	});*/