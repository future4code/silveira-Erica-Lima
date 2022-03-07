/*Exercícios de interpretação de código
1.a. Na primeira linha "const usuarios" tem o valor atribuído de uma array, que tem dois comandos "nome" e "apelido". Na "const novoArray", vai mapear para criar uma nova array com as informações anteriores. Será impresso o "item", "index" e a "array", ou seja, vai ser impresso o item 0, item 1 e o item 2 da array.

2.a. Vai ser impresso só  os itens nomes: ["Amanda Rangel","Laís Petra" , "Letícia Chijo"].

3.a. A nova array vai ser diferente do apelido "Chijo", a impressão:["Mandi", "Laura"], ou seja, os itens 0 e 1


*/

//Exercícios de escrita de código
//1.
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"}
// ]
//a.
// const novaListaDePets = pets.map((nome) =>{
//     if(nome){
//         return [nome.nome]
//     }

// })

// console.log(novaListaDePets)

//b.

// const novaListaDePets2 = pets.filter((raca) => {
//     if(raca.raca === "Salsicha"){
//         return raca
//     } 
// })

// console.log(novaListaDePets2)

//c.

// const novaListaDePets3 = pets.filter((raca) => {
//     return raca.raca === "Poodle"}
//     )
//     console.log(novaListaDePets3)
//   if(novaListaDePets3[0] = "Madame" ){
//       console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${novaListaDePets3[0]}!`)}
//       if(novaListaDePets3[1] = "Fluffy"){
//         console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${novaListaDePets3[1]}!`)
//       }

//2.


const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a.
//  const nomesDosProdutos = produtos.map((nome) => {
//      return [nome.nome]
//  })
// console.log(nomesDosProdutos)

//b.


// const nomePreco = produtos.map((item, index, array) => {
    
//   item.preco = item.preco - 0.95
//  return {nome: item.nome, preco: item.preco}
// })
//   console.log(nomePreco)
// // //c.
// const bebidas = produtos.map((item, index, array) => {
//   if(item.categoria === "Bebidas"){
//     console.log({nome:item.nome, categoria: item.categoria, preco: item.preco})
//   }
//   })


//d.

const frase = produtos.map((item) => {
  if(item.nome.includes("Ypê")){
    console.log({nome:item.nome, categoria: item.categoria, preco: item.preco})
  } 
})

//e.

const novaFrase = frase.map((item, index) => {
 if( item){
const nomes = item.nome;
const precos = item.preco;
 } novaFrase.filter((item) => {
  console.log(`Compre ${nomes} por ${precos}`)
 })
})























































