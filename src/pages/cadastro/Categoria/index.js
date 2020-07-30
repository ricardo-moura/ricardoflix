import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    let newValue = infosDoEvento.target.value;
    let nameAttribute = infosDoEvento.target.getAttribute('name');
    setValue(nameAttribute,
      newValue);
    // setNomeDaCategoria(newText);

  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais);
      }}>
        <FormField
        label="Nome da categorai"
        type="text"
        name="nome"
        value={values.nome}
        onChange={handleChange}
        />
        <FormField
        label="Descrição"
        type="multiline"
        name="descricao"
        value={values.descricao}
        onChange={handleChange}
        />

        <FormField
        label="Cor"
        type="color"
        name="cor"
        value={values.cor}
        onChange={handleChange}
        />
        <button>
          Cadastrar
        </button>
      </form>
      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;