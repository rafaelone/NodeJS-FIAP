create database sistema_produtos;


DROP TABLE IF EXISTS `clientes`;

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `sobrenome` varchar(45) DEFAULT NULL,
  `cep` int(11) DEFAULT NULL,
  `endereco` varchar(45) DEFAULT NULL,
  `cpf` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



LOCK TABLES `clientes` WRITE;
INSERT INTO `clientes` VALUES (1,'Gustavo','Torrente',12282110,'R. Professor','3156421146'),(2,'Batuta','Costa',5417060,'R. Mais Legal','21224587472'),(3,'Rafel','Finoto',5417054,'R. Pirituba','55214810601'),(4,'Renato','Massa',5817056,'R. do Sucesso','71333870345'),(5,'Rene','Farias',5820160,'R. do Amigo','71333870345');
UNLOCK TABLES;


DROP TABLE IF EXISTS `produtos`;

CREATE TABLE `produtos` (
  `id_produto` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `descricao` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id_produto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


LOCK TABLES `produtos` WRITE;

INSERT INTO `produtos` VALUES (1,'Alface','Alface lisa'),(2,'Tomate','Tomate Pomodoro'),(3,'Maça','Maça Monica'),(4,'Abacaxi','Natural');

UNLOCK TABLES;
