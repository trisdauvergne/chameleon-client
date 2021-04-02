import React, { useState, useEffect } from 'react';
import { host } from '../../config';
import './completedbooking.css';
import Modal from '../modal/Modal.js';
import ReviewModal from '../reviewmodal/ReviewModal';

const CompletedBooking = ({ booking }) => {
  const userId = document.cookie.split('=')[1];
  const [listing, setListing] = useState(null);
  const [dealPartner, setDealPartner] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const getListing = async () => {
    const data = await fetch(`${host}/listings/${booking.listingId}`);
    const listingData = await data.json();
    setListing(listingData);
  };

  const getDealPartner = async () => {
    if (userId === booking.ownerId) {
        const data = await fetch(`${host}/users/${booking.renterId}`);
        const dealPartnerData = await data.json();
        setDealPartner(dealPartnerData);
    } else {
        const data = await fetch(`${host}/users/${booking.ownerId}`);
        const dealPartnerData = await data.json();
        setDealPartner(dealPartnerData);
    }
  }

  useEffect(() => {
    getListing();
    getDealPartner();
  },[]);

  if (!listing || !dealPartner) {
    return null;
  }

  return (
    <>
      <article className="completed">
        <img className="completed__img" src={`${host}/uploads/${listing.pictures[0]}`} />
        <div>
          <p>{listing.title}</p>
          {userId === listing.ownerId && <p>You rented it out to {dealPartner.user.firstName}</p>}
          {userId === listing.ownerId && booking.ownerReviewed === false && <button onClick={() => setModalOpen(true)}>LEAVE REVIEW NOW</button>}
          {userId !== listing.ownerId && <p>You rented it from {dealPartner.user.firstName}</p>}
          {userId !== listing.ownerId && booking.renterReviewed === false && <button onClick={() => setModalOpen(true)}>LEAVE REVIEW NOW</button>}
          <p></p>
        </div>
      </article>
      <Modal open={modalOpen} onClose={()=> setModalOpen(false)}>
        <ReviewModal booking={booking} dealPartner={dealPartner} />
      </Modal>
    </>
  )
}

export default CompletedBooking;