import { host } from '../../config';
import './activelisting.css';
import { useState, useEffect } from 'react';

const ActiveListing = ({ listing }) => {
  // const [bookingInfo, setBookingInfo] = useState('');

  // const getBookingInfo = () => {
  //   const data = await fetch(`${host}`);
  //   const activeData = await data.json();
  // }
    
    return (
      <article className="active-listing">
        <div className="active-listing__img-div">
          <img className="active-listing__img" src={`${host}/uploads/${listing.pictures[0]}`} alt={listing.title}/>
        </div>
        <div className="active-listing__txt-div">
          <h3>{listing.title}</h3>
          <p>{listing.description}</p>
          <p>{listing.attributes.price} SEK</p>
        </div>
      </article>
    )
  }
  
  export default ActiveListing
  