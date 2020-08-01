import React, { FormEvent, useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import insertVideo from '../../../repositories/videos';
import searchCategories from '../../../repositories/categories';
export default function CadastroVideo() {
  const history = useHistory();
  const { handleValuesChange, values, clearForm } = useForm({
    title: '',
    url: '',
    category: '',
  });
  const [categories, setCategories] = useState<any[]>();

  useEffect(() => {
    const doSearch = async () => {
      const searched = await searchCategories();
      setCategories(searched);
    };
    doSearch();
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const categoryChoose = categories?.find((category) => {
      return category.name === values.category;
    });
    if (categoryChoose === undefined) {
      alert('Você deve escolher umas das categorias pré-existentes');
      return;
    }
    const categoryId = categoryChoose.id;
    const res = await insertVideo({
      title: values.title,
      url: values.url,
      categoryId,
    });
    alert('Vídeo inserido');
    history.push('/');
  };

  return (
    <PageDefault>
      <h1>Página de cadastro de vídeo</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <FormField
          label="Título do vídeo"
          name="title"
          value={values.title}
          type="text"
          onChange={handleValuesChange}
        />
        <FormField
          label="URL"
          name="url"
          value={values.url}
          type="text"
          onChange={handleValuesChange}
        />
        <FormField
          label="Categoria"
          name="category"
          value={values.category}
          type="text"
          onChange={handleValuesChange}
          suggestions={categories?.map((category) => {
            return category.name;
          })}
        />

        <Button type="submit" />
      </form>

      <Link to="/cadastro/categoria">Cadastrar categoria</Link>
    </PageDefault>
  );
}
