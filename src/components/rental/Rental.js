import React, { useState, useEffect } from 'react';
import { host } from '../../config';
import './rental.css';
import Modal from '../modal/Modal.js';

const Rental = ({ rental }) => {
  const [listing, setListing] = useState(null)
  const [owner, setOwner] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const getListing = async () => {
    const data = await fetch(`${host}/listings/${rental.listingId}`);
    const listingData = await data.json();
    setListing(listingData);
  };

  const getOwner = async () => {
    if (!listing) {
      return;
    }
    const data = await fetch(`${host}/users/${listing.ownerId}`);
    const ownerData = await data.json();
    setOwner(ownerData);
  }

  useEffect(() => {
    getListing();
  },[]);

  useEffect(() => {
    getOwner();
  }, [listing])
  
  if (!listing || !owner) {
    return null;
  }

  return (
    <article className="rental">
      <img className="rental__img" src={`${host}/uploads/${listing.pictures[0]}`}/>
      <div>
        <h3>{listing.title} {!rental.accepted && <span>(Pending)</span>}</h3>
        <p>Start: {rental.bookingFrom} </p>
        <p>Return: {rental.bookingTo} </p>
        <p>Rented by: {owner.user.firstName}</p>
        <button onClick={() => setModalOpen(true)} >See {owner.user.firstName}'s information</button>
      </div>
 
      <Modal open={modalOpen} onClose={()=> setModalOpen(false)}>
        <article className="user-modal">
          <div className="user-modal__img">
            <img src="https://i.pravatar.cc/150"/>
          </div>
          <div>
            <h3>{owner.user.firstName} {owner.user.lastName}</h3>
            <p>{owner.rating}</p>
            <p>{owner.user.location.postalcode}, {owner.user.location.area}</p>
            {rental.accepted && 
            <p>{owner.user.email}</p>}
          </div>
        </article>
      </Modal>
    </article>
  )
}

export default Rental;
