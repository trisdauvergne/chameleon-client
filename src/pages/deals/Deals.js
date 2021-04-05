import { BrowserRouter as Router, Switch, Route, useRouteMatch, Link, useLocation } from 'react-router-dom';
import Active from '../../components/active/Active';
import Ongoing from '../../components/ongoing/Ongoing';
import Completed from '../../components/completed/Completed';
import './deals.css';

const Deals = () => {
  let { path, url } = useRouteMatch();
  let location = useLocation();
  console.log(location);

  return (
    <div className="active-deals">
      <h2 className="active-deals__header">Deals</h2>
      <div className="active-deals__tabs">
        <p>
          <Link to={`${url}`}>Active Listings</Link>
        </p>
        <p>
          <Link to={`${url}/ongoing`}>Live Deals</Link>
        </p>
        <p>
          <Link to={`${url}/completed`}>Completed</Link>
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