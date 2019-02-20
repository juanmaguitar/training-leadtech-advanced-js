import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from 'react-bootstrap';

import Navbar from '../Navbar/'
import Home from '../Home/'
import Users from '../Users/'


class App extends Component {
  state = {
    selected: []
  }

  toggleSelected = idSelection => {

    const {selected} = this.state

    if (selected.includes(idSelection)) {
      this.setState({
        selected: selected.filter(id => id !== idSelection)
      }) 
    } else {
      this.setState({
        selected: [...selected, idSelection]
      }) 
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
