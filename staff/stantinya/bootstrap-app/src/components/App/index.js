import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from "react-bootstrap";

import Navbar from "../Navbar/";
import Home from "../Home/";
import Users from "../Users/";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Navbar />
          <h1>App</h1>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />

          {/* Needed if we wanted to pass props to children */}
          {/* <Route
            path="/users"
            render={props => {
              return <Users {...props} />;
            }}
          /> */}
        </Container>
      </Router>
    );
  }
}

export default App;
