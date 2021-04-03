import './App.css';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Listing from './pages/listing/Listing';
import Booking from './pages/booking/Booking';
import Deals from './pages/deals/Deals';
import UpdateListing from './pages/updatelisting/UpdateListing';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Account from './pages/account/Account';
import User from './pages/user/User';

function App() {
 
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/booking/:listingId" component={Booking} />
          <Route path="/listing" component={Listing} />
          <Route path="/deals" component={Deals}/>
          <Route path="/updatelisting/:listingid" component={UpdateListing} />
          <Route path="/account" component={Account}/>
          <Route path="/user/:userId" component={User}/>
        </Switch>
        <Navbar />
      </Router>
      </>
  );
}

export default App;
