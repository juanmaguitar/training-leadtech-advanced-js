import React, { Component } from 'react';
import {Router, Route, Link} from 'react-router'
import Form from '../Form/'

class App extends Component {
  render() {
    return (
      <div>
        <h1>My App</h1>
        <Form /> 

      </div>
    )
  }
}

export default App;
