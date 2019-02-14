import React, { Component } from "react";
import "./index.css";

class Counter extends Component {
  state = {
    counter: 0
  }

  increaseCounter = () => {
    console.log('increasing counter')
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decreaseCounter = () => {
    console.log('decreasing counter')
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.increaseCounter}>increase</button>
        <button onClick={this.decreaseCounter}>decrease</button>
      </div>
    )
  }
}

export default Counter;
