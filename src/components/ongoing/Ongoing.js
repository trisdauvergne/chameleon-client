import { useState, useEffect } from 'react';
import { host } from '../../config';
import Rental from '../rental/Rental.js';
import './ongoing.css';

const Ongoing = () => {
  const renterId = document.cookie.split('=')[1];
  const [rentals, setRentals] = useState([]);
    
  const getRentals = async () => {
    const data = await fetch(`${host}/bookings/rentals/${renterId}`);
    const rentalsData = await data.json();
    const filteredRentals = rentalsData.filter(rental => rental.completed === false);
    setRentals(filteredRentals.reverse());
  };

    useEffect(() => {
      getRentals();
    }, []);

  return (
      <div>
        <h3 className="live-deals__subheading">Other people's items</h3>
        {rentals.map(rental => <Rental key={rental._id} rental={rental} />)}
      </div>
  )
}

export default Ongoing
