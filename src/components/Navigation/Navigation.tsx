import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.scss'

const Navigation = () => {
  return (
    <div className="header">
      <span className="header__logo">GitHub</span>
      <nav className='nav'>
        <NavLink
          to='/'
          className={({isActive}: any) => isActive ? 'nav__link nav__link-active' : 'nav__link'}>
          Home
        </NavLink>
        <NavLink
          to='/some'
          className={({isActive}: any) => isActive ? 'nav__link nav__link-active' : 'nav__link'}>
          Some
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
