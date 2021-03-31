import { useState, useEffect } from 'react';
import ActiveListing from '../activelisting/ActiveListing';
import { host } from '../../config';
const Active = () => {
  // Need to add ownerId dynamically
  const ownerId = '60630e4a4788aa76cd4e3b53';
  const [activeListings, setActiveListings] = useState([]);
    
  const getActiveListings = async () => {
    const data = await fetch(`${host}/listings/active/${ownerId}`);
    const activeData = await data.json();
    setActiveListings(activeData);
    console.log(activeData);
  };

    useEffect(() => {
      getActiveListings();
    }, []);

  return (
    <div>
      {activeListings.map(listing => <ActiveListing key={listing._id} listing={listing}/>)}
    </div>
  )
}

export default Active;

// 1. GET listings info 
// 2. Update listings info
// 3. Delete listing
// 4. See which listings have unaccepted requests (accept / reject) - perhaps visualise differently?

