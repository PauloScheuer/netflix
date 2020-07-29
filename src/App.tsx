import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import initialData from './data/dados_iniciais.json';

function App() {
  return (
    <div style={{ backgroundColor: '#414141' }}>
      <Menu />

      <BannerMain
        videoTitle={initialData.categorias[0].videos[0].titulo}
        url={initialData.categorias[0].videos[0].url}
        videoDescription={'Descrição'}
      />

      <Carousel ignoreFirstVideo category={initialData.categorias[0]} />
      <Carousel ignoreFirstVideo={false} category={initialData.categorias[1]} />
      <Carousel ignoreFirstVideo={false} category={initialData.categorias[2]} />

      <Footer />
    </div>
  );
}

export default App;
