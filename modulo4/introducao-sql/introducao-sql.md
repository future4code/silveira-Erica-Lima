#  Banco de Dados e Introdução a SQL

### Exercício 1

a)VARCHAR(n): determinar que é uma string de determinado números de caracteres,
Primary key: é identificador único de forma que encontra determinado usuário.,
Not null: não deixa que determinado campo, seja aceito se tiver vazio,
Date: é para data(lembrando yyyy/mm/dd)


b) 
SHOW DATABASES;
Ver o dado de banco presente

SHOW TABLES;
Recebemos as tabelas do banco já existente.

c) DESCRIBE
Mostra detalhado a estrutura da tabela, ex.: type, key,... 





```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;

``` 
### Exercício 2

Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0.141 sec

c)Deu erro por está sendo inserido mais de tres propriedades na querie.
Adicionei as propriedades , " birth_date, gender"

d) precisei adicionar a propriedade name.

e)Faltou "" na data.

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Erica",
  120000,
  "1967-08-23",
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Cauã Reymond",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Alice Braga",
  719333.73,
  "1989-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Milton Gonçalves",
  9193377.33,
  "1933-03-26", 
  "male"
);
```

### Exercício 3

```
SELECT * FROM Actor;

SELECT id, name from Actor WHERE gender = "female";

SELECT id, salary from Actor 
WHERE name = "Tony Ramos";

SELECT gender from Actor 
WHERE gender = "invalid";

SELECT id, name, salary from Actor 
WHERE salary <= 5000000;

SELECT id, name from Actor WHERE id = "002";
```
c) Gender não ter

e)Coluna desconhecida 'nome' na 'lista de campos'
Estava errado porque o correto é name.
SELECT id, name from Actor WHERE id = "002";

##Exercício 4
```
SELECT id, name, salary from Actor 
WHERE salary > 300000 And
  name LIKE "j%";

```