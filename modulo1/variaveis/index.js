/** Respostas
 * 1. Será impresso é console.log(b) que vai ser atibuida é o b=10, console.log(b.a) vai imprimir b=5 porque foi alterado e o a=10.
 * 2.Será impresso console.log(a, b, c), a= 10 b=10 c=10.
 * 3. let cargaHoraria = prompt("Quantas horas você trabalha por dia?")
let valorDoPagamento = prompt("Quanto você recebe por dia?")
*/


const nome = prompt("Qual é seu nome?")
console.log(nome)

let idade = prompt("Qual é a sua idade?")
console.log(idade)

console.log(typeof nome)
console.log(typeof idade)

/** A idade e o nome deram undefiend porque tem a falta de valor.*/

/** A idade e o nome deram string porque é considerado conjuto
 * de caracteres.
 */


console.log("Olá", nome, "você tem", idade, "anos" )

let joga = prompt("Você joga futebol?")
let gosta = prompt("Você gosta de bolo de chocolate?")
let canta = prompt("Você canta?")


let a = 10;
let b = 25;
c = a;
a = b;
b = c;
console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)










