import React from 'react';
import Logo from '../../assets/images/logo.png';
import css from './menu.module.css';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className={css.Menu}>
      <Link to="/">
        <img src={Logo} alt="Logo" className={css.Logo} />
      </Link>
      <Link as="a" to="/cadastro/video" className={css.ButtonLink}>
        Novo vídeo
      </Link>
    </nav>
  );
}
