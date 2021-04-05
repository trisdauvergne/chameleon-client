import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import { host } from '../../config';

const Navbar = () => {
  const [unanswered, setUnanswered] = useState([]);

  const ownerId = document.cookie.split('=')[1];
  const getBookings = async () => {
    const data = await fetch(`${host}/bookings/owner/${ownerId}`);
    const bookingsData = await data.json();
    // console.log(bookingsData);
    const filteredBookings = bookingsData.filter(booking => !booking.accepted);
    setUnanswered(filteredBookings);
  }

  useEffect(() => {
    getBookings();
  }, [])

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
          <li>Deals{unanswered.length > 0 && unanswered.length}</li>
        </Link>
        <Link to="/account">
        <span className="material-icons-round">account_circle</span>
          <li>Account</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
