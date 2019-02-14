import React, { Component } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Main from '../Main';
import Footer from '../Footer';
import './index.css'
import {getUsers} from '../../services'

const menuItems = ['Home', 'About', 'Contact']

class App extends Component {
  state = {
    title: "My Super Header",
    users: []
  }

  async componentDidMount() {
    const users = await getUsers()
    this.setState({users})
  }

  changeTitle = () => {
    this.setState({
      title: "New title"
    })
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.title} menuItems={menuItems} />
        <button onClick={this.changeTitle}>Change Title</button>
        <Sidebar/>
        <Main userList={this.stats.users}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
