import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL} from "../../constants/urls";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { goToCadastro, goToFeed1 } from "../../routes/coordinator";
import { Container, Formulario, Frase, Titulo, Botoes, Botao } from "./styled";

const LoginPage = () => {
  useUnprotectedPage()
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const onSubmitLogin = (e) =>{
    e.preventDefault()
    const body = {
      email: email,
      password:password
    }
    axios.post(`${BASE_URL}/users/login`, body )
      .then((response) => {
        console.log("Deu certo ", response)
        localStorage.setItem("token", response.data.token)
        
        goToFeed1(navigate)
      })
      .catch((error) => 
              // console.log("Houve erro.", error.response)
              alert(error.response.data.message)
            );;
  }


  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };


  return (
    <Container>
      <Titulo>LabEddit</Titulo>
      <Frase>O projeto de rede social da Labenu</Frase>
      <Formulario>
        <form onSubmit={onSubmitLogin}>
          <label>
            <input
              placeholder="Nome"
              type="email"
              value={email}
              onChange={onChangeEmail}
            
              margin={"normal"}
              required
            />
          </label>
          <label>
            <input
              placeholder="Senha"
              type="password"
              value={password}
              onChange={onChangePassword}
              margin={"normal"}
              required
            />
          </label>
          <Botoes type="submit"  >Continuar</Botoes>
        </form>
      </Formulario>

      <Botao onClick={() => goToCadastro(navigate)}>crie uma conta!</Botao>
    </Container>
  );
};

export default LoginPage;
