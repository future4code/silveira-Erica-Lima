import React from 'react'
import axios from "axios"
import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { goToBackLogin } from '../../routes/coordinator';
import { goToAdmin } from '../../routes/coordinator';


export const LoginPage = () =>{
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
   
    return(
        <div>
            <h1>Login</h1>
            <div>
            <label>
          <input placeholder="E-mail" />
        </label> <br></br>
        <label>
          <input placeholder="Senha" />
        </label> <br></br>
            </div>

            <div>
                <button onClick={()=>goToBackLogin(navigate)}>Voltar</button>
                <button onClick={()=>goToAdmin(navigate)}>Entrar</button>
            </div>
        </div>
    )
}