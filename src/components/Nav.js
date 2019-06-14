import React from 'react';
import {Link} from 'react-router-dom';

import style from '../styles/nav.module.scss';

const Nav = () => (
  <ul className={style.ul}>
    <li><Link to="/directory">Directory</Link></li>
    <li><Link to="/zones">Zones</Link></li>
  </ul>
);

export default Nav;