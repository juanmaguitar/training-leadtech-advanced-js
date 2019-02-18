import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from 'react-bootstrap';

import Navbar from '../Navbar/'
import Home from '../Home/'
import Users from '../Users/'

import {contacts} from '../../helpers/static-data'
console.log(contacts)

class App extends Component {
  state = {
    selected: []
  }

  addSelected = id => {
    this.setState({
      selected: [...this.state.selected, id]
    }) 
  }

  deleteSelected = id => {
    this.setState({
      selected: this.state.selected.filter(userId => userId !== id)
    }) 
  }

  toggleSelected = id => {
    if (this.state.selected.includes(id)) {
      this.deleteSelected(id)
    } else {
      this.addSelected(id)
    }
  }
  
  render() {
    const {selected} = this.state
    return (
      <Router>
        <Container>
          <Navbar selected={selected}/>
          <h1>App</h1>
          <Route exact path="/" component={Home} />
          <Route path="/users" render={props => {
            return (
              <Users 
                {...props} 
                users={contacts} 
                selected={selected}
                toggleSelected={this.toggleSelected}
              />
            )
          }} />
        </Container>
      </Router>  
    );
  }
}

export default App;
