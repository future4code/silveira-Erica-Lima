import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL_ACESSO } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import { goToCadastro, goToFeed1 } from "../../routes/coordinator";
import { Container, Formulario, Frase, Titulo, Botoes, Botao} from "./styled";

const LoginPage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState()
  const [password, setPassword] = useState()
  const [form, onChange, clear] = useForm({emai: "", password: ""})

  const onSubmitForm = (e) =>{
    e.preventDefault()

  }

useEffect(()=> {
  axios.post(`${BASE_URL_ACESSO}/login`)
  .then((response) => {
    setLogin(response.data)
  })
  .catch((error) => {
    console.log("Houve erro.", error.response)
  })
})

  return (
    <Container>
      <Titulo>LabEddit</Titulo>
      <Frase>O projeto de rede social da Labenu</Frase>
     <Formulario>
     <form onSubmit={onSubmitForm}>
        <label>
          <input placeholder="Nome"
         type="email"
          value={form.email}
          onChange={onChange}
          fullWidth
          margin={"normal"} 
          required/>
        </label>
        <label>
          <input placeholder="Senha" 
          type="password"
          value={form.password}
          onChange={onChange } 
          fullWidth
          margin={"normal"}
          required/>
        </label>
        
      </form>
     </Formulario>
      <Botoes onClick={() => goToFeed1(navigate)}>Continuar</Botoes>
      <Botao onClick={() => goToCadastro(navigate)}>crie uma conta!</Botao>
    </Container>
  );
};

export default LoginPage;
