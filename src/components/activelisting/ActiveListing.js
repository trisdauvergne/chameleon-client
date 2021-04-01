import { host } from '../../config';
import './activelisting.css';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const ActiveListing = ({ listing }) => {
  const [acceptedBookings, setAcceptedBookings] = useState([]);
  const [pendingBookings, setPendingBookings] = useState('');

  let history = useHistory();

  const deleteListing = async () => {
    await fetch(`${host}/listings/${listing._id}`, { method: 'delete' });
    history.push('/deals');
  };

  const getBookings = async () => {
    const result = await fetch(`${host}/bookings/${listing._id}`);
    const data = await result.json();
    const accepted = data.filter(booking => booking.accepted);
    const pending = data.filter(booking => !booking.accepted);
    setAcceptedBookings(accepted);
    setPendingBookings(pending);
  };

  useEffect(() => {
    getBookings();
  }, []);
    
  return (
    <article className={`active-listing ${pendingBookings.length !== 0 && 'active-listing--pending'}`}>
      <div className="active-listing__img-div">
        <img className="active-listing__img" src={`${host}/uploads/${listing.pictures[0]}`} alt={listing.title}/>
      </div>
      <div className="active-listing__txt-div">
        <h3>{listing.title}</h3>
        <p>{listing.description}</p>
        <p>{listing.attributes.price} SEK</p>
        <Link to={`/updatelisting/${listing._id}`}>
          <button>Update</button>
        </Link>
        <button onClick={deleteListing}>Delete</button>
        <div>
          <ul>
            {acceptedBookings.map(listing => <li key={listing._id}>From: {listing.bookingFrom}  To: {listing.bookingTo} </li>)}
          </ul>
          {pendingBookings.length !== 0 && <button>Review request</button>}
        </div>
      </div>
    </article>
  )
}
  
  export default ActiveListing
  