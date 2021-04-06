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
        <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="link-container">
        <span className="material-icons-round navbar-icon">home</span>
          <li className="navbar-txt semibold">Home</li>
          </div>
        </Link>
        <Link to="/listing" style={{ textDecoration: 'none' }}>
        <div className="link-container">
          <span className="material-icons-round navbar-icon">add</span>
          <li className="navbar-txt semibold">List item</li>
        </div>
        </Link>
       
        <Link to="/deals" style={{ textDecoration: 'none' }}>
        <div className="link-container">
          <span className={`material-icons-round navbar-icon ${incomingRequests.length !== 0 || completedBookings.length !== 0 ? 'navbar-icon--actions' : ''}`}>local_offer</span>
          <li className="navbar-txt semibold">Deals</li>
          </div>
        </Link>
        <Link to="/account" style={{ textDecoration: 'none' }}>
        <div className="link-container">
        <span className="material-icons-round navbar-icon">account_circle</span>
          <li className="navbar-txt semibold">Account</li>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
