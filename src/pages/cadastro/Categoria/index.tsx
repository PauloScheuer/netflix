import React, { useState, useEffect, FormEvent } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import URL from '../../../config/';

interface Category {
  name: string;
  description: string;
  color: string;
}

export default function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };
  const [categories, setNewCategories] = useState<Category[]>([]);

  const { values, handleValuesChange, clearForm } = useForm(initialValues);

  useEffect(() => {
    const searchCategories = async () => {
      const res = await fetch(URL);
      const json = await res.json();
      console.log(json);
      setNewCategories([...json]);
    };
    searchCategories();
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const copyCategories = [...categories];
    const newCategory = values;
    copyCategories.push(newCategory);
    clearForm();
    setNewCategories(copyCategories);
  };

  return (
    <PageDefault>
      <h1>Página de cadastro de categoria</h1>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da categoria"
          name="name"
          value={values.name}
          type="text"
          onChange={handleValuesChange}
        />
        <FormField
          label="Descrição da categoria"
          name="description"
          value={values.description}
          type="textarea"
          onChange={handleValuesChange}
        />
        <FormField
          label="Cor"
          name="color"
          value={values.color}
          type="color"
          onChange={handleValuesChange}
        />

        <button>Cadastrar</button>
      </form>

      {categories.length === 0 && 'Loading'}
      <ul>
        {categories.map((category, index) => {
          return (
            <li key={index}>
              {category.name};{category.description};{category.color}
            </li>
          );
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}
