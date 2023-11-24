import React from "react";
import LogoImg from "../../assets/logo.png";
import { Container, Logo, Menu } from "./styles";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <Container>
      <Logo>
      <Link to = '/'><img src={LogoImg} alt="" /></Link>
      </Logo>
      <Menu>
        <ul>
          <Link to = '/anuncios'><li>Comprar Carro</li></Link>
          <Link to = '/anunciar'><li>Anunciar</li></Link>
          <Link to = '/cadastro'><li>Cadastrar-se</li></Link>
          <Link to = '/login'><li>Login</li></Link>
        </ul>
      </Menu>
    </Container>
  )
}

export default Header;