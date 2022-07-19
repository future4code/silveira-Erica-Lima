import React from "react";
import { useForm } from "../../Hooks/useForm";
import { ButtonStyled, Form, InputMaterial, Main } from "./styled";

const Signup = () => {
  const { form, onChange, clean } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const onSubmitForm = (event) =>{
    event.preventDefault()
    console.log(form)
  }
  return (
    <Main>
      <p>Cadastrar</p>
      <Form onSubmit={onSubmitForm}>
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
          placeholder={ "Digite seu email"}
          value={form.email}
          onChange={onChange}
          required
        />
        
        <ButtonStyled type="submit">Entrar</ButtonStyled>
      </Form>
    </Main>
  );
};

export default Signup;
