// type InformacaoDoFilme= {
//     nome:string,
//     lancamento:number,
//     genero:string,
//     metacritic?: undefined | number
// }

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function filmes(nome:string, lancamento:number,genero:string, metacritic?:undefined | number){

    const catalogos
 = {
        nome: nome,
        lancamento:lancamento,
        genero:genero,
        metacritic:metacritic
    }

    return catalogos
}

console.log(filmes("Duna", 2041, GENERO.ACAO, 15));
