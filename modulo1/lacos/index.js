//Exercícios de interpretação de código
//1. Está dizendo que "i" é igual a 0, e menor que 5...cada vez que rodar o comando vai somar 1, então o valor vai ser i + 1. E vai ser impresso valor 10. 

//2.a.Todos números maiores que 18, ou seja, 19,21,23,25,27 e 30.
//b.b. Não, porque vai ter que acrescentar as linhas.


//3.Quando o usuário digitar 4, ao ser impresso na 1°* 2°** 3°*** 4°****


//Exercícios de escrita de código

//1.
// let bichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"));

// if (bichinhos == 0){
//     console.log("Que pena! Você pode adotar um pet!");
// } else if(bichinhos > 0){
//     let nomes = prompt("Digite o(s) nome(s) do(s) seu(s) bichinho(s).");
//     console.log(array = [nomes])
// }

//2.
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

for (let i of arrayOriginal){
    console.log(i);
    console.log(i/10);
} 

let novaArray = []
let i = 0
for(let i of arrayOriginal){
    if((i % 2)==0){
        novaArray[0] = i;
        i++;
        console.log(novaArray);
    }
   
}
  
let fraseArray = [];
for(let i = 0; i < arrayOriginal.length; i++){
    fraseArray[i] = `O elemento do índex ${i} é ${arrayOriginal[i]}`;
    console.log(fraseArray)
}; 

let minimo = arrayOriginal[0];
let maximo = arrayOriginal[0];
for(const number of arrayOriginal){
if(number < minimo){
    minimo = number;
} else if(number > maximo){
    maximo = number;
};}
console.log(`O maior número é ${maximo} e o menor é ${minimo}`)

