import React from 'react'
import axios from "axios"
import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { goToBackLogin } from '../../routes/coordinator';
import { goToAdmin } from '../../routes/coordinator';
import { Button } from './styled';


export const LoginPage = () =>{
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  

    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
    };

    const onChangePassword = (e) =>{
        setPassword(e.target.value)
    };

    
        const onSubmitLogin = (event) => {
            event.preventDefault()
            const body = {
                email: email,
                password:password

    
            };
    
            console.log("Deu certo", email, password)
    
            axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/erica-lima-silveira/login", body)
            .then((response) => {
                 console.log("Deu certo", response.data.token)
                 window.localStorage.setItem("token", response.data.token)
                navigate.push("/")
            //   { goToAdmin(navigate)}
             })
             .cath((error) => {
                console.log("Deu erro", error.data)
             })
        } 
 

    
   
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmitLogin}>
            <label>
          <input placeholder="email"
          type="email"
          value= {email}
          onChange={onChangeEmail} 
          required
          inputProps = { {pattern:`[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$
          `}}
          />
        </label> <br></br>
        <label>
          <input placeholder="password"
           type="password"
           value= {password}
           onChange={onChangePassword}
           required
            />
        </label> <br></br>
        <Button onClick={ ()=>goToBackLogin(navigate) }>Voltar</Button>
                 <Button onClick={()=>goToAdmin(navigate)}>Entrar</Button> 
                {/* <button onClick={ onSubmitLogin } >Entrar</button> */}
            
        </form>
            
      </div>
    )
}