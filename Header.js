import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch,Route,Link,useRouteMatch,useParams} from "react-router-dom";
import About from './About';
import Topics from './Topics'
import Home from './Home'
const Header = () => {
  return (
  <div>
 <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
  )};


export default Header;