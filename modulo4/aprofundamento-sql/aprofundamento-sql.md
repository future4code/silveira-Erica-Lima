##Exercício 1

a- Vai entrar na tabela de Actor e  procurar a coluna salary para remover.

b- Vai entrar na tabela de Actor  e procurar a coluna gender e substituir pelo nome sex de 6 caracteres.

c- Vai entrar na tabela de Actor  vai manter o mesmo nome da coluna gender  de 255 caracteres.

d-
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

##Exercício 2

a- 1929-10-19 data de nascimento atualizada
```
UPDATE Actor SET birth_date = "1929-03-27" WHERE id = "003";
``` 

b-
```
UPDATE Actor SET name = UPPER(name) WHERE  id = "005";
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```

c-
```
UPDATE Actor SET name = "Juliana Paes", salary = 500500, birth_date = "1974-04-16"  WHERE id = "005";
```

d- Não foi alterado nada por não existir id = "0010"
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
```
UPDATE Actor SET birth_date = "2003-03-27" WHERE id = "0010";

```

##Exercício 3

a-
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b-
```
DELETE FROM Actor WHERE salary > 1000000 AND gender = "male";
```

##Exercício 4
a-
```
SELECT MAX(salary) FROM Actor
```
b-
```
SELECT MIN(salary) FROM Actor;
```
c-
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d-
```
SELECT SUM(salary) FROM Actor;
```

##Exercício 5

a- Faz a contagem e o agrupamento pela condição de gender.
```
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```
b-
```
SELECT id, name FROM Actor WHERE gender = 'female' ORDER BY name DESC;
```
c-
```
SELECT * FROM Actor  ORDER BY salary;
```
d-
```
SELECT * FROM Actor  ORDER BY salary  DESC LIMIT 3;
```
e-
```
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```

##Exercício 6
a-
```
ALTER TABLE Movie ADD  playing_limit_date DATE;

```
b-
```
ALTER TABLE Movie CHANGE rating rating DOUBLE;
```
c-
```

UPDATE Movie SET playing_limit_date = "2022-06-12" WHERE id = "005";

UPDATE Movie SET playing_limit_date = "2022-04-12" WHERE id = "002";

```
d- Vai dar um sinal de ok mas não vai atualizar por não existir mais esse dado.
```
DELETE FROM Movie WHERE id = "003";

UPDATE Movie SET synopsis = "jasvkjzvlasjv  bavh\znh  vashvassuhSCGBJH  VHSAUVDHSAVLGUV  AXHSVSAVHSHVHBSVBS" WHERE id = "003";


```
