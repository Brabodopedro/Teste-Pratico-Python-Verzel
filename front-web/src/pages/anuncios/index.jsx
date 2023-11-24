import React, { Fragment } from "react";
import { Header, Wrapper } from "./styles";
import Card from "../../components/Card";


const Anuncios = () => {
  let Cards = [];
  for (let i = 0; i < 4; i++){
    Cards.push(<Card key={i}/>)
  }
  return (
    <Fragment>
      <Header>
        <h2>As Melhores escolhas Aqui</h2>
      </Header>
      <Wrapper>
        {Cards}
        {Cards}
        {Cards}
      </Wrapper>
    </Fragment>
  )
}

export default Anuncios;