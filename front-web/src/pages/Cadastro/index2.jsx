import React, { useState } from "react";
import {
  Container,
  ContainerForm,
  Form,
  FormGroup,
  Input,
  Button,
  ErrorMessage,
  Label,
} from "./styles2";

const API = process.env.REACT_APP_API;

export const Users = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      if (!editing) {
        const res = await fetch(`${API}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });
        const data = await res.json();
        console.log(data);
      } else {
        const res = await fetch(`${API}/user/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });
        const data = await res.json();
        console.log(data);
        setEditing(false);
        setId("");
      }

      await getUsers();

      setName("");
      setEmail("");
      setPassword("");
      setError("");
      alert(`${editing ? "Usuário atualizado com sucesso!" : "Usuário criado com sucesso!"}`);
    } catch (error) {
      console.error("Erro ao processar a solicitação:", error);
      setError("Erro ao processar a solicitação.");
    }
  };

  const getUsers = async () => {
    try {
      const res = await fetch(`${API}/users`);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Erro ao obter usuários:", error);
      setError("Erro ao obter usuários.");
    }
  };

  return (
    <Container>
        <h2>Crie sua conta</h2>
      <ContainerForm>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Name:</Label>
            <Input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Name"
              autoFocus
            />
          </FormGroup>
          <FormGroup>
            <Label>Email:</Label>
            <Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup>
            <Label>Password:</Label>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
          </FormGroup>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button type="submit">{editing ? "Update" : "Create"}</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
};
