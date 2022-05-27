

enum Setores{
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"

}

type Colaboradoras = {
    nome:string,
    salário:number,
    setor:Setores,
    presencial:boolean
}

function colaboradoras(nome:Colaboradoras[], salario:Colaboradoras[], setor:Colaboradoras[], presencial:Colaboradoras[]){

    const ficha = [
        { nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
        { nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
        { nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
        { nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
        { nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
        { nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
        { nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
    ]

    const filtrando = ficha.presencial.filter

    

}