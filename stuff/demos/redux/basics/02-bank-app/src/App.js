import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";

import {setWithdraw} from './actions'
import {store} from './store'

class App extends Component {
  render() {
    const { totalAmount, username } = store.getState();
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button onClick={dispatchBtnAction} data-amount="10000">WITHDRAW $10,000</button>
          <button onClick={dispatchBtnAction} data-amount="5000">WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

function dispatchBtnAction(e) {
  const tech = e.target.dataset.amount;
  const action = setWithdraw(tech)
  store.dispatch(action);
}

export default App;
