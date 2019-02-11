import React, { Component } from "react"

import Header from '../Header/'
import Sidebar from '../Sidebar/'
import Main from '../Main/'
import Footer from '../Footer/'

import './index.css'

const titleApp = "My Super Cool Header 😎"
const menuItems = ['Home', 'About', 'Contact']

class App extends Component {
  state = {
    title: titleApp
  }

  changeTitle = () => {
    this.setState({
      title: 'New Title'
    })
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.title} menu={menuItems} />
        <button onClick={this.changeTitle}>change Title</button>
        <Sidebar />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
