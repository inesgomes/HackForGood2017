create table users(
	username text,
	email text,
	password text,
	telemovel text,
	localizacao text,
	primary key(username)
);

create table pedidos(
	id SERIAL PRIMARY KEY,
	username text REFERENCES users (username),
	categoria text,
	titulo text,
	descricao text,
	localizacao text,
	time_stamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

create table ofertas(
	id SERIAL PRIMARY KEY,
	username text REFERENCES users (username),
	categoria text,
	titulo text,
	descricao text,
	localizacao text,
	time_stamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

create table mensagens(
	id serial primary key,
	sender text references users(username),
	receiver text references users(username),
	oferta serial references ofertas(id),
	pedido serial references pedidos(id),
	time_stamp DATETIME DEFAULT CURRENT_TIMESTAMP,
	mensagem text
)
