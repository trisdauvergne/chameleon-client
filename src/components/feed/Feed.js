import { useState, useEffect } from 'react';
import Listing from '../listing/Listing';
import { host } from '../../config';

const Feed = () => {
    const [listings, setListings] = useState([]);
    const getListings = async () => {
        try {
          const ownerId = document.cookie.split('=')[1];
          const data = await fetch(`${host}/listings`);
          const listingsData = await data.json();
          const filteredListings = listingsData.filter(listing => listing.ownerId !== ownerId);
          setListings(filteredListings.reverse());
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