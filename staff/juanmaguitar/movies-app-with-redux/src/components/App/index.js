import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from 'react-bootstrap';

import Navbar from '../Navbar/'
import Home from '../Home/'
import Popular from '../Popular/'

class App extends Component {  
  render() {
    return (
      <Router>
        <Container>
          <Navbar />
          <h1>App</h1>
          <Route exact path="/" component={Home} />
          <Route exact path="/popular" component={Popular} />

        </Container>
      </Router>  
    );
  }
}

export default App;
