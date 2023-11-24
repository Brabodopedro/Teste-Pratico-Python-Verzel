// CadastroVeiculoForm.jsx
import React, { useState } from 'react';
import File from '../../components/Gerais/File';
import styles from './styles';

const CadastroVeiculoForm = ({ onSubmit }) => {
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [preco, setPreco] = useState('');
  const [marca, setMarca] = useState('');
  const [km, setKm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar os dados para a função onSubmit
    onSubmit({ modelo, ano, preco, marca, km });
  };

  return (
    <form style={styles.formContainer} onSubmit={handleSubmit}>
      <h2 style={{ marginBottom: '20px' }}>Cadastrar Veículo</h2>

      <label style={styles.label}>
        Modelo:
        <input style={styles.input} type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
      </label>

      <label style={styles.label}>
        Marca:
        <input style={styles.input} type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
      </label>

      <label style={styles.label}>
        Ano:
        <input style={styles.input} type="text" value={ano} onChange={(e) => setAno(e.target.value)} />
      </label>

      <label style={styles.label}>
        Preço:
        <input style={styles.input} type="text" value={preco} onChange={(e) => setPreco(e.target.value)} />
      </label>

      <label style={styles.label}>
        Km:
        <input style={styles.input} type="text" value={km} onChange={(e) => setKm(e.target.value)} />
      </label>

      <File />
        <br/>
        
      <button style={styles.button} type="submit">
        Cadastrar Veículo
      </button>
    </form>
  );
};

export default CadastroVeiculoForm;
