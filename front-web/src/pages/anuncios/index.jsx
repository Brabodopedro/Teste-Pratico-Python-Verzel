import React, { useState, useEffect } from 'react';
import AnuncioCard from '../../components/Card';
import { Wrapper } from './styles';

const Anuncios = () => {
  const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/anuncios');
        const data = await response.json();
        setAnuncios(data);
        console.log(data);
      } catch (error) {
        console.error('Erro ao buscar anúncios:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <Wrapper>
      {anuncios.map((anuncio) => (
        <AnuncioCard key={anuncio._id} anuncio={anuncio} />
      ))}
    </Wrapper>
  );
};

export default Anuncios;
