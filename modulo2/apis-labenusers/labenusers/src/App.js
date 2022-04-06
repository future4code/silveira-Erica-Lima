import React from 'react';
import axios from "axios"

class App extends React.Component {
  state = {
    cadastro: ""
  };
  criandoCadastro = () => {
    conts body = {
      name: this.state.cadastro,
      email: this.state.cadastro
    };

    aixos.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "erica-lima-silveira"
      }
    }).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error.message);
    });
  };
  onchangeCadastro = (event) =>{
    this.setState({cadastro: event.target.value});
  };
  render() {
    returm(
      <input
      placeholder="Nome"
      value={this.state.cadastro}
      onChange={this.onchangeCadastro}/>
      <input
      placeholder="Email"
      value={this.state.cadastro}
      onChange={this.onchangeCadastro}/>
      <button onClick={this.criandoCadastro}>Cadastrar</>
    )
  }
}