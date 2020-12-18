/* eslint-disable no-debugger */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';
import './Navbar.css'

import sun from '../../images/sun.png';
import moon from '../../images/moon.png';
import logo from '../../images/logo.png';
import profile from '../../images/profile.ico';

function Navbar() {
  // open the profile dropdown
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { theme, updateTheme } = useContext(ThemeContext);

  const handleClick = () => {
    
    setDarkMode(!darkMode);
    theme === 'bg-light' ? updateTheme('bg-dark') : updateTheme('bg-light');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navigation">
        <ul className="navbar-navigation">
          <li className="menu-option">
            <Link to="/" className="menu-item">
              Explorar
            </Link>
          </li>
          <li className="menu-option">
            <Link to="/favorites" className="menu-item">
              Favoritos
            </Link>
          </li>
        </ul>
      </div>
      <div className="mode">
        <label className="switch">
          <input name="mode" type="checkbox" onClick={handleClick} />
          <span className="slider round">
            {darkMode ? (
              <img className="mode-icon-moon" src={moon} alt="" />
            ) : (
              <img className="mode-icon-sun" src={sun} alt="" />
            )}
          </span>
        </label>
      </div>
      <div className="profile">
        <ul className="navbar-profile">
          <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
              <img src={profile} alt="" />
            </a>
            {open && (
              <ul className="dropdown">
                <li>
                  <a href="" className="menu-item">
                    Mi Perfil
                  </a>
                </li>
                <li>
                  <a href="" className="menu-item">
                    Favoritos
                  </a>
                </li>
                <li>
                  <a href="" className="menu-item">
                    Mis Críticas
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
