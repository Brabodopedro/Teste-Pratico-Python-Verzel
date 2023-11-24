import React from "react";
import { Container, Text } from "./styles";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Container>
      <Text>
        <h2>Venda seu carro Conosco</h2>

        <Link to = '/anunciar' ><span>Anuncie o seu Carro AQUI</span></Link>
      </Text>
    </Container>
  )
}

export default Banner;