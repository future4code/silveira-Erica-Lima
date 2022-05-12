import axios from "axios";
import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header/Header";
import { BASE_URL } from "../../constants/urls";
import { goToFeed2 } from "../../routes/coordinator";

const CadastroPage = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitLogin = (e) =>{
        e.preventDefault()
        const body = {
          username: username,
          email: email,
          password:password
        }
        axios.post(`${BASE_URL}/users/signup`, body )
       
          .then((response) => {
            console.log("Deu certo ", response.data)
            
            goToFeed2(navigate)
          })
          .catch((error) => {
            console.log("Houve erro.", error.response)
          });
      }
      
      const onChangeUsername = (e) => {
        setUsername(e.target.value);
      };

      const onChangeEmail = (e) => {
        setEmail(e.target.value);
      };
    
      const onChangePassword = (e) => {
        setPassword(e.target.value);
      };
    
   

return(
    <div>
        <Header/>
        
    <h1>Olá, boas vindas ao LabEddit!!!!!</h1>
    <p>O projeto de rede social da Labenu</p>
    <form onSubmit={onSubmitLogin}>
        <label>
            <input 
            placeholder="Nome de usuário"
            type="username"
            value={username}
            onChange={onChangeUsername}
            required/>
        </label>
        <label>
            <input 
           placeholder="E-mail"
           type="email"
           value={email}
           onChange={onChangeEmail}
           margin={"normal"}
           inputProps = { {pattern:`[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$
           `}}
           required/>
        </label>
        <label>
            <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={onChangePassword}
            margin={"normal"}
            required/>
        </label>

        <button type="submit"  >Cadastrar</button>
  
    </form>

       
       
        
         </div>
)
}

export default CadastroPage ;