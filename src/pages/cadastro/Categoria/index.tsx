import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

interface Category {
  name: string;
  description: string;
  color: string;
}

export default function CadastroCategoria() {
  const [valuesCategory, setValuesCategory] = useState<Category>({
    name: '',
    description: '',
    color: '',
  });
  const [categories, setNewCategories] = useState<Category[]>([]);

  useEffect(() => {
    const searchCategories = async () => {
      const URL = 'http://localhost:3333/categorias';
      const res = await fetch(URL);
      const json = await res.json();
      console.log(json);
      setNewCategories([...json]);
    };
    searchCategories();
  }, []);

  const handleValuesChange = (event: ChangeEvent<any>) => {
    const value = event.target.value;
    const name = event.target.name;
    setValuesCategory({
      ...valuesCategory,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const copyCategories = [...categories];
    const newCategory = valuesCategory;
    copyCategories.push(newCategory);
    setValuesCategory({ name: '', description: '', color: '' });
    setNewCategories(copyCategories);
  };

  return (
    <PageDefault>
      <h1>Página de cadastro de categoria</h1>
      <h1>Cadastro de Categoria: {valuesCategory.name}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da categoria"
          name="name"
          value={valuesCategory.name}
          type="text"
          onChange={handleValuesChange}
        />
        <FormField
          label="Descrição da categoria"
          name="description"
          value={valuesCategory.description}
          type="textarea"
          onChange={handleValuesChange}
        />
        <FormField
          label="Cor"
          name="color"
          value={valuesCategory.color}
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
