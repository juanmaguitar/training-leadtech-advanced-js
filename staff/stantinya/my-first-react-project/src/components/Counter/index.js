import React, { Component } from "react";

import "./index.css";

class Counter extends Component {
  state = {
    counter: 0
  };

  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decreaseCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.increaseCounter}>Increase</button>
        <button onClick={this.decreaseCounter}>Decrease</button>
      </div>
    );
  }
}

export default Counter;
