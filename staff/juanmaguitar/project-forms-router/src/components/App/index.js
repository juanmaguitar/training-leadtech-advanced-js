import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from '../Form/'
import Home from '../Home/'
import User from '../User/'

class App extends Component {
  render() {
    return (
      <div>
        <h1>My App</h1>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
              <li>
                <Link to="/user/5">User 5</Link>
              </li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={Form} />
            <Route path="/user/:id" component={User} />
          </div>
        </Router>    
      </div>
    )
  }
}

export default App;
