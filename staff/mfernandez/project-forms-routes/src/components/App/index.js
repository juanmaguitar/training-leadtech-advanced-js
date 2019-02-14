import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from "../Form/"
import Home from "../Home/"
import User from "../User/"
import Users from "../Users/"

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <h1>My App!</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/user/5">User 5</Link>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/user/:id" component={User} />
            <Route path="/form" component={Form} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
