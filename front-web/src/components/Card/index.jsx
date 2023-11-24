import React from "react";
import { FaArrowRight } from "react-icons/fa";


import {
  Container,
  Description,
  Img,
  Itens
} from "./styles";
import { Link } from "react-router-dom";


const Card = () => {
  return (
    <Container>
      <Link to = '/anuncio'><Img>
        <img src="https://media.istockphoto.com/id/1744546629/pt/foto/japanese-park-parking-lot.jpg?s=2048x2048&w=is&k=20&c=fn61HGiyybTcX0fv1eCXl0koOLzmiThJbOWtZazrlm0=" alt="" />
      </Img></Link>
      <Description>
        <h4> Nome: Lorem </h4>
        <Itens>
            <span>Modelo: Lorem 1  </span>
            <span>Marca: Lorem 2 </span>
            <span>Ano: Lorem 3 </span>
            <span>Valor: Lorem 4 </span>
        </Itens>
        <Link to='/anuncio' >Detalhes<FaArrowRight/></Link>
      </Description>
    </Container>
  )
}

export default Card;