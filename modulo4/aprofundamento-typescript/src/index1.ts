//- **Exercício 1**
    
// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.
    
// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

//O Typescript não reclama porque atribuir um valor string. Ao contrário quando tipo uma string e coloco o seu valor um número.
 const minhaString:string = "Erica"

// const minhaString:string = 12

// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

const meuNumero:number | string = 27

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

enum TiposDeCores {
    VERMELHA = " vermelha",
    LARANJA = " laranja",
    AMARELA = "amarela",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}


type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string, 
}
const pessoa1:Pessoa = {
    nome: "Erica",
    idade: 19,
    corFavorita:TiposDeCores.AZUL
}

const pessoa2:Pessoa = {
    nome: "Enzo",
    idade: 26,
    corFavorita:TiposDeCores.VERMELHA
}
const pessoa3:Pessoa = {
    nome: "Inacia",
    idade: 46,
    corFavorita: TiposDeCores.VERDE
}
const pessoa4:Pessoa = {
    nome: "Alice",
    idade: 17,
    corFavorita:TiposDeCores.ANIL
}
console.log(pessoa1, pessoa2, pessoa3, pessoa4);


// d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.

// enum TiposDeCores {
//     VERMELHA = " vermelha",
//     LARANJA = " laranja",
//     AMARELA = "amarela",
//     VERDE = "verde",
//     AZUL = "azul",
//     ANIL = "anil",
//     VIOLETA = "violeta"
// }



