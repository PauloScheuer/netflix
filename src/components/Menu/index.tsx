import React from 'react';
import Logo from '../../assets/images/logo.png';
import css from './menu.module.css';
import Button from '../Button';

export default function Menu() {
  return (
    <nav className={css.Menu}>
      <a href="/">
        <img src={Logo} alt="Logo" className={css.Logo} />
      </a>
      <Button as="a" href="/" className={css.ButtonLink}>
        Novo vídeo
      </Button>
    </nav>
  );
}
