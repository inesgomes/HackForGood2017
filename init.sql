create table users(
	username text,
	contacto text,
	primary key(username)
);

create table pedidos(
	id SERIAL PRIMARY KEY,
	username text REFERENCES users (username),
	categoria text,
	time_stamp timestamp,
	custo text
);

create table ofertas(
	id SERIAL PRIMARY KEY,
	username text REFERENCES users (username),
	categoria text,
	time_stamp timestamp,
	custo text
);

create table resposta(
	id SERIAL PRIMARY KEY,
	recetor text REFERENCES users (username),
	dador text REFERENCES users (username),
	time_stamp timestamp,
	comunicacao text
);
	
	
	
	