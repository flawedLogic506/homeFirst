import React from 'react';

import style from '../styles/header.module.scss';

const Header = () => (
  <header className={style.header}>
    <div className="ui container">
      <div className={style.content}>
        <p className={style.infoItem}>Welcome, User</p>
        <p className={style.infoItem}>Logo</p>
        <p className={style.infoItem}>Something</p>
      </div>
    </div>
  </header>
);

export default Header;