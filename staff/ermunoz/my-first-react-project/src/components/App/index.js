import React, { Component } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import List from '../List';
import Footer from '../Footer';
import {getUsers} from '../../services/getData';
import './index.css';

const menuItems = ['Home', 'About', 'Contact'];
const titleApp = "My Super Cool Header";

class App extends Component {
  state = {
    title: titleApp,
    users: []
  }

  async componentDidMount(){
    const users = await getUsers();
    this.setState({users});
    console.log(users)
  }

  changeTitle = () => {
    this.setState({
      title: 'New Title'
    })
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.title} menu={menuItems}/>
        <button onClick={this.changeTitle}>Change Title</button>
        <Sidebar />
        <List users={this.state.users}/>
        <Footer />
      </div>
    )
  }
}

export default App;
