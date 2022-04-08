import React from "react"
import axios from "axios"

export default class VerListas extends React.Component {
    state = {
        playlistsCriadas: []
    }
   visualizar = () => {
    const url= "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    axios.get(url, {
        headers:{
            Authorization: "erica-lima-silveira"
        }
    })
    .then((response) =>{
        this.setState({playlistsCriadas: response.data})
    })
    .catch((err) => {
        alert("Vishhh!!! Você não tem nenhuma playlist")
    })
   }

   deletarPlaylist = (id) => {
    const url =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId ${id}`
    axios.delete(url, {
      headers: {
        Authozation: "erica-lima-silveira"
      }
    })
    .then((response) =>{
      alert("Playlist deletada!!!")
    })
    .catch((err) => {
      alert("Tente novamente!!!")
    })
  }
    render (){
        // let listasPlaylists = this.state.playlistsCriadas.may((dado)
        // return (
        //     <Listas key={dado.id}>
        //         <button onClick={() =>this.deletarPlaylist(dado.id)}>X</button>
        //     </Listas>
        // ))

        return(
            <div>

                <btton onClick={this.playlistsCriadas}>Minhas Playlists</btton>
            </div>
        )
    }
}