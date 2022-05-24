//Execicío 1
//a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// Precisamos criar alguma variavel e aplicar o "console", depois ir no terminal rodar o comando "node index.js"

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

let nome = "Erica";
let idade = Number(19);
let novaIdade = idade + 7;

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

console.log(
  `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}.`
);




