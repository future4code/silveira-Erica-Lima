import React, { useState } from "react";
import { ButtonStyled, Form, Main, DivPassword, InputMaterial } from "./styled";
import { IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { BASE_URL } from "../../Constants/url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../Router/coordinator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [checkErrEmail, setCheckErrEmail] = useState("");
  const [checkErrPassword, setCheckErrPassword] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();

    const userLogin = {
      email,
      password,
    };
    loginApi(userLogin);
  };

  const navigate = useNavigate();

  const loginApi = async (body) => {
    await axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        setEmail("");
        setErrEmail("");
        setCheckErrEmail(false);
        setPassword("");
        setErrPassword("");
        setCheckErrPassword(false);
        localStorage.setItem("token", res.data.token);
        goToFeed(navigate);
        alert(`Boas vindas ${res.data.user.name}`);
      })
      .catch((err) => {
        if (err.response.data.message.includes("Senha incorreta")) {
          setErrPassword(err.response.data.message);
          setCheckErrPassword(true);
        } else {
          setErrEmail(err.response.data.message);
          setCheckErrEmail(true);
        }
        console.log(err.response.data.message);
      });
  };
  return (
    <Main>
      <p>Entrar</p>
      <Form onSubmit={onSubmitLogin}>
        <InputMaterial
          error={checkErrEmail}
          helperText={checkErrEmail ? errEmail : ""}
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          type={"email"}
          placeholder={"email@email.com"}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <DivPassword>
          <InputMaterial
            error={checkErrPassword}
            helperText={checkErrPassword ? errPassword : ""}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type={showPassword ? "password" : "text"}
            placeholder={"Mínimo 6 caracteres"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            inputProps={{
              minLength: 6,
              title: "Precisa ter no mínimo 6 caracteres",
            }}
            required
          />
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </DivPassword>
        <ButtonStyled type="submit">Entrar</ButtonStyled>
      </Form>
    </Main>
  );
};

export default Login;
