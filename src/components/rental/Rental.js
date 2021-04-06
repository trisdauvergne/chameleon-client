import React, { useState, useEffect } from 'react';
import { host } from '../../config';
import './rental.css';
import Modal from '../modal/Modal.js';
import { Link } from 'react-router-dom';

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
      <div className="rental__txt">
        <h3 className="rental__heading">{listing.title}</h3>
        {rental.accepted && <p className="semibold rental__status">Request Approved</p>}
        {!rental.accepted && <p className="semibold rental__status">Request Pending</p>}
        <p className="rental__owner">Rented from: <Link to={`/user/${owner.user._id}`}>{owner.user.firstName}</Link></p>
        {rental.accepted && <button className="rental__contact-btn" onClick={() => setModalOpen(true)} >
          Contact {owner.user.firstName}
        </button>}
        <p className="rental__date">Rental start: {rental.bookingFrom}</p>
        <p className="rental__date rental__date--end">Rental end: {rental.bookingTo}</p>
      </div>
 
      <Modal open={modalOpen} onClose={()=> setModalOpen(false)}>
        <article className="user-modal">
            <h3>{owner.user.firstName} {owner.user.lastName}</h3>
            <p>{owner.user.location.postalcode}, {owner.user.location.area}</p>
            <p>{owner.user.email}</p>
        </article>
      </Modal>
    </article>
  )
}

export default Rental;
