import React from "react";
import { useForm } from "../../Hooks/useForm";
import { ButtonStyled, InputMaterial, Main } from "./styled";
import { BASE_URL } from "../../Constants/url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../Router/coordinator";

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
    signupAdressApi();
  };

  const navigate = useNavigate();

  const signupAdressApi = async () => {
    const token = localStorage.getItem("token");

    await axios
      .put(`${BASE_URL}/address`, form, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);

        goToFeed(navigate);
      })
      .catch((err) => {
        console.log(err.response);
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
