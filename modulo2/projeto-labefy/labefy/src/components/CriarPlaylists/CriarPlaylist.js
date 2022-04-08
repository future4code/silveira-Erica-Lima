import React from "react";
import axios from "axios"

export class CriarPlaylists extends React.Component {
    state = {
      playlist: ""
    }
  
    render() {
      return (
        <div>
          <input 
          placeholder="Nome da playlist"/>
          <button>Crils
            cd labefyar</button>
        </div>
      )
    }
  }