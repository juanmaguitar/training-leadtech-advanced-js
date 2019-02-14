import React, {Component} from "react"

import "./index.css"

import Counter from "../Counter/"

// const Main = () => (
//   <div className="Main">
//     <h1>Main</h1>
//     <Counter />
//   </div>
// )

class Main extends Component {

  render() {
    const {users} = this.props
    return (
      <div className="Main">
        <h1>Main</h1>
        <Counter />
        <ul className="Main-menu">
        {
          users.map(({name}, index) => (
            <li key={index} className="Main-menu-item">{name}</li>
          ))
        }
      </ul>
      </div>
    )
  }
}

export default Main
