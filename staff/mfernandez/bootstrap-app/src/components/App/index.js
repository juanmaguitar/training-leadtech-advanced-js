import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './index.css'
import Navbar from '../Navbar/'

class App extends Component {

  render() {
    return (
      <Container>
        <Navbar />
        <Row>
          <Col> <h1>Column 1</h1> </Col>
          <Col> Column 2 </Col>
          <Col> Column 3 </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
