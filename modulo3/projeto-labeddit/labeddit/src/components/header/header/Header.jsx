import React from "react"
import { BotaoEntrar, Container } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../../routes/coordinator";


const Header = (props) => {
  const  navigate = useNavigate()
return(
    <Container>
        <p>imagem</p>
        <BotaoEntrar onClick={()=>goToLogin(navigate)}>Entrar</BotaoEntrar>
  </Container>
)
}

export default Header ;

//home <Header title="Lista de Pokémons" btnEsquerda={proximaPagina} btnEsquerdaTexto="Ir para Pokédex" hasButton={false}/>
//detalhe  <Header title="Detalhes do Pokémon" btnEsquerda={proximaPagina} btnDireita={voltar} btnDireitaTexto="Voltar" btnEsquerdaTexto="Ir para Pokédex" hasButton={true}/>
//<Button onClick={props.btnEsquerda}>{props.btnEsquerdaTexto}</Button>
{/* <H1>{props.title}</H1>
{props.hasButton === true ? <Button onClick={props.btnDireita}>{props.btnDireitaTexto}</Button> : null} */}