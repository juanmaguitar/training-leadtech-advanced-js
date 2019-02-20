import React, { Component } from "react";
import { getUsers } from "../../services";

import Header from "../Header/";
import Sidebar from "../Sidebar/";
import Main from "../Main/";
import Footer from "../Footer/";

import "./index.css";

const titleApp = "My header";
const menuItems = ["Home", "About", "Contact"];

// components created with Class has state and has access to lifecycle
class App extends Component {
  state = {
    title: titleApp,
    users: []
  };

  async componentDidMount() {
    const users = await getUsers();
    this.setState({ users }); // same as {users: users}
  }

  changeTitle = () => {
    this.setState({
      title: "New title"
    });
  };

  render() {
    return (
      <div className="App">
        <Header title={this.state.title} menu={menuItems} />
        <button onClick={this.changeTitle}>Change Title</button>
        <Sidebar />
        <Main users={this.state.users} />
        <Footer />
      </div>
    );
  }
}

export default App;
