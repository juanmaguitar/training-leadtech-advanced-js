import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../Navbar/'
import Home from '../Home/'
import Users from '../Users/'
import Card from '../Cards/'

import { BrowserRouter as Router, Route } from "react-router-dom";



import { contacts } from '../../Helpers/static-data'


class App extends Component {
  state= {
    selected: []
  }
  addSelected = id => {
    this.setState({
      selected: [...this.state.selected, id]
    })
  }
  render() {
    const {selected} = this.state
    return (
      <Router>
        <Container>
          <Navbar selected={ selected } />
          <Route exact path="/" component={Home} />
          <Route path="/Users" render={ props => {
            console.log(props)
            return (
              <Users 
                {...props} 
                users={ contacts } 
                selected={ selected } 
                />
              )
          }} />
        </Container>
      </Router>
    )
  }
}

export default App