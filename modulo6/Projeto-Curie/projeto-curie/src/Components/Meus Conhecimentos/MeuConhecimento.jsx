import React from "react";
import { Container, ColunasDesenvolvimento, ColunasTitulo } from "./styled";

const MeuConhecimento = () => {
  return (
    <Container>
      <h1>Meus Conhecimentos</h1>
      <ColunasDesenvolvimento>
        <div>
          <h2>Front-end</h2>
          <p>
            Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript.
            Criação de sites responsivos seguindo princípio de Mobile First.
          </p>
        </div>
        <div>
          <h2>Back-end</h2>
          <p>
            Aplicações utilizando NodeJS, Typescript e MySQL. Criação de API´s
            para comunicação com front-end seguindo princípio de Clean Code.
          </p>
        </div>
      </ColunasDesenvolvimento>
    </Container>
  );
};
export default MeuConhecimento;
