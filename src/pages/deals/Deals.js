import { BrowserRouter as Router, Switch, Route, useRouteMatch, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Active from '../../components/active/Active';
import Ongoing from '../../components/ongoing/Ongoing';
import Completed from '../../components/completed/Completed';
import { host } from '../../config';
import './deals.css';

const Deals = () => {
  let { path, url } = useRouteMatch();
  const [incomingRequests, setIncomingRequests] = useState([]);
  const [completedBookings, setCompletedBookings] = useState([]);
  const userId = document.cookie.split('=')[1];

  const getBookingRequests = async () => {
    const bookingsData = await fetch(`${host}/bookings/owner/${userId}`).then(res => res.json());
    const filteredBookings = bookingsData.filter(booking => !booking.accepted);
    setIncomingRequests(filteredBookings)
  }

  const getCompletedBookings = async () => {
    const bookingsData = await fetch(`${host}/bookings/completed/${userId}`).then(res => res.json());
    const filteredBookings = bookingsData.filter(booking => {
      if (userId === booking.ownerId && !booking.renterHasBeenReviewed) {
        return true;
      } else if (userId === booking.renterId && !booking.ownerHasBeenReviewed) {
        return true;
      }
    });
    setCompletedBookings(filteredBookings);
  }

  useEffect(() => {
    getBookingRequests();
    getCompletedBookings();
  }, [])

  return (
    <div className="active-deals">
      <h2 className="active-deals__header">Deals</h2>
      <div className="active-deals__tabs">
        <p>
          <Link to={`${url}`} className={`${incomingRequests.length !== 0 ? 'actions-txt' : ''}`}>Active Listings</Link>
          <span className={`material-icons-round ${incomingRequests.length !== 0 ? 'actions-icon' : 'hidden'}`}>fiber_manual_record</span>
        </p>
        <p>
          <Link to={`${url}/ongoing`}>Live Deals</Link>
        </p>
        <p>
          <Link to={`${url}/completed`} className={`${completedBookings.length !== 0 ? 'actions-txt' : ''}`}>Completed</Link>
          <span className={`material-icons-round ${completedBookings.length !== 0 ? 'actions-icon' : 'hidden'}`}>fiber_manual_record</span>
        </p>
        </div>

      <Switch>
        <Route exact path={path}>
          <Active />
        </Route>
        <Route path={`${path}/ongoing`}>
          <Ongoing />
        </Route>
        <Route path={`${path}/completed`}>
          <Completed />
        </Route>
      </Switch>
    </div>
  );
};

export default Deals;