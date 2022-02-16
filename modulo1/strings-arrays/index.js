//Exercícios de interpretação de código
// 1)a. undefined b. null c.11 d.3 e.(11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] f.9


// 2)Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
// RESPOSTA:SUBI NUM ÔNIBUS EM MIRROCOS, E 27 caracteres.

//Exercícios de escrita de código

//1)

/*const nomeDoUsuario = prompt(" Seu nome?")
console.log(nomeDoUsuario)
 

const emailDoUsuario = prompt(" Seu email?")
console.log(emailDoUsuario)
console.log(` O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomeDoUsuario}! `)*/


//2)




/*const comidasPreferidas = ["Pão de queijo", "Chocolate", "Bolo de cenoura", "Pizzas", "Brigadeiro"]
console.log(comidasPreferidas)
console.log("Essas são as minhas comidas preferidas:", comidasPreferidas)


let suaComidaPreferida = prompt("Qual sua comida preferida?")
comidasPreferidas[1] = suaComidaPreferida


let novaLista = comidasPreferidas
console.log(novaLista)*/


//3) 

let listaDeTarefas = []

const tarefa1 = prompt("Três tarefas que você precise realizar? Digite a primeira:")
const tarefa2 = prompt("Digite a segunda:")
const tarefa3 = prompt("Digite a terceira:")
 
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log( listaDeTarefas)


const tarefaRealizada = Number(prompt(" Digite um número da tarefa que você já realizou: "))
listaDeTarefas.splice(tarefaRealizada,1)
console.log(listaDeTarefas)