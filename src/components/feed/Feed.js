import { useState, useEffect } from 'react';
import Listing from '../listing/Listing';

const Feed = () => {
    const [listings, setListings] = useState([]);
    const getListings = async () => {
        try {
          const data = await fetch('http://localhost:3001/listings');
          const listingsData = await data.json();
          console.log(listingsData);
          setListings(listingsData);
        } catch (err) {
          console.log(err);
        }
      }
    
      useEffect(() => {
        getListings();
      }, []);

  return (
    <div>
      <h1>Feed</h1>
        {listings.map(listing => <Listing listing={listing} key={listing._id}/>)}
    </div>
  );
};

export default Feed;