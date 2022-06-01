function anagrama(palavra:string):number{
    const letras:number = palavra.length
    let resultado:number = letras
    for (var i = 1; i < letras; i++) {
         resultado *= i;
    }
    return resultado
}

console.log(anagrama("Erica"))