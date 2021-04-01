import { host } from '../../config';
import './activelisting.css';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const ActiveListing = ({ listing }) => {
  // const [bookingInfo, setBookingInfo] = useState('');

  // const getBookingInfo = () => {
  //   const data = await fetch(`${host}`);
  //   const activeData = await data.json();
  // }

  let history = useHistory();

  const deleteListing = async () => {
    await fetch(`${host}/listings/${listing._id}`, { method: 'delete' });
    history.push('/deals');
  }
    
    return (
      <article className="active-listing">
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
        </div>
      </article>
    )
  }
  
  export default ActiveListing
  