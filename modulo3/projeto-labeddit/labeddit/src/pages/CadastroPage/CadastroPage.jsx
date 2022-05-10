import React from "react"
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header/Header";
import { goToFeed2 } from "../../routes/coordinator";

const CadastroPage = () => {
    const navigate = useNavigate()
return(
    <div>
        <Header/>
        
    <h1>Olá, boas vindas ao LabEddit!!!!!</h1>
    <p>O projeto de rede social da Labenu</p>
    <form>
        <label>
            <input placeholder="Nome de usuário"
            type="nome"/>
        </label>
        <label>
            <input placeholder="E-mail"
            type="email"/>
        </label>
        <label>
            <input placeholder="Senha"
            type="senha"/>
        </label>
    </form>
        <button onClick={()=>goToFeed2(navigate)}>Cadastrar</button>
       
        
         </div>
)
}

export default CadastroPage ;