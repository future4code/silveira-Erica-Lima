import React, { useState } from "react";
import { useForm } from "../../Hooks/useForm";
import { ButtonStyled, Form, InputMaterial, Main } from "./styled";
import { BASE_URL } from "../../Constants/url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToSignupAdress } from "../../Router/coordinator";

const SignupAdress = () => {
  const { form, onChange, clean } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const onSubmitFormAdress = (event) => {
    event.preventDefault();
    //  if(form.password !== confirmPassword){
    //   setCheckErrPassword(true)
    //  }else{
    //   setCheckErrPassword(false)
    //   signupAdressApi ()
    //  }
  };
  const navigate = useNavigate();

  const signupAdressApi = async () => {
    await axios
      .post(`${BASE_URL}/adress`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert(`Boas vindas ${res.data.user.name}`);
        goToSignupAdress(navigate);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(`Email ou CPF já cadastrados.`);
        clean();
      });
  };

  return (
    <Main>
      <p>Meu endereço</p>
      <form onSubmit={onSubmitFormAdress}>
        <InputMaterial
          id="outlined-basic"
          label="Logradouro"
          name="street"
          variant="outlined"
          type={"text"}
          placeholder={"Rua / Av."}
          value={form.street}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label="Número"
          name="number"
          variant="outlined"
          type={"text"}
          placeholder={"Número"}
          value={form.number}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label="Complemento"
          name="complement"
          variant="outlined"
          type={"text"}
          placeholder={"Apto. / Bloco"}
          value={form.complement}
          onChange={onChange}
        />

        <InputMaterial
          id="outlined-basic"
          label="Bairro"
          name="neighbourhood"
          type={"text"}
          placeholder={"Bairro"}
          value={form.neighbourhood}
          onChange={onChange}
          required
        />

        <InputMaterial
          id="outlined-basic"
          label="Cidade"
          name="city"
          type={"text"}
          placeholder={"Cidade"}
          value={form.city}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label="Estado"
          name="state"
          type={"text"}
          placeholder={"Estado"}
          value={form.state}
          onChange={onChange}
          required
        />

        <ButtonStyled type="submit">Salvar</ButtonStyled>
      </form>
    </Main>
  );
};

export default SignupAdress;
