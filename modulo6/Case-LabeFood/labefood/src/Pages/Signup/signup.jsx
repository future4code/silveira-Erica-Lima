import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "../../Hooks/useForm";
import { ButtonStyled, DivPassword, Form, InputMaterial, Main } from "./styled";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { BASE_URL } from "../../Constants/url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToSignupAddress } from "../../Router/coordinator";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errPassword, setErrPassword] = useState("");
  const [checkErrPassword, setCheckErrPassword] = useState("");
  const [showCheckPassword, setShowCheckPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const { form, onChange, clean } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowCheckPassword = () => {
    setShowCheckPassword(!showCheckPassword);
  };

  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    if (form.password !== confirmPassword) {
      setCheckErrPassword(true);
    } else {
      setCheckErrPassword(false);
      signupApi();
    }
  };
  const navigate = useNavigate();

  const signupApi = async () => {
    await axios
      .post(`${BASE_URL}/signup`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert(`Boas vindas ${res.data.user.name}`);
        goToSignupAddress(navigate);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(`Email ou CPF já cadastrados.`);
        clean();
        setConfirmPassword("");
      });
  };

  return (
    <Main>
      <p>Cadastrar</p>
      <form onSubmit={onSubmitForm}>
        <InputMaterial
          id="outlined-basic"
          label="Nome"
          name="name"
          variant="outlined"
          type={"text"}
          placeholder={"Digite seu nome"}
          value={form.name}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label="E-mail"
          name="email"
          variant="outlined"
          type={"email"}
          placeholder={"Digite seu email"}
          value={form.email}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label="CPF"
          name="cpf"
          variant="outlined"
          type={"text"}
          placeholder={"000.000.000-00"}
          value={cpfMask(form.cpf)}
          onChange={onChange}
          required
        />
        <DivPassword>
          <InputMaterial
            id="outlined-adornment-password"
            label="Senha"
            name="password"
            type={showPassword ? "password" : "text"}
            placeholder={"Mínimo 6 caracteres"}
            value={form.password}
            onChange={onChange}
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
        <DivPassword>
          <InputMaterial
            error={checkErrPassword}
            helperText={
              checkErrPassword ? "Dever ser a mesma que a anterior." : ""
            }
            id="outlined-adornment-password"
            label="Confirmar"
            variant="outlined"
            type={showCheckPassword ? "password" : "text"}
            placeholder={"Mínimo 6 caracteres"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            inputProps={{
              minLength: 6,
              title: "Precisa ter no mínimo 6 caracteres",
            }}
            required
          />
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowCheckPassword}
            edge="end"
          >
            {showCheckPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </DivPassword>

        <ButtonStyled type="submit">Criar</ButtonStyled>
      </form>
    </Main>
  );
};

export default Signup;
