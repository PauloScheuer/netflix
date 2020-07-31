import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={CadastroVideo} path="/cadastro/video" exact />
        <Route component={CadastroCategoria} path="/cadastro/categoria" exact />
        <Route component={() => <span>Página não encontrada</span>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
