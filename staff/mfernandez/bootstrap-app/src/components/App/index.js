import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './index.css'

import Navbar from '../Navbar/'
import Home from '../Home/'

class App extends Component {

  render() {
    return (
      <Container>
        <Navbar />
        <Home />
      </Container>
    )
  }
}

export default App;
