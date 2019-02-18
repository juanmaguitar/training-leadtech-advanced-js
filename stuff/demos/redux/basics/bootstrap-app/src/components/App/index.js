import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from 'react-bootstrap';

import Navbar from '../Navbar/'
import Home from '../Home/'
import Users from '../Users/'

import store from '../../store'
import {addUserSelection, removeUserSelection} from '../../actions'

class App extends Component {
  
  toggleSelected = id => {

    const {selected} = store.getState()
    const isAlreadySelected = selected.includes(id)
    
    if (isAlreadySelected) store.dispatch(removeUserSelection(id))
    else store.dispatch(addUserSelection(id))
    
  }
  
  render() {
    const {selected, contacts} = store.getState()
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
