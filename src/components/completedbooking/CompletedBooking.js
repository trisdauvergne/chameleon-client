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
        <div className="completed__txt">
          <h3 className="completed__title">{listing.title}</h3>
          {userId === listing.ownerId && <p className="completed__p">You rented this item to {dealPartner.user.firstName}</p>}
          {userId === listing.ownerId && booking.renterHasBeenReviewed === false && <button className="completed__review-btn" onClick={() => setModalOpen(true)}>Leave {dealPartner.user.firstName} a review</button>}
          {userId !== listing.ownerId && <p>You rented this item from {dealPartner.user.firstName}</p>}
          {userId !== listing.ownerId && booking.ownerHasBeenReviewed === false && <button className="completed__review-btn" onClick={() => setModalOpen(true)}>Leave {dealPartner.user.firstName} a review</button>}
        </div>
      </article>
      <Modal open={modalOpen} onClose={()=> setModalOpen(false)}>
        <ReviewModal booking={booking} dealPartner={dealPartner} setModal={setModalOpen} />
      </Modal>
    </>
  )
}

export default CompletedBooking;