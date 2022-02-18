//Exercícios de interpretação de código
//1) a) 10
//      50
//b) Não acontecer nada no console, por não ter o comando de 
//impresso. Mas o comando vai ser executado.
//2) a)Ao inserir o texto vai transformar em letras minúscula,
// e depois dizer sim é true ou false... se encontrar o caractere cenoura será true.
//b) i.//true
//ii. //true
//iii.//true

//Exercícios de escrita de código
//1) a.
mensagem1  ()
function mensagem1(){
    mensagem1 ="Eu sou Erica, tenho 18 anos, moro em São Paulo e sou estudante."
    return mensagem1
}
console.log(mensagem1)


//b.
let mensagem2 = function(nome, idade, cidade, profissao){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
}
mensagem2("Erica", 18, "São Paulo", "estudante") 

//2.a)

function somar(number1, number2){
    let somar = number1 + number2
    return somar
}
let resultado = somar(5, 2)
console.log(resultado)

//b)
let somar1 = function(number3, number4){
    somar1 = number3 >= number4
    return somar1
}
let resultado1 = somar1(10, 23)
console.log(resultado1)

//c)

function devolva(number5){

return number5 %  2 === 0
}
console.log(devolva)



//d)
function mensagem3(alteracaoDaMensagem){
   
    const novaFrase = alteracaoDaMensagem .toLocaleUpperCase()
    const tamanho = novaFrase .length
    console.log( tamanho, novaFrase)
}
mensagem3(" Vou ir embora.")



//3. 
let insira1 = Number(prompt("Digite o primeiro número."))

let insira2 = Number(prompt("Digite o segundo número."))
function somar2( insira1, insira2){
somar2 = insira1 + insira2
somar2 = insira1  - insira2
somar2 = insira1 * insira2
somar = insira1 % insira2
return somar
}
console.log(`Números inseridos: ${insira1} e ${insira2}
            Soma: ${insira1 + insira2} 
            Diferença: ${insira1 - insira2} 
            Multiplicação: ${insira1 * insira2}
            Divisão: ${insira1 / insira2}`)