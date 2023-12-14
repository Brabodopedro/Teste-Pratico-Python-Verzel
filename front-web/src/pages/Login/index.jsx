import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, ContainerForm, Form, Label } from "./styles";

const API = process.env.REACT_APP_API;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Realize a chamada da API aqui, substituindo URL_API pelo endpoint correto
      const response = await fetch(`${API}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Se a resposta for bem-sucedida, você pode redirecionar ou realizar ações necessárias
        console.log("Login bem-sucedido!");
        alert(`Usuário cadastrado com sucesso!`);
      } else {
        console.error("Credenciais inválidas");
        alert(`Senha incorreta, tente novamente!`);
      }
    } catch (error) {
      console.error("Erro ao realizar o login:", error);
    }
        
    setEmail('');
    setPassword('');
  };
 
  return (
    <Container>
      <h2>Acesse sua conta</h2>
      <p>Entre com seu e-mail e senha!</p>
      <ContainerForm>
        <Form autoComplete="off" onSubmit={handleLogin}>
          <Label>E-mail</Label>
          <Input
            type="text"
            name="email"
            placeholder="Informe seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Senha</Label>
          <Input
            type="password"
            name="password"
            placeholder="Informe sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Fazer Login</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default Login;
