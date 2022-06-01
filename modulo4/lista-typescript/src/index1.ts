// Crie um função que receba uma `string` com o nome e outra `string` com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato:

//"Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}"


function dados(nome:string, dataDeNascimento:string){

    const separarData = dataDeNascimento.split("/")
        
    return `Olá me chamo ${nome}, nasci no dia ${separarData[0]} do mês de ${separarData[1]} do ano de ${separarData[2]}`
}

 console.log( dados("Erica", "27/03/2003"));


