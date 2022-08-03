import React from "react"
import { ContainerHeader, Contato, Nome, Projeto, QuemSou } from "./Styled"

const Header = () => {
 return(
    <ContainerHeader>
       <h2>Erica Inacia</h2>
       <button>quem sou</button>
       <button>projetos</button>
       <button>contato</button>
    </ContainerHeader>
 )
}

export default Header