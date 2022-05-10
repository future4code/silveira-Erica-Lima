import React from "react"
import { BotaoEntrar, Container } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../../routes/coordinator";


const Header = () => {
  const  navigate = useNavigate()
return(
    <Container>
        <p>imagem</p>
        <BotaoEntrar onClick={()=>goToLogin(navigate)}>Entrar</BotaoEntrar>
  </Container>
)
}

export default Header ;