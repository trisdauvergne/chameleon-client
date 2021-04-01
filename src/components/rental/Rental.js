import React, { useState, useEffect } from 'react';
import { host } from '../../config';
import './rental.css';

const Rental = ({ rental }) => {
  const [imgPath, setImgPath] = useState(null);

  const getImgPath = async () => {
    const data = await fetch(`${host}/listings/${rental.listingId}`);
    const listing = await data.json();
    setImgPath(listing.pictures[0]);
  };

  useEffect(() => {
    getImgPath();
  },[]);
  
  if (!imgPath) {
    return null;
  }

  return (
    <article className="rental">
      <img className="rental__img" src={`${host}/uploads/${imgPath}`}/>
    </article>
  )
}

export default Rental;
