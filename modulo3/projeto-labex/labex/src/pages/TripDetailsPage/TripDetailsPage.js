import React ,{useState,useEffect}from 'react'
import { useNavigate } from "react-router-dom";
import { goToBackTrip } from '../../routes/coordinator';
import axios from "axios"
import {Button} from './styled';


export const TripDetailsPage =() => {
    const navigate = useNavigate()


    useEffect(()=>{
        const token = localStorage.getItem('token')
        if (token === null){
            console.log("Precisa fazer o login!!!!")
            navigate.push("/login")
        }

    },[])

    const token = localStorage.getItem('token')

    useEffect (() =>{
        const aluno = "erica-lima-silveira"
     axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/:id`, {
         headers: {
             auth: token
         }
     })
           
        .then((response)=>{
            console.log(response.data.token)
        })
      
    .catch((error)=>{
        console.log(error.response)
    })
      
      }, [])
   
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
          <Button onClick={()=>goToBackTrip(navigate)}>Voltar</Button>
      </div>
        </div>
    )
}