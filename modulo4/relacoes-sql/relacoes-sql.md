##Exercício 1 

a. A chave estrangeira permite que podemos relacionar outras tabelas, ou seja, pegar dados de outra tabela para relacionar com determinada tabela.

b.
```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
        comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
        movie_id VARCHAR(255),
        FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("006","Legal!",8,"002");

```
c.
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`silveira-21814486-erica-lima`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Não é possível adicionar ou atualizar uma linha filho.

```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("007","Legal!",8,"009");
```

d.
```
ALTER TABLE Movie DROP COLUMN rating;

```

##Exercício 2

a. Essa nova tabela vai relacionar todos os filmes e atores, se essas tabelas tem alguma conexão com a outra através do id.

b.
```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
       FOREIGN KEY (movie_id) REFERENCES Movie(id),
       FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("002","006");
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("005","004");
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("006","004");
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("004","006");
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("001","006");
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("001","005");
```

c.Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`silveira-21814486-erica-lima`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
Não é possível adicionar ou atualizar uma linha.

```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("001","0012");
```
d. Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column. Cannot use range access on index 'PRIMARY' due to type or collation conversion on field 'id' To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.
está usando o modo de atualização segura e tentou atualizar uma tabela sem um WHERE que usa uma coluna KEY.
```
DELETE FROM Actor WHERE id = 4;
```

##Exercício 3

a. Vai relacionar a tabela de filmes com a tabela avaliações através do id. Assim, fazer as combinações que forem encontradas. O operador ON vai fazer essa ponte com as duas tabelas através da condição.

b.
```
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```



b.