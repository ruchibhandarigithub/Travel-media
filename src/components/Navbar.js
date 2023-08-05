// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBookmark } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='navbar-left'>
        <h3>TravelMedia.in</h3>
      </div>
      <div className='navbar-center'>
          <div className='navbar-icons'>
            <Link to="/" className="nav-link">
              <FaHome /> 
            </Link>
            <Link to="/posts" className="nav-link">
              <FaBookmark /> 
            </Link>
            <Link to="/posts" className="nav-link">
              <FaBookmark /> 
            </Link>
            <Link to="/posts" className="nav-link">
              <FaBookmark /> 
            </Link>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
