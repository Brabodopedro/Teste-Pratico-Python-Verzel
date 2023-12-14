import React, { useState } from 'react';
import styles from './styles';

const CadastroVeiculoForm = () => {
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [preco, setPreco] = useState('');
  const [marca, setMarca] = useState('');
  const [km, setKm] = useState('');
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!modelo.trim()) {
      newErrors.modelo = 'Campo obrigatório';
    }

    if (!marca.trim()) {
      newErrors.marca = 'Campo obrigatório';
    }

    if (!ano.trim()) {
      newErrors.ano = 'Campo obrigatório';
    } else if (isNaN(ano)) {
      newErrors.ano = 'Digite um ano válido';
    }

    if (!preco.trim()) {
      newErrors.preco = 'Campo obrigatório';
    } else if (isNaN(preco)) {
      newErrors.preco = 'Digite um preço válido';
    }

    if (!km.trim()) {
      newErrors.km = 'Campo obrigatório';
    } else if (isNaN(km)) {
      newErrors.km = 'Digite um valor de quilometragem válido';
    }

    if (!file) {
      newErrors.file = 'Campo obrigatório';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const formData = new FormData();
        formData.append('modelo', modelo);
        formData.append('ano', ano);
        formData.append('preco', preco);
        formData.append('marca', marca);
        formData.append('km', km);
        formData.append('file', file);

        const response = await fetch("http://localhost:5000/anuncio", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data.message);
          console.log(data.id);
          alert(`Anuncio criado com sucesso!`);

        } else {
          console.error("Erro ao criar anúncio:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao criar anúncio:", error);
      }
    }
  };

  return (
    <form style={styles.formContainer} onSubmit={handleSubmit}>
      <h2 style={{ marginBottom: '20px' }}>Cadastrar Veículo</h2>

      <label style={styles.label}>
        Modelo:
        <input
          style={styles.input}
          type="text"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
        />
        {errors.modelo && <span style={{ color: 'red' }}>{errors.modelo}</span>}
      </label>

      <label style={styles.label}>
        Marca:
        <input
          style={styles.input}
          type="text"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        />
        {errors.marca && <span style={{ color: 'red' }}>{errors.marca}</span>}
      </label>

      <label style={styles.label}>
        Ano:
        <input
          style={styles.input}
          type="text"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
        />
        {errors.ano && <span style={{ color: 'red' }}>{errors.ano}</span>}
      </label>

      <label style={styles.label}>
        Preço:
        <input
          style={styles.input}
          type="text"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
        {errors.preco && <span style={{ color: 'red' }}>{errors.preco}</span>}
      </label>

      <label style={styles.label}>
        Km:
        <input
          style={styles.input}
          type="text"
          value={km}
          onChange={(e) => setKm(e.target.value)}
        />
        {errors.km && <span style={{ color: 'red' }}>{errors.km}</span>}
      </label>

      <label style={styles.label}>
        Foto:
        <input
          style={styles.input}
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={handleFileChange}
        />
        {errors.file && <span style={{ color: 'red' }}>{errors.file}</span>}
      </label>

      <button style={styles.button} type="submit">
        Cadastrar Veículo
      </button>
    </form>
  );
};

export default CadastroVeiculoForm;
