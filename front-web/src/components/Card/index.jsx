// AnuncioCard.jsx
import React from 'react';

const AnuncioCard = ({ anuncio }) => {
  // Verifica se 'anuncio' é indefinido ou nulo
  if (!anuncio) {
    return <div>Error: Anúncio indefinido.</div>;
  }

  // Extrai as propriedades do objeto 'anuncio' usando desestruturação
  const { filename, modelo, marca, ano, preco, km } = anuncio;

  // Verifica se as propriedades necessárias estão presentes
  if (!filename || !modelo || !marca || !ano || !preco || !km) {
    return <div>Error: Propriedades de anúncio ausentes.</div>;
  }

  return (
    <div className="card">
      <img src={`http://localhost:5000/uploads/${filename}`} alt={modelo} />
      <div className="card-body">
        <h5 className="card-title">{modelo}</h5>
        <p className="card-text">{marca}</p>
        <p className="card-text">{ano}</p>
        <p className="card-text">{preco}</p>
        <p className="card-text">{km}</p>
      </div>
    </div>
  );
};

export default AnuncioCard;
