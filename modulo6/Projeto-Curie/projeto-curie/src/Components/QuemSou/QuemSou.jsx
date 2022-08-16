import React from "react";
import { Container, Foto, SobreMim } from "./styled";
import foto from "../../image/foto.jpg"

const QuemSou = () => {
  return (
    <Container>
        <Foto>
            <img src = {foto}/>
        </Foto>
        <SobreMim>
      <h1>Sobre mim</h1>
      <h2>Desenvolvedor Web Full Stack</h2>
      <p>
        Meu nome é Erica, sou desenvolvedora web full stack em formação pelo
        bootcamp Labenu e tenho experiência no desenvolvimento de projetos
        voltados à front e back-end utilizando tecnologias como Javascript,
        Typescript, NodeJS e React, entre outras.{" "}
      </p>
      <button>CV em PDF</button>
        </SobreMim>
    </Container>
  );
};
export default QuemSou;
