import { useState, useEffect } from 'react';
import { host } from '../../config';
import CompletedBooking from '../completedbooking/CompletedBooking.js';
import './completed.css';

const Completed = () => {
  const userId = document.cookie.split('=')[1];
  const [completedBookings, setCompletedBookings] = useState([]);

  const getBookings = async () => {
    const data = await fetch(`${host}/bookings/completed/${userId}`);
    const bookingData = await data.json();
    setCompletedBookings(bookingData);
  }

  useEffect(() => {
    getBookings();
  }, []);

  return (
    <div>
      <h3 className="completed__heading">Your completed deals</h3>
      {completedBookings.map(booking => <CompletedBooking key={booking._id} booking={booking}/>)}
    </div>
  )
}

export default Completed
