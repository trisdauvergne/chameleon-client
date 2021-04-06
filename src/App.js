import './App.css';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Listing from './pages/listing/Listing';
import Booking from './pages/booking/Booking';
import Deals from './pages/deals/Deals';
import UpdateListing from './pages/updatelisting/UpdateListing';
import Navbar from './components/navbar/Navbar';
import Logo from './components/logo/Logo';
import { Switch, Route } from 'react-router-dom';
import Account from './pages/account/Account';
import User from './pages/user/User';
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

function App() {
  const [hasCookie, setHasCookie] = useState(false);
  let history = useHistory();
  
  useEffect(() => {
    console.log(window.location);
    const regex = /userId/i;
    if (document.cookie && regex.test(document.cookie)) {
      setHasCookie(true);
    }
  }, [])

  if (!hasCookie) {
    return (
      <>
        <Logo />
        <Login />
      </>
    )
  }

  return (
    <>
      <Logo />
      <Switch>
        {/* Uncommented line 42 to work on login page */}
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/booking/:listingId" component={Booking} />
        <Route path="/listing" component={Listing} />
        <Route path="/deals" component={Deals}/>
        <Route path="/updatelisting/:listingid" component={UpdateListing} />
        <Route path="/account" component={Account}/>
        <Route path="/user/:userId" exact component={User}/>
      </Switch>
      <Navbar />
      {/* <Navbar /> */}

    </>
  );
}

export default App;
