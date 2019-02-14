import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";

import Navbar from "../Navbar/";
import Home from "../Home/";
import Users from "../Users/";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
        </Container>
      </Router>
    );
  }
}

export default App;
