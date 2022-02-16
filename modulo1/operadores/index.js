/** Exercícios
 * 
 *1) const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
RESPOSTA: false, por ter um comando que é falso

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
RESPOSTA:false, por ter um comando que é falso

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
RESPOSTA: O resultado false

console.log("d. ", typeof resultado)
RESPOSTA: undefined porque não tem valor atribuído.
 */


/** 2)let primeiroNumero = prompt("Digite um numero!")
      let segundoNumero = prompt("Digite outro numero!")

    const soma = primeiroNumero + segundoNumero

    console.log(soma)
    RESPOSTA: O problema é que console imprime string.
 */

    /**Exercícios de escrita de código  */

    /**1. */

let idade = Number(prompt("Idade?"))
let idadeDoAmigo = Number(prompt("Idade do(a) melhor amigo(a)?"))


console.log("Idade", idade)
console.log("Idade do amigo", idadeDoAmigo)
console.log("Sua idade é maior do que a do seu melhor amigo?",idade > idadeDoAmigo)



/** 2) */

const numeroPar = Number(prompt("Insira um número par?"))
console.log("Número par", numeroPar)

const resultado = numeroPar / 2

console.log("Resultado da divisão", resultado )

/** A divisão do número par resulta na metade do número inserido. Quando é ímpar 
 * tem resultado com vígula ex.: 3/2= 1,5
  */




/** 3) */
let idadeAnos = Number(prompt("Qual é sua idade?"))
const meses = 12
const dias = 365
const horas = 24
anos = meses
let idademeses = meses * idadeAnos
let idadeDias = idadeAnos * dias
let idadeHoras = horas * dias * idadeAnos

console.log("Sua idade é", idadeAnos, anos)
console.log("Sua idade em meses", idademeses, meses)
console.log("Sua idade pode ser", idadeDias, dias)
console.log("Sua idade em horas pode ser", idadeHoras, horas)







/** 4 */

let numero1 = Number(prompt("Digite um número."))
console.log("Numero1", numero1)

let numero2 = Number(prompt("Digite outro número."))
console.log("Numero2", numero2)

console.log("O primeiro numero é maior que o segundo?", numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?", numero1 == numero2 )
console.log("O primeiro numero é divisível pelo segundo?", (numero1 % numero2)===0)
console.log("O segundo numero é divisível pelo primeiro?", (numero2 % numero1)===0)


























