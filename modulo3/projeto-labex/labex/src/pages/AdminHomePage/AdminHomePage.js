import React from 'react'
import { useNavigate } from "react-router-dom";
import { goToBackAdmin } from '../../routes/coordinator';
import { goToCreateTrip} from "../../routes/coordinator";
import { goToTripDetails } from '../../routes/coordinator';



export const AdminHomePages = () =>{
    const navigate = useNavigate()
    
    return(
        <div>
            <h1>Painel Administrativo</h1>
            <div>
                <button onClick={()=> goToBackAdmin (navigate)}>Voltar</button>
                <button onClick={()=>goToCreateTrip (navigate)}>Criar Viagem</button>
                <button onClick={()=>goToTripDetails (navigate)}>Logout</button>
            </div>
            <div>
                <h3>Nome do produto</h3>
                <button>X</button>
            </div>
        </div>
    )
}