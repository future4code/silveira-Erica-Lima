import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToList } from '../../routes/coordinator'
import { goToLogin } from '../../routes/coordinator'
import { Button } from './styled'
export const HomePages = () => {
    const navigate = useNavigate()
    
    


    return(
        <div>
            <h1>LabelXName</h1>
            <div>
                <Button onClick={()=>goToList (navigate)}>Ver Viagens</Button>
                <Button onClick={()=>goToLogin(navigate)}>Área de adiministração</Button>
                
            </div>
        </div>
    )
}