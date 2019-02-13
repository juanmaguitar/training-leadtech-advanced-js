import React, { Component } from "react";
import Header from "../Header/";
import Main from "../Main/";
import Sidebar from "../Sidebar/";
import Footer from "../Footer/";

import './index.css'

const appTitle = 'Super title motherfucker'
const menu = ['Home', 'Contact', 'About us']

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={appTitle} menu={menu} />
        <Sidebar />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
