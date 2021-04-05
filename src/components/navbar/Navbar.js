import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import { host } from '../../config';

const Navbar = () => {
  const [incomingRequests, setIncomingRequests] = useState([]);
  const [completedBookings, setCompletedBookings] = useState([]);
  const userId = document.cookie.split('=')[1];
  
  const getBookingRequests = async () => {
    const bookingsData = await fetch(`${host}/bookings/owner/${userId}`).then(res => res.json());
    const filteredBookings = bookingsData.filter(booking => !booking.accepted);
    setIncomingRequests(filteredBookings)
  }

  const getCompletedBookings = async () => {
    const bookingsData = await fetch(`${host}/bookings/completed/${userId}`).then(res => res.json());
    const filteredBookings = bookingsData.filter(booking => {
      if (userId === booking.ownerId && !booking.renterHasBeenReviewed) {
        return true;
      } else if (userId === booking.renterId && !booking.ownerHasBeenReviewed) {
        return true;
      }
    });
    setCompletedBookings(filteredBookings);
  }

  useEffect(() => {
    getBookingRequests();
    getCompletedBookings();
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
        <Link to={{
          pathname:"/deals",
          state: true
        }}>
          <span className={`material-icons-round ${incomingRequests.length !== 0 || completedBookings.length !== 0 ? 'navbar-link--actions' : ''}`}>local_offer</span>
          <li>Deals</li>
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
