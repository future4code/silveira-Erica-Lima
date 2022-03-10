
/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   console.log("Boas vindas ao jogo de Blackjack!");

   if(confirm( "Quer iniciar uma nova rodada?")){
      ok = true
      console.log(ok);
     
      const usuarioCarta1 = comprarCarta();
      const usuarioCarta2 = comprarCarta();
     
      const somaUsuario = (usuarioCarta1.valor + usuarioCarta2.valor);

   console.log("Usuário -", "cartas:",  usuarioCarta1.texto,  usuarioCarta2.texto, "pontuação:", somaUsuario);

   const compCarta1 = comprarCarta();
   const compCarta2 = comprarCarta();
  
   const somaComp = (compCarta1.valor + compCarta2.valor);

console.log("Computador -", "cartas:",  compCarta1.texto,  compCarta2.texto, "pontuação:", somaComp);

if(somaUsuario > somaComp){
   console.log("O usuário ganhou!");
} else if(somaComp > somaUsuario){
   console.log("O computador ganhou!")
} else if(somaComp === somaUsuario) {
  console.log( "Empatou!")
} else  { 
   Cancelar = false
   console.log("O jogo acabou")
} };
  
     
   
   