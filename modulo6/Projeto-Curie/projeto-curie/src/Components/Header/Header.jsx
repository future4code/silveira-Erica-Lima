import React from "react"
import { ButtonContato, ButtonProjetos, ButtonQuemSou, ContainerHeader, Contato, Nome, Projeto, QuemSou } from "./Styled"

const Header = () => {
 return(
    <ContainerHeader>
       <h2>Erica Inacia</h2>
       <ButtonQuemSou>quem sou</ButtonQuemSou>
       <ButtonProjetos>projetos</ButtonProjetos>
       <ButtonContato>contato</ButtonContato>
    </ContainerHeader>
 )
}

export default Header