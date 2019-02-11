import React, { Component } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ListItem from '../ListItem'

import './index.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Sidebar />
        <ListItem />
      </div>
    )
  }
}

export default App
