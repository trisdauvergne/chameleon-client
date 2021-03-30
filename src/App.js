import './App.css';
import Login from './pages/Login';
import Home from './pages/home/Home';
import CreateListing from './components/createlistings/CreateListing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
        <CreateListing />
      </Router>
  );
}

export default App;
