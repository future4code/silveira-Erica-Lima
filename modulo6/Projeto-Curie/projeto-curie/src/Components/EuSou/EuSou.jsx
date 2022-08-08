import React from "react";
import Header from "../Header/Header";
import imgDeFundo from "../../image/imgDeFundo.jpg"
import { Container } from "./styled";


const EuSou = () => {
 return(
    <Container>
    <Header/>
    {/* <img src={imgDeFundo}/> */}
    <h1>Eu sou Erica Inacia</h1>
    <h2>Desenvolvedor Web Full Stack</h2>
    </Container>
 )
}

export default EuSou