import React from 'react';
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import {
  Container,
  Description,
  Left,
  Profile,
  ProfileContact,
  ProfileDescriptin,
  ProfileFormContact,
  ProfileImg,
  Right,
  Thumb
} from "./styles";

const Anuncio = () => {
  
    return (
          <Container>
            <Left>
              <Thumb>
                <img src='https://media.istockphoto.com/id/1744546629/pt/foto/japanese-park-parking-lot.jpg?s=2048x2048&w=is&k=20&c=fn61HGiyybTcX0fv1eCXl0koOLzmiThJbOWtZazrlm0=' alt=" carros" />
              </Thumb> 
              <Description>
                <h2>Valor: </h2>
                <h5>Ano:</h5>
                <h5>Descriçao: </h5>
                <p></p>
              </Description>
            </Left>
            <Right>
              <Profile>
                <ProfileImg>
                  <img src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" alt="" />
                </ProfileImg>
                <ProfileDescriptin>
                  <h3>Nome Usuario</h3>
                  <p>Descrição do usuário</p>
                </ProfileDescriptin>
              </Profile>
              <ProfileContact>
                <h3>Informações para contato:</h3>
                <p>Numero: </p>
                <p></p>
              </ProfileContact>
              <ProfileFormContact>
                <h3>Contate o anunciante</h3>
                <form  autoComplete="off">
                  <Input
                    type="hidden"
                    name="userId"
                    value='a'
                  />
                  <Input
                    type="text"
                    placeholder="Nome:"
                    name="client_name"
                  />
                  <Input
                    type="text"
                    placeholder="E-mail:"
                    name="client_email"
                  />
                  <TextArea
                    placeholder="Mensagem:"
                    name="client_mensagem"
                  ></TextArea>
                  <Button>Enviar mensagem</Button>
                </form>
              </ProfileFormContact>
            </Right>
          </Container>
      )
    }
    
export default Anuncio;
