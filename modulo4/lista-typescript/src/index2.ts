//Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável.

function receber(qualquer: string | number | boolean | [] | {}):void{
    qualquer = process.argv[2]
    console.log(qualquer);
    
}
 receber([1, 2, 3, 4, 5])