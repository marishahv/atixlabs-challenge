import React from 'react';
import capitalize from 'lodash/capitalize';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import './navbar.scss'

const LINKS = {
  home: 'home',
  images: 'images',
  sheets: 'sheets'
}

const NavBar = () => {
  return (
    <nav className='navbar' data-testid='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <NavLink 
            to={LINKS.home} 
            className={({ isActive }) =>
              classnames(isActive && 'active-link', 'navbar-link')
            }>{capitalize(LINKS.home)}
          </NavLink>
        </li>
        <li className='navbar-item'>
        <NavLink 
            to={LINKS.images} 
            className={({ isActive }) =>
              classnames(isActive && 'active-link', 'navbar-link')
            }>{capitalize(LINKS.images)}
          </NavLink>
        </li>
        <li className='navbar-item'>
        <NavLink 
            to={LINKS.sheets} 
            className={({ isActive }) =>
              classnames(isActive && 'active-link', 'navbar-link')
            }>{capitalize(LINKS.sheets)}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
