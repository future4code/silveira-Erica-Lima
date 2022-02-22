//Exercícios de interpretação de código
//1) a) vai ser impresso o primeiro[0] do elenco Matheus Nachtergaele.
// Virgina Cavendish.
//canal:"Globo", horario: "19h"
//2) a) Os dois primeiros console vai dar as mesmas informações, idade 3, nome Juba e raça SRD;
// só que na tartaruga vai ter idade 3, já o nome vai ter a letra a trocada pela o, ou seja, Jubo e a raça SRD.
//b) copiar o objeto, ou seja, as informações do cachorro.
//3)a) false e undefined.
//b) False, porque backender atribuiu false mas altura não tem nenhum valor atribuído.

//Exercícios de escrita de código
//1)a)

/*const pessoa1 = {
    nome: "Mariana",
    apelidos: ["Mari", "Mar", "Ana"],}
  
function frase (pessoa){
    return`Eu sou ${pessoa1.nome}, mas pode me chamar de:${pessoa1.apelidos[0]}, ${pessoa1.apelidos[1]}, ${pessoa1.apelidos[2]}.`
    
}
console.log(frase(pessoa1))

//b)
const pessoa2 = {...nome,
                   apelidos:["Ri", "Ari", "Riana"]
}

function novaFrase (objeto){
    return `Eu sou ${pessoa2.nome}, mas pode me chamar de:${pessoa2.apelidos[0]}, ${pessoa2.apelidos[1]}, ${pessoa2.apelidos[2]}.`
}


console.log(novaFrase(pessoa2))*/
//obs.:Não conseguir concluir infelizmente como esperado a b.
// //2.a)

// const objeto= {
//     nome:"Ana",
//     idade:24,
//     profissao: "programadora"
// }
// console.log(objeto)

// function informacao(detalhes){
//    detalhes = [detalhes.nome, detalhes.nome.lenght, detalhes.idade, detalhes.idade.lenght, detalhes.profissao, detalhes.profissao.lenght]
// return detalhes
// }


// console.log(informacao(objeto))

// const objeto1= {
//     nome:"Alice",
//     idade:54,
//     profissao: "empresaria"
// }
// console.log(objeto1)
// function informacao1(detalhes1){
//     detalhes1= [detalhes1.nome, 
//         detalhes1.nome.lenght,
//          detalhes1.idade, 
//          detalhes1.idade.lenght, 
//          detalhes1.profissao, 
//          detalhes1.profissao.lenght]
// return detalhes1
// }
// console.log(informacao1(objeto1))


//Obs.: conseguir fazer funcionar do jeito esperado.

//3.
const carrinho=[ ]
const fruta={
    nome: "uva",
    disponivel: true
}
const fruta1= {
    ...fruta,
    nome: "banana"
}
const fruta2={
    ...fruta,
    nome:"laranja"

}
function cesta(objeto){
    carrinho.push(objeto)
}
cesta(fruta);
cesta(fruta1);
cesta(fruta2)
console.log(carrinho)




















