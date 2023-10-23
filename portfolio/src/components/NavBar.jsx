import React from 'react'
import { useState } from 'react';

function NavBar() {
  const [isNavVisible, setNavVisibility] = useState(true);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };
  return    <nav className={`nav ${isNavVisible ? '' : 'hidden-links'}`}>
    <ul className="navList">
    <li className='navBar'>
    <a href='/' className='taryn'>Taryn Bilsborough</a>
      <a href='/projects' className="projects">Projects</a>
      <a href='/about' className="about">About</a>
    </li>
    <div className="nav">
    <button className='menu-button' onClick={toggleNav}></button>
    </div>
    </ul>

  </nav>
}

export default NavBar