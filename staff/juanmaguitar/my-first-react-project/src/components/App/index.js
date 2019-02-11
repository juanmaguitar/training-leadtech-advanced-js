import React, { Component } from "react"

import Header from '../Header/'
import Sidebar from '../Sidebar/'
import Main from '../Main/'
import Footer from '../Footer/'

import './index.css'

const titleApp = "My Super Cool Header 😎"
const menuItems = ['Home', 'About', 'Contact']

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={titleApp} menu={menuItems} />
        <Sidebar />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
