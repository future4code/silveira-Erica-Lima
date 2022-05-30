//A sua tarefa é criar uma função que receba o array acima como parâmetro e retorne um arrayde consultas ordenado pelos nomes dos pacientes (em ordem alfabética). Para isso crie um type para as consultas. 


type Informacao = {
    nome: string,
    idade: number,
    dataDaConsulta: number
}

function consultas(nome:Informacao[]){
  const ficha =  [
        { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
        { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
        { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
        { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
      ]
      
}
