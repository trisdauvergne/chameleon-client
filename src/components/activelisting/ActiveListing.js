import { host } from '../../config';
import './activelisting.css';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Modal from '../modal/Modal.js';

const ActiveListing = ({ listing }) => {
  const [acceptedBookings, setAcceptedBookings] = useState([]);
  const [pendingBookings, setPendingBookings] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [renter, setRenter] = useState(null);

  let history = useHistory();

  const deleteListing = async () => {
    await fetch(`${host}/listings/${listing._id}`, { method: 'delete' });
    history.push('/deals');
  };

  const getBookings = async () => {
    const result = await fetch(`${host}/bookings/${listing._id}`);
    const data = await result.json();
    const accepted = data.filter(booking => booking.accepted);
    const pending = data.filter(booking => !booking.accepted);
    setAcceptedBookings(accepted);
    setPendingBookings(pending);
  };

  const getRenter = async () => {
    if (pendingBookings.length === 0) {
      return;
    }
    const result = await fetch(`${host}/users/${pendingBookings[0].renterId}`);
    const data = await result.json();
    setRenter(data);
  };

  useEffect(() => {
    getBookings();
  }, []);
    
  useEffect(() => {
    getRenter();
  }, [pendingBookings]);

  const approveRequest = async () => {
    const approved = {
      ...pendingBookings[0],
      accepted: true
    }
    await fetch(`${host}/bookings/${pendingBookings[0]._id}`, 
    {
      method: 'PUT', 
      body: JSON.stringify(approved),
      headers: { 'Content-Type': 'application/json' }
    });
    setModalOpen(false);
    history.go(0);
    // window.location.reload(false);
  }

  const rejectRequest = async () => {
    await fetch (`${host}/bookings/${pendingBookings[0]._id}`, {method: 'DELETE'});
    setModalOpen(false);
    history.go(0);
  }

  return (
    <>
    <article className={`active-listing ${pendingBookings.length !== 0 && 'active-listing--pending'}`}>
      <div className="active-listing__img-div">
        <img className="active-listing__img" src={`${host}/uploads/${listing.pictures[0]}`} alt={listing.title}/>
      </div>
      <div className="active-listing__txt-div">
        <h3>{listing.title}</h3>
        <p>{listing.description}</p>
        <p>{listing.attributes.price} SEK</p>
        <Link to={`/updatelisting/${listing._id}`}>
          <button>Update</button>
        </Link>
        <button onClick={deleteListing}>Delete</button>
        <div>
          <ul>
            {acceptedBookings.map(listing => <li key={listing._id}>From: {listing.bookingFrom}  To: {listing.bookingTo} </li>)}
          </ul>
          {pendingBookings.length !== 0 && <button onClick={() => setModalOpen(true)}>Review request</button>}
        </div>
      </div>
    </article>
    {renter !== null && 
        <Modal open={modalOpen} onClose={()=> setModalOpen(false)}>
        <article className="request-review">
          <div className="request-review__img">
            <img src="https://i.pravatar.cc/150"/>
          </div>
          <div className="request-review__txt">
            <h3>{renter.user.firstName}</h3>
            <h2>Rating: {renter.rating}</h2>
            <p>{pendingBookings[0].bookingFrom}</p>
            <p>{pendingBookings[0].bookingTo}</p>
          </div>
          <button onClick={approveRequest}>Approve</button>
          <button onClick={rejectRequest}>Reject</button>
        </article>
      </Modal>}
    </>
  )
}
  
  export default ActiveListing
  