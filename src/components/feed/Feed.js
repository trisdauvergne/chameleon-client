import { useState, useEffect } from 'react';
import Listing from '../listing/Listing';
import Filter from '../filter/Filter';
import { host } from '../../config';
import './feed.css';

const Feed = () => {
    const [listings, setListings] = useState([]);
    const [listingsFiltered, setListingsFiltered] = useState([]);
    const [filters, setFilters] = useState([]);
    const [filterVisible, setFilterVisible] = useState(false);
    const [bookingDates, setBookingDates] = useState([]);

    const getListings = async () => {
        try {
          const ownerId = document.cookie.split('=')[1];
          const data = await fetch(`${host}/listings`);
          const listingsData = await data.json();
          const filteredListings = listingsData.filter(listing => listing.ownerId !== ownerId);
          setListings(filteredListings.reverse());
          setListingsFiltered(filteredListings);
        } catch (err) {
          console.log(err);
        }
      }

      const changeFilter = (filterName, filterValue) => {
        const newFilters = filters.filter(filter => filter.filterName !== filterName);
        if (filterValue !== 'all') {
          console.log(newFilters);
          newFilters.push({ filterName, filterValue });
        }
        setFilters(newFilters);
      }

      useEffect(() => {
        const filteredListings = listings.filter(listing => filters.every(filter => filter.filterValue === listing.attributes[filter.filterName]));
        setListingsFiltered(filteredListings)
      }, [filters])
    
      useEffect(() => {
        getListings();
      }, []);

  return (
    <div className="filter">
      <div className="filter__btn-div">
        <button className="filter__btn" onClick={() => setFilterVisible(!filterVisible)}>Filter<span className="material-icons-round">filter_list</span></button>
      </div>
      {filterVisible && <Filter changeFilter={changeFilter} resetFilters={() => setFilters([])} />}
      <div className="listing">
        {listingsFiltered.map(listing => <Listing listing={listing} key={listing._id}/>)}
      </div>
    </div>
  );
};

export default Feed;