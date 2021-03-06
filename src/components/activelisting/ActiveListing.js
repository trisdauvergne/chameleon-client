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
  const [currentRenters, setCurrentRenters] = useState([]);
  const [bookingsVisible, setBookingsVisible] = useState(false);

  let history = useHistory();

  const deleteListing = async () => {
    await fetch(`${host}/listings/${listing._id}`, { method: 'delete' });
    history.push('/deals');
  };

  const getBookings = async () => {
    const result = await fetch(`${host}/bookings/${listing._id}`);
    const data = await result.json();
    const accepted = data.filter(booking => booking.accepted && !booking.completed);
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
    console.log(data);
    setRenter(data);
  };

  const getCurrentRenters = async () => {
    const data = await Promise.all(acceptedBookings.map(booking => fetch(`${host}/users/${booking.renterId}`).then(res => res.json())));
    setCurrentRenters(data);
  };
 
  useEffect(() => {
    getBookings();
  }, []);
    
  useEffect(() => {
    getRenter();
  }, [pendingBookings]);

  useEffect(() => {
    getCurrentRenters();
  }, [acceptedBookings])

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
  }

  const rejectRequest = async () => {
    await fetch (`${host}/bookings/${pendingBookings[0]._id}`, {method: 'DELETE'});
    setModalOpen(false);
    history.go(0);
  }

  const itemReturned = async (id) => {
    await fetch(`${host}/bookings/completed/${id}`, {method: 'PUT'});
    history.push('/deals/completed');
  }

  return (
    <>
    <article className={`active-listing ${pendingBookings.length !== 0 && 'active-listing--pending'}`}>
      <div className="active-listing__img-div">
        <img className="active-listing__img" src={`${host}/uploads/${listing.pictures[0]}`} alt={listing.title}/>
      </div>
      <div className="active-listing__txt-div">
        <h3 className="active-listing__listing-title">{listing.title}</h3>
        <p className="active-listing__listing-description">{listing.description}</p>
        <p className="active-listing__listing-price semibold">{listing.attributes.price} SEK per day</p>
        <div className="active-listing__btn-div">
          <Link to={`/updatelisting/${listing._id}`}>
            <p className="semibold active-listing__btn active-listing__btn--update-btn">Update<span className="material-icons-round">edit</span></p>
          </Link>
          <p className="semibold active-listing__btn active-listing__btn--delete-btn" onClick={deleteListing}>Delete<span class="material-icons-round">delete</span></p>
        </div>
        <div>
          {acceptedBookings.length > 0 && <button className="active-listing__btn active-listing__btn--dates-btn" onClick={() => setBookingsVisible(true)}>View pre-booked dates</button>}
          {pendingBookings.length !== 0 && <button className="active-listing__request-btn" onClick={() => setModalOpen(true)}>Review pending request</button>}
        </div>
      </div>
    </article>
    {renter !== null && 
      <Modal open={modalOpen} onClose={()=> setModalOpen(false)}>
        <article className="request-review">
          <div className="flex">
            <div className="request-review__img">
              <img src={`${host}${renter.user.picture}`} className="img-user"/>
            </div>
            <div className="flex-column">
              <div className="request-review__txt">
              <Link to={`/user/${renter.user._id}`}><h2>{renter.user.firstName}</h2></Link> 
                <h3>Rating: {renter.rating}<span class="orange-star material-icons-round">star_rate</span></h3>
                <p>{pendingBookings[0].bookingFrom}</p>
                <p>{pendingBookings[0].bookingTo}</p>
                <br/>
              </div>
            </div>
          </div>
          <div className="btn-container">             
            <button className="btn-approve" onClick={approveRequest}>Approve</button>
            <button className="btn-reject" onClick={rejectRequest}>Reject</button> 
          </div>
        </article>
      </Modal>}
      <Modal open={bookingsVisible} onClose={() => setBookingsVisible(false)}>
          <ul className="active-listing__acceptedbookings-ul">
            {acceptedBookings.map((listing, index) =>
              <li className="active-listing__acceptedbooking-li prebook-container"key={listing._id}>
                {currentRenters.length !== 0 &&
                <>
                <div className="flex">
                <div className="prebooked__img">
                    <img src={`${host}${currentRenters[index].user.picture}`} className="img-user"/>
                  </div>
                  <div className="flex-column return-txt-container">
                    <h2 className="active-listing__acceptedbooking-p"><Link to={`/user/${listing.renterId}`}>{currentRenters[index].user.firstName}</Link></h2>
                    <p className="active-listing__acceptedbooking-p">Rented from:<br/><i>{listing.bookingFrom}</i></p>
                    <p className="active-listing__acceptedbooking-p">Rented to: <br/><i>{listing.bookingTo}</i></p>
                  </div>
                </div>
                <div className="btn-container-return">
                  <button className="active-listing__return-btn" onClick={() =>itemReturned(listing._id)}>Mark as returned</button>
                </div>
                </>
                }
              </li>)}
          </ul>
      </Modal>
    </>
  )
}
  
  export default ActiveListing
  