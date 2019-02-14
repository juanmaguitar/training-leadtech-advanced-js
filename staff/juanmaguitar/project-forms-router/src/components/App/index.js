import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from '../Form/'
import Home from '../Home/'
import Users from '../Users/'
import User from '../User/'
import Todo from '../Todo/'

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
                <Link to="/users">Users</Link>
              </li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={Form} />
            <Route path="/users" component={Users} />
            <Route path="/user/:id" component={User} />
            <Route path="/todo/:id" component={Todo} />
          </div>
        </Router>    
      </div>
    )
  }
}

export default App;
