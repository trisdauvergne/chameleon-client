import { useState, useEffect } from 'react';
import { host } from '../../config';
import CompletedBooking from '../completedbooking/CompletedBooking.js';

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
      {completedBookings.map(booking => <CompletedBooking key={booking._id} booking={booking}/>)}
      <h1>test</h1>
    </div>
  )
}

export default Completed
