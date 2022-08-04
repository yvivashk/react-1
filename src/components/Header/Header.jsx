import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_3.png"
        width="100"
        height="100"
        alt="логотип"
      />
    </header>
  );
}

export default Header;
