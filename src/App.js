import './App.css';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Listing from './pages/listing/Listing';
import Booking from './pages/booking/Booking';
import CreateListing from './components/createlistings/CreateListing';
import BookingForm from './components/bookingform/BookingForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/booking/:listingId" component={Booking} />
          <Route path="/listing" component={Listing} />
        </Switch>
      </Router>
  );
}

export default App;
