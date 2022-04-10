import React from 'react'
import CriarPlaylists from './components/CriarPlaylists/CriarPlaylists'
import VerListas from './components/VerListas/VerListas'


export default class App extends React.Component {
  state = {
    telaPrincipal: "Criar Playlists"
  }

  tiposDeTelas = () => {
    switch (this.state.telaPrincipal){
      case "Criar Playlists":
      return <CriarPlaylists lista={this.lista}/>
      case "Minhas Playlists":
        return <VerListas cadastro={this.cadastro}/>
        default:
          return <CriarPlaylists/>
    }
  }
  lista = () => {
    this.setState({telaPrincipal: "Criar Playlists"})
  }

  cadastro = () => {
    this.setState({telaPrincipal:"Minhas Playlists"})
  }

  render() {
    return(
      <div>
        {this.tiposDeTelas()}
      </div>
    )
  }
}