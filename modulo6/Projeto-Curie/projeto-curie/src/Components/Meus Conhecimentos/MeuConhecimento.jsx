import React from "react";
import { Container,ColunasDesenvolvimento, ColunasTitulo } from "./styled";

const MeuConhecimento = () => {
    return(
        <Container>
              <h1>Meus Conhecimentos</h1>
            <ColunasTitulo>
          
            <h2>Front-end</h2>
            <h2 >Back-end</h2>
                
                </ColunasTitulo>
                <ColunasDesenvolvimento>
                <p>Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript. Criação de sites responsivos seguindo princípio de Mobile First.
                </p>
               
                <p >Aplicações utilizando NodeJS, Typescript e MySQL. Criação de API´s para comunicação com front-end seguindo princípio de Clean Code.
                </p>
                </ColunasDesenvolvimento>
               
        </Container>
    )
}
 export default MeuConhecimento