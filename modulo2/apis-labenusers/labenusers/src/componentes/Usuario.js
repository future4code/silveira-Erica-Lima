import React from "react";
import axios from "axios"

export default class Usuario extends React.Component{
    state = {
        usuarios: []
    }

    dadosUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers:{
                Authorization: "erica-lima-silveira"
            }
        })
        .then((res) => {
            this.setState({usuarios: res.data})
        })
        .catch((err)=>{
            alert("Tente novamente!!!")
        })
    }
    render(){
        return(
            <div>
                  <button onClick={this.props.irCadastro}>Cadastrar</button>
                  <h2>Tela de Usuários</h2>
            </div> 
          
        )
    }
}