import { useState, useEffect } from 'react';
import Listing from '../listing/Listing';
import { host } from '../../config';

const Feed = () => {
    const [listings, setListings] = useState([]);
    const [listingsFiltered, setListingsFiltered] = useState([]);
    const [filters, setFilters] = useState([]);

    const getListings = async () => {
        try {
          const ownerId = document.cookie.split('=')[1];
          const data = await fetch(`${host}/listings`);
          const listingsData = await data.json();
          const filteredListings = listingsData.filter(listing => listing.ownerId !== ownerId);
          setListings(filteredListings.reverse());
          setListingsFiltered(filteredListings.reverse());
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
    <div>
      <div>
        <label>Gender
          <select name="gender" onChange={(e) => changeFilter('gender', e.target.value)}>
            <option value="all">Include all</option>
            <option value="guys">Guys</option>
            <option value="ladies">Ladies</option>
            <option value="unisex">Unisex</option>
          </select>
        </label>
      </div>
      <div>
        <label>Category
          <select name="category" onChange={(e) => changeFilter('category', e.target.value)}>
            <option value="all">Include all</option>
            <option value="trousers">Trousers</option>
            <option value="jeans">Jeans</option>
            <option value="shirt">Shirt</option>
            <option value="dress">Dress</option>
            <option value="skirt">Skirt</option>
            <option value="jacket">Jacket</option>
            <option value="suit">Suit</option>
            <option value="accessories">Accessories</option>
          </select>
        </label>
      </div>
      <div>
        <label>Size
          <select name="size" onChange={(e) => changeFilter('size', e.target.value)}>
            <option value="all">Include all</option>
            <option value="xsmall">XS</option>
            <option value="small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
            <option value="xlarge">XL</option>
          </select>
        </label>
      </div>
      {listingsFiltered.map(listing => <Listing listing={listing} key={listing._id}/>)}
    </div>
  );
};

export default Feed;