import React from "react"
import { ButtonContato, ButtonProjetos, ButtonQuemSou, ContainerHeader, Contato, Nome, Projeto, QuemSou } from "./Styled"

const Header = () => {
 return(
    <ContainerHeader>
       <h2>Erica Inacia</h2>
       <div>
       <ButtonQuemSou>quem sou</ButtonQuemSou>
       <ButtonProjetos>projetos</ButtonProjetos>
       <ButtonContato>contato</ButtonContato>
       </div>
      
    </ContainerHeader>
 )
}

export default Header