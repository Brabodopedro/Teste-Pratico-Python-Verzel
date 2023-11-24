import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, ContainerForm, Form, Label } from "./styles";


const Login = () => {

  return (
    <Container>
      <h2>Acesse sua conta</h2>
      <p>Entre com seu e-mail e senha!</p>
      <ContainerForm>
        <Form autoComplete="off">
          <Label>E-mail</Label>
          <Input
            type="text"
            name="email"
            placeholder="Informe seu E-mail"
          />
          <Label>Senha</Label>
          <Input
            type="password"
            name="password"
            placeholder="Informe sua senha"
          />
          <Button type="submit">Fazer Login</Button>
        </Form>
      </ContainerForm>
    </Container>
  )
}

export default Login;