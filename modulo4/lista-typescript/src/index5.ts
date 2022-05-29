type Usuarios = {
    name:string,
    email:string,
    role:string
}

const usuarios:Usuarios[]= [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function filtrando(usuarios:Usuarios[]){
    const admin = usuarios.filter((usuario)=>{
        return usuario.role === "adimn"
    })
   return admin.map((user)=>{
       return user.role === "adimn"
   })
}

console.log(filtrando);

// Não sei onde estou errando. :(
