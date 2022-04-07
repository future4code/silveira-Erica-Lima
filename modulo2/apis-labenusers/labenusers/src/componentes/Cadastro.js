import React from "react";
import axios from "axios"


export default class Cadastro extends React.Component{
    state = {
        nome: "",
        email:""
    }

    nomes = (event) => {
        this.setState({nome: event.target.value})
    }
    emails= (event) => {
        this.setState({email: event.target.value})
    }
    realizarCadastro = () => {
        const url ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            nome: this.state.nome,
            email:this.state.email
        }
        axios.post(url, body, {  headers: {
            Authorization: "erica-lima-silveira"
        }}
          )
          .then((res) => {
            //   alert("Cadastro realizado!!!")
            //   this.setState({nome:"",email:""})
            console.log(res)

          })
          .catch((err) => {
              alert(err.response.data.message)

          })
    }
   
    render(){
        return(
            <div>
                 <button onClick={this .props.irUsuarios}>Lista de Usuários</button>
                 <h2>Tela de Cadastro</h2>
                 <input placeholder="Nome"
                 value={this.state.nome}
                 onChange={this.nomes}/>
                 <input placeholder="Email"
                value={this.state.email}
                onChange={this.emails}/>
                <button>Cadastrar</button>
            </div>
           
            
        )
    }
}