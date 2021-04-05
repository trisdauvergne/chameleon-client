import { BrowserRouter as Router, Switch, Route, useRouteMatch, Link, useLocation } from 'react-router-dom';
import Active from '../../components/active/Active';
import Ongoing from '../../components/ongoing/Ongoing';
import Completed from '../../components/completed/Completed';


const Deals = () => {
  let { path, url } = useRouteMatch();
  let location = useLocation();
  console.log(location);

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}`}>Active Listings</Link>
        </li>
        <li>
          <Link to={`${url}/ongoing`}>Ongoing Deals</Link>
        </li>
        <li>
          <Link to={`${url}/completed`}>Completed Bookings</Link>
        </li>
      </ul>

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