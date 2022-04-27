import React from 'react'
import { useNavigate } from "react-router-dom";
import { goToBackTrip } from '../../routes/coordinator';


export const TripDetailsPage =() => {
    const navigate = useNavigate()
   
    return(
        <div>
            <h1>Levis</h1>
            <div>
        <p>Nome:</p>
        <p>Descrição:</p>
        <p>Planeta:</p>
        <p>Duração:</p>
        <p>Dados:</p>
        
      </div>

      <div>
          <button onClick={()=>goToBackTrip(navigate)}>Voltar</button>
      </div>
        </div>
    )
}