import React, { Component } from 'react';

import Form from '../Form/'
import ListTodos from '../ListTodos/'

class App extends Component {
  
  render() {
    return (
      <div>
        <h1>App</h1>
        <Form />
        <ListTodos />
      </div>
    );
  }
}

export default App;
