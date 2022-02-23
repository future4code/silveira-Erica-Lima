
//Exercícios de interpretação de código
//1.a.b.c) Vai pedir ao usuário digite um numero que está escrito em string, mas vai ser transformado em number. Depois com o resto= % 2 vai comparar se é igual 0, ou seja, se o número é par...se for vai passar no teste se não, vai acontecer o contrário que no caso o número ímpar.


//2.a. Para comparar igualdades.
//b."O preço da fruta Maçã é R$ 2.25"
//c. ."O preço da fruta Pêra é R$ 5", porque vai passar direto...vai entender que é um comando só.


//3.a.Está pedindo que digite um número o usuário.
//b.10 "Esse número passou no teste". - 10, não vai aparecer nada.
//c. Sim, porque a mensagem já está sendo impressa dentro do if no  console e não tem necessidade dessa variavel "mensagem". E informações fora do escopo não consegue acessar dentro.

//Exercícios de escrita de código
// //1.


//   const usuário= prompt("Qual é sua idade?");
//     const resultado = Number(usuário)
//     console.log(resultado)
//  if (usuário >= 18) { 
     
// console.log("Você pode dirigir")
//  } else {
//      console.log("Você não pode dirigir.")
//  }


//2.



// const aluno = prompt(" Digite de acordo com seu turno aluno: M (matutino) ou V (Vespertino) ou N (Noturno)")
// console.log(aluno)
// if(aluno== "M"){
//      console.log(" Bom Dia!");
// }  else if(aluno=="V") {
//     console.log("Boa Tarde!");} 
//      else if(aluno=="N"){
//    console.log("Boa Noite!");
// }else {
//     console.log("Nenhum resultado")
// }

// //3.
// const aluno = prompt(" Digite de acordo com seu turno aluno: M (matutino) ou V (Vespertino) ou N (Noturno)")

// switch(aluno){
//     case "M":
//         console.log("Bom Dia!");
//         break;
//         case "V":
//             console.log("Boa Tarde!");
//             break;
//             case "N":
//                 console.log("Boa Noite!");
//                 break;
// }

// //4.

// const genero= prompt("Qual  gênero de filme?  ");
// const preco= prompt("Qual o preço do filme?  ");
// if(genero== "fantasia", preco < 15){
// console.log( "Bom filme!");
// } else {
//     console.log("Escolha outro filme :(" )
// }


//DESAFIOS
// //1.
// const genero= prompt("Qual  gênero de filme?  ");
// const preco= prompt("Qual o preço do filme?  ");
// const lanchinho= prompt("Qual lanchinho ele vai comprar?")
// if(genero== "fantasia", preco < 15){
//  console.log( "Bom filme!");
//  console.log(`Aproveite o seu ${lanchinho}` )
//      } else {
//          const lanchinho=prom
//      console.log("Escolha outro filme :(" )
//  }

//2

const nome = prompt("Nome completo.");
const tipoDeJogo = prompt("Tipo de jogo: IN indica internacional; e DO indica doméstico.");
const etapaDoJogo = prompt("Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final.");
const categoria = Number(prompt("Categoria: pode ser as opções 1, 2, 3 ou 4."));
const quantidade= Number(prompt("Quantidade de ingressos."));

console.log("Dados da compra")
console.log(`Nome do cliente: ${nome}`)
console.log(`Tipo do jogo:${tipoDeJogo}`)
console.log(`Etapa do jogo:${etapaDoJogo}`)
console.log(`Categotia:${categoria}`)
console.log(`Quantidade de Ingressos:${quantidade}`)
console.log("----Valores----")
console.log(`Valore do ingresso:  `)
console.log(`Valor total: ${novoValor}`)

let novoValor
  switch(etapaDoJogo){
      case "SF":
          switch(categoria){
              case 1:
                 novoValor= quantidade * 1320

              break;
          }
          break;

  }
  

  switch(etapaDoJogo){
    case "SF":
        switch(categoria){
            case 3:
               novoValor= quantidade * 550

            break;
        }
        break;

}

switch(etapaDoJogo){
    case "SF":
        switch(categoria){
            case 4:
               novoValor= quantidade * 220

            break;
        }
        break;

}

switch(etapaDoJogo){
    case "DT":
        switch(categoria){
            case 1:
               novoValor= quantidade * 660

            break;
        }
        break;

}

switch(etapaDoJogo){
    case "DT":
        switch(categoria){
            case 2:
               novoValor= quantidade * 440

            break;
        }
        break;

}

switch(etapaDoJogo){
    case "DT":
        switch(categoria){
            case 3:
               novoValor= quantidade * 330

            break;
        }
        break;

}

switch(etapaDoJogo){
    case "DT":
        switch(categoria){
            case 4:
               novoValor= quantidade * 170

            break;
        }
        break;

}

switch(etapaDoJogo){
    case "Fl":
        switch(categoria){
            case 1:
               novoValor= quantidade * 1980

            break;
        }
        break;

}

switch(etapaDoJogo){
    case "Fl":
        switch(categoria){
            case 2:
               novoValor= quantidade * 1320

            break;
        }
        break;

}

switch(etapaDoJogo){
    case "Fl":
        switch(categoria){
            case 3:
               novoValor= quantidade * 880

            break;
        }
        break;

}

switch(etapaDoJogo){
    case "Fl":
        switch(categoria){
            case 4:
               novoValor= quantidade * 330

            break;
        }
        break;

}

// Obs.:Tentei