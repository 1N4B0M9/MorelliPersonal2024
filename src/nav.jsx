import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="text-gray-500 shadow-md flex items-center pb-5 pt-5 pl-5 relative">
      <button
        className="md:hidden block text-2xl focus:outline-none hover:bg-gradient-to-r hover:from-red-500 hover:via-yellow-500 hover:to-green-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        ☰
      </button>

      <ul
        className={`font-roboto md:flex md:space-x-6 md:static absolute left-0 top-full w-full md:bg-transparent ${
          isMobileMenuOpen ? 'block z-10 absolute left-0 top-full md:top-auto md:left-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-3 md:p-0 mt-2 ' : 'hidden'
        }`}
      >
        <li className="font-bold hover:bg-gradient-to-r hover:from-red-500 hover:via-yellow-500 hover:to-green-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"><NavLink to="/" exact activeClassName="active">Nathan Morelli</NavLink></li>
        <li className = "hover:bg-gradient-to-r hover:from-red-500 hover:via-yellow-500 hover:to-green-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
        <li className = "hover:bg-gradient-to-r hover:from-red-500 hover:via-yellow-500 hover:to-green-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"><NavLink to="/about" activeClassName="active">Resume</NavLink></li>
        
      </ul>
    </nav>
  );
};

export default Nav;