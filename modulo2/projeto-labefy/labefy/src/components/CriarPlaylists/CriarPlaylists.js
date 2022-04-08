import React from "react"
import axios from "axios"

export default class CriarPlaylists extends React.Component {
 state = {
   playlist: []
 }
 handlePlaylist = (event) => {
   this.setState({playlist: event.target.value})

 }

 CriandoPlaylist = () => {
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
  const body = {
    name: this.state.playlist
  }
  axios.post(url, body, {
   headers: {
       Authorization: "erica-lima-silveira"
   }
})

.then((response) => {
  alert("Playlist criada!!!")
  this.setState({playlist: []})
})
 .catch((err) => {
   console.log(err.response.data)
   this.setState({playlist: []})
 })

 }



  render() {
 
    return (
      <div>
        <input 
        placeholder={"Playlist"}
        value={this.state.playlist}
        onChange={this.handlePlaylist}/>
        <button onClick={this.CriandoPlaylist}>Criar</button>
      </div>
    )
  }
}