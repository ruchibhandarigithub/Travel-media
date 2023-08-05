import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBookmark, FaBell, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className='navbar-left'>
        <h3>TravelMedia.in</h3>
      </div>
      <div className='navbar-center'>
          <div className='navbar-icons'>
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              <FaHome /> 
            </Link>
            <Link to="/another-route" className={`nav-link ${location.pathname === '/another-route' ? 'active' : ''}`}>
              <FaBell /> 
            </Link>
            <Link to="/item/1" className={`nav-link ${location.pathname.includes('/item') ? 'active' : ''}`}>
              <FaBookmark /> 
            </Link>
            
            <Link to="/yet-another-route" className={`nav-link ${location.pathname === '/yet-another-route' ? 'active' : ''}`}>
              <FaUser /> 
            </Link>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
