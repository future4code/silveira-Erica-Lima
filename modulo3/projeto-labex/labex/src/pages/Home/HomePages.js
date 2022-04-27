import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToList } from '../../routes/coordinator'
import { goToLogin } from '../../routes/coordinator'

export const HomePages = () => {
    const navigate = useNavigate()
    
    


    return(
        <div>
            <h1>LabelXName</h1>
            <div>
                <button onClick={()=>goToList (navigate)}>Ver Viagens</button>
                <button onClick={()=>goToLogin(navigate)}>Área de adiministração</button>
                
            </div>
        </div>
    )
}