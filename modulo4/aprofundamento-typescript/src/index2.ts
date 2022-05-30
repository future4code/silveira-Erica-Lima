//a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo.ts e faça a tipagem desses parâmetros

//Entrada: parâmetro
//Saída: return
type Estatisticas = {
    maior: number,
    menor:number,
    media: number
}

function obterEstatisticas(numeros:number[]):Estatisticas {

    const numerosOrdenados:number[] = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }
//     const amostraDeDados = {

// 		numeros: [21, 18, 65, 44, 15, 18],

// 		obterEstatisticas: (numeros:number) => {...}
// }
    
    const estatisticas:Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type AmostraDeDados = {

    numeros: number[],

    obterEstatisticas: (numeros:number[]) => Estatisticas
}
console.log(obterEstatisticas([1, 25 ,36, 25, 15, 14]));
