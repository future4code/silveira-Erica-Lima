import React, { useState } from "react"
import { BotaoEntrar, Container } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../../routes/coordinator";


const Header = ({rightButton, setRightButton}) => {
  const  navigate = useNavigate()
  const token =localStorage.getItem("token")  

const logout = () => {
  localStorage.removeItem("token")
}

const rightButtonAction = () => {
  if (token){
    logout()
    setRightButton("Login ")
    goToLogin(navigate)
  } else {
    goToLogin(navigate)
  }
}

return(
    <Container>
        <p>imagem</p>
        <BotaoEntrar onClick={rightButtonAction}>{rightButton}</BotaoEntrar>
  </Container>
)
}

export default Header ;

//home <Header title="Lista de Pokémons" btnEsquerda={proximaPagina} btnEsquerdaTexto="Ir para Pokédex" hasButton={false}/>
//detalhe  <Header title="Detalhes do Pokémon" btnEsquerda={proximaPagina} btnDireita={voltar} btnDireitaTexto="Voltar" btnEsquerdaTexto="Ir para Pokédex" hasButton={true}/>
//<Button onClick={props.btnEsquerda}>{props.btnEsquerdaTexto}</Button>
{/* <H1>{props.title}</H1>
{props.hasButton === true ? <Button onClick={props.btnDireita}>{props.btnDireitaTexto}</Button> : null} */}