import { useState, useEffect } from 'react';
import Listing from '../listing/Listing';
import { host } from '../../config';

const Feed = () => {
    const [listings, setListings] = useState([]);
    const getListings = async () => {
        try {
          const data = await fetch(`${host}/listings`);
          const listingsData = await data.json();
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