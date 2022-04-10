import React from "react"
import axios from "axios"

export default class VerListas extends React.Component {
    state = {
        playlistsCriadas: []
    }


    // componentDidMount() {
    //   this.visualizarPlaylists
    // }
    // componentDidMount() {
    //   this.deletarPlaylist
    // }

   visualizarPlaylists = () => {
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
        let listasPlaylists = this.state.playlistsCriadas.may((user) => {
        return(
          <div key={user.id}>
            {user.name}
            <button onClick={() => this.deletarPlaylist()}>X</button>
          </div>
        )
        })

        return(
            <div>

                <btton onClick={this.props.playlistsCriadas}>Minhas Playlists</btton>
                <h2>Minhas Playlists</h2>
                {listasPlaylists}
            </div>
        )
    }
}