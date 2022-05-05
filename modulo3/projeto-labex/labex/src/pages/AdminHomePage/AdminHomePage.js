import React from 'react'
import { useNavigate } from "react-router-dom";
import { goToBackAdmin } from '../../routes/coordinator';
import { goToCreateTrip} from "../../routes/coordinator";
import { goToTripDetails } from '../../routes/coordinator';
import { Button } from './styled'


export const AdminHomePages = () =>{
    const navigate = useNavigate()
    
    return(
        <div>
            <h1>Painel Administrativo</h1>
            <div>
                <Button onClick={()=> goToBackAdmin (navigate)}>Voltar</Button>
                <Button onClick={()=>goToCreateTrip (navigate)}>Criar Viagem</Button>
                <Button onClick={()=>goToTripDetails (navigate)}>Logout</Button>
            </div>
            <div>
                <h3>Nome do produto</h3>
                <Button>X</Button>
            </div>
        </div>
    )
}