import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';




function NavBar() {
  const [isNavVisible, setNavVisibility] = useState(true);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };
  return (
    <nav className={`nav ${isNavVisible ? '' : 'hidden-links'}`}>
      <ul className="navList">
        <li className="navBar">
          <Link to="/" className="taryn">
            Taryn Bilsborough
          </Link>
          <Link to="/projects" className="projects">
            Projects
          </Link>
          <Link to="/about" className="about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar