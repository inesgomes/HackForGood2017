BEGIN TRANSACTION;
CREATE TABLE users(
	username text,
	email text,
	password text,
	telemovel text,
	localizacao text,
	primary key(username)
);
INSERT INTO `users` VALUES ('carlos_silva','carlos@gmail.com','123','961234567','Porto');
INSERT INTO `users` VALUES ('joao_goncalves','joao@gmail.com','123','961234567','Porto');
INSERT INTO `users` VALUES ('gabriela_almeida','aag@gmail.com','123','961234567','Porto');
INSERT INTO `users` VALUES ('teresa_fonseca','tf@gmail.com','123','961234567','Porto');
INSERT INTO `users` VALUES ('judite_martins','tf@gmail.com','123','961234567','Porto');
CREATE TABLE pedidos(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	username text REFERENCES users (username),
	categoria text,
	titulo text,
	descricao text,
	localizacao text,
	time_stamp DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO `pedidos` VALUES (1,'carlos_silva','Education','Need help translating a document','I have a document that I need help translating to Portuguese','Porto','2017-06-25 07:32:24');
INSERT INTO `pedidos` VALUES (2,'joao_goncalves','Goods','Looking for a bike donation so I can get to work faster','I''m looking for someone who doesn''t need an old bike and want to donate it to me. A bike would be really useful for getting to work faster.','Porto','2017-06-25 07:35:03');
INSERT INTO `pedidos` VALUES (3,'judite_martins','Doubts','How can I get a consultation with a doctor?','Can anyone help me find out how I can get a consultation with a doctor for free or cheap price?','Porto','2017-06-25 07:37:43');
CREATE TABLE ofertas(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	username text REFERENCES users (username),
	categoria text,
	titulo text,
	descricao text,
	localizacao text,
	time_stamp DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO `ofertas` VALUES (1,'gabriela_almeida','Education','Willing to teach english!','I''m an english teacher and I am willing to teach english to those who want to learn','Porto','2017-06-25 07:41:38');
INSERT INTO `ofertas` VALUES (2,'teresa_fonseca','Education','I can translate Farsi to Portuguese','I am willing to help translate oficial Farsi documents','Porto','2017-06-25 07:46:23');
INSERT INTO `ofertas` VALUES (3,'carlos_silva','Goods','I am giving away some clothes that don''t fit me anymore','Contact me if you''re interested','Porto','2017-06-25 07:47:34');
INSERT INTO `ofertas` VALUES (4,'gabriela_almeida','Volunteering','Looking for places to volunteer','I want to become apart of the volunteering comunity helping the refugees and I am trying to find out how I can help.','Porto','2017-06-25 07:49:34');
CREATE TABLE mensagens(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	sender text references users(username),
	receiver text references users(username),
	oferta integer references ofertas(id),
	pedido integer references pedidos(id),
	time_stamp DATETIME DEFAULT CURRENT_TIMESTAMP,
	mensagem text
);
INSERT INTO `mensagens` VALUES (1,'carlos_silva','judite_martins',1,'null','2017-06-25 07:57:19','Hello, i am interested! please contact me');
INSERT INTO `mensagens` VALUES (2,'judite_martins','carlos_silva',1,'null','2017-06-25 07:59:30','When are you available?');
COMMIT;
