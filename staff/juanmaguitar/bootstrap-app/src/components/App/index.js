import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Navbar from '../Navbar/'

class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <h1>App</h1>
      </Container>
    );
  }
}

export default App;
