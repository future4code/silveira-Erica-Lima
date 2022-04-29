import React from 'react'
import axios from "axios"
import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { goToBackLogin } from '../../routes/coordinator';
import { goToAdmin } from '../../routes/coordinator';



export const LoginPage = () =>{
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate()

    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
    };

    const onChangePassword = (e) =>{
        setPassword(e.target.value)
    };

    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: password
        };

        console.log(email, password)

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/erica-lima-silveira/login", body)
        .then((response) => {
            console.log(":)", response.data.token)
            window.localStorage.setItem("token", response.data.token)
            history.push("/tripDetails")
        })
        .cath((error) => {
            console.log(":(", error.data)
        })
    }
   
    return(
        <div>
            <h1>Login</h1>
            <div>
            <label>
          <input placeholder="email"
          type="email"
          value= {email}
          onChange={onChangeEmail} />
        </label> <br></br>
        <label>
          <input placeholder="password"
           type="password"
           value= {password}
           onChange={onChangePassword} />
        </label> <br></br>
            </div>

            <div>
                {/* <button onClick={ ()=>goToBackLogin(navigate) }>Voltar</button> */}
                <button onClick={ ()=>goToBackLogin(navigate) }>Voltar</button>
                {/* <button onClick={()=>goToAdmin(navigate)}>Entrar</button> */}
                <button onClick={onSubmitLogin}>Entrar</button>
            </div>
        </div>
    )
}