import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__links">
        <Link to="/">
        <span className="material-icons-round">home</span>
          <li>Home</li>
        </Link>
        <Link to="/listing">
          <span className="material-icons-round">add</span>
          <li>List item</li>
        </Link>
        <Link to="/deals">
          <span className="material-icons-round">local_offer</span>
          <li>Deals</li>
        </Link>
        <Link to="/">
        <span className="material-icons-round">account_circle</span>
          <li>Account</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
