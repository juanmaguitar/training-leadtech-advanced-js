import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Navbar from '../Navbar/'
import Home from '../Home/'

class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <h1>App</h1>
        <Home />
      </Container>
    );
  }
}

export default App;
