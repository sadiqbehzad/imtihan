import React, { useState } from 'react';
import './header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleDropdown = (index) => {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns[index].classList.toggle('show');
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">Your Logo</div>
        <nav className={`navbar ${menuOpen ? 'show' : ''}`}>
          <ul className="nav-list">
            <li><a href="#" onClick={closeMenu}>Home</a></li>
            <li className="dropdown" onClick={() => toggleDropdown(0)}>
              <span className="dropdown-toggle">About</span>
              <ul className="dropdown-menu">
                <li><a href="#" onClick={closeMenu}>Team</a></li>
                <li><a href="#" onClick={closeMenu}>History</a></li>
                <li><a href="#" onClick={closeMenu}>Values</a></li>
              </ul>
            </li>
            <li className="dropdown" onClick={() => toggleDropdown(1)}>
              <span className="dropdown-toggle">Services</span>
              <ul className="dropdown-menu">
                <li><a href="#" onClick={closeMenu}>Service 1</a></li>
                <li><a href="#" onClick={closeMenu}>Service 2</a></li>
                <li><a href="#" onClick={closeMenu}>Service 3</a></li>
              </ul>
            </li>
            <li><a href="#" onClick={closeMenu}>Contact</a></li>
          </ul>
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </nav>
      </header>
      {/* Your page content goes here */}
    </div>
  );
}


export default Header;
