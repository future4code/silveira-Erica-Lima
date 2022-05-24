//Execicío 2
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.
let operacao = process.argv[2]
let number1 = Number(process.argv[3])
let number2 = Number(process.argv[4])

switch(operacao){
  case "soma":
    console.log(`Resultado da soma ${number1+number2}`)
    break;
  case "subt":
    console.log(`Resultado da subtração ${number1-number2}`)
    break;
  case "div":
    console.log(`Resultado da divisão ${number1/number2}`)
    break;
  case "mult":
    console.log(`Resultado da multiplicação ${number1*number2}`)
    break;
}

console.log(operacao)
