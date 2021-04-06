import { useState, useEffect } from 'react';
import ActiveListing from '../activelisting/ActiveListing';
import { host } from '../../config';
import './active.css';

const Active = () => {
  const ownerId = document.cookie.split('=')[1];
  const [activeListings, setActiveListings] = useState([]);
    
  const getActiveListings = async () => {
    const data = await fetch(`${host}/listings/active/${ownerId}`);
    const activeData = await data.json();
    const listings = activeData.reverse();
    setActiveListings(listings);
  };

    useEffect(() => {
      getActiveListings();
    }, []);

  return (
    <section className="active-lisitings-container">
      <h3 className="active-listings__subheading">Your live listings on Chameleon</h3>
      {activeListings.map(listing => <ActiveListing key={listing._id} listing={listing}/>)}
      {activeListings.length === 0 && <p className="nothing-to-show">You have no active listings on Chameleon yet.</p>}
    </section>
  )
}

export default Active;

// 1. GET listings info 
// 2. Update listings info
// 3. Delete listing
// 4. See which listings have unaccepted requests (accept / reject) - perhaps visualise differently?

