// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let altura =  prompt("Digite a altura de um triângulo?")
let largura = prompt("Digite a largura de um triângulo?")
 console.log( altura * largura)
}
 console.log(calculaAreaRetangulo)
// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = prompt("Digite o ano atual.")
let anoNascimento = prompt("Digite o ano de nascimento.")
console.log(anoAtual - anoNascimento)
}
console.log(imprimeIdade)

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso / (altura * altura)
} 
console.log(calculaIMC)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let nome = prompt("Digite seu nome.")
let idade = Number(prompt("Digite seu nome."))
let email = prompt("Digite seu email.")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}
console.log(imprimeInformacoesUsuario)

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let cor1 =prompt("Digite a primeira cor.")
let cor2 = prompt("Digite a segunda cor.")
let cor3 = prompt("Digite a terceira cor.")
console.log( [cor1, cor2, cor3])
}
console.log(imprimeTresCoresFavoritas)

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  return string.toUpperCase()

}
console.log(retornaStringEmMaiuscula)

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso

}
console.log(calculaIngressosEspetaculo)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica asqui

return string1.length === string2.length
}
console.log(checaStringsMesmoTamanho)

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array [0]
}
console.log(retornaPrimeiroElemento)

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

return array[array.length-1]
}
console.log(retornaUltimoElemento)
// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let troca =array[0]
  array[0] = array[array.length-1]
  array[array.length-1] = troca
  return  array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toUpperCase()=== string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual1 = prompt("Ano atual.")
  let anoNasciPessoa = prompt("Digite o ano de nascimento de uma pessoa.")
let anoDoRg = prompt("E o ano em que sua carteira de identidade foi emitida.")
let resultado = anoAtual1 - anoNasciPessoa
const menosOuIgual = 20 <= 20 ==== 0
const entreOuExatamente = 20 >= 50 === 0
console.log( resultado - anoDoRg)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}