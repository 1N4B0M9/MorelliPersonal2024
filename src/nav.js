import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SidePanel from "./pages/sidePanel"
const nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="text-gray-500 shadow-md flex pb-5 pt-5 pl-5 hover:animate-pulse">
    
      <button
          className="md:hidden block text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >

        ☰ {/* Alternatively, use an icon from a library like FontAwesome */}
      </button>

      <ul className={`md:flex md:space-x-6 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>   
        <li className='font-bold'><NavLink to="/" exact activeClassName="active">Nathan Morelli</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/portfolio" activeClassName="active">Services</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default nav;
