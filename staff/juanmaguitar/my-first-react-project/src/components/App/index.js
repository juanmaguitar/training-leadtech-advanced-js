import React, { Component } from "react"

import Header from '../Header/'
import Sidebar from '../Sidebar/'
import Main from '../Main/'
import Footer from '../Footer/'

import { getUsers } from '../../services/'

import './index.css'

const titleApp = "My Super Cool Header 😎"
const menuItems = ['Home', 'About', 'Contact']

class App extends Component {
  state = {
    title: titleApp,
    users: []
  }

  changeTitle = () => {
    this.setState({
      title: 'New Title'
    })
  }

  async componentDidMount() {
    const users = await getUsers()
    setTimeout(() => {
      this.setState({ users }) 
    }, 2000)
    
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.changeTitle}>change Title</button>
        <Header title={this.state.title} menu={menuItems} />
        <Sidebar />
        <Main users={this.state.users}/>
        <Footer />
      </div>
    )
  }
}

export default App
