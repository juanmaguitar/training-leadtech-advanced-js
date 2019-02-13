import React, { Component } from 'react';

class Form extends Component {

  state = {
    username: '',
    termsAndConditions: false
  }

  handleChange = ev => {
    const {name, value, type, checked} = ev.target
    this.setState({ [name]: type === 'checkbox' ? checked : value })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    console.log(this.state)
  }

  render() {
    const {username, termsAndConditions} = this.state
    const {handleSubmit, handleChange} = this
    return (
      <form action="" onSubmit={handleSubmit}>
        <input 
          value={username} 
          type="text" 
          name="username"
          onChange={handleChange} 
        />
        <input 
          checked={termsAndConditions} 
          type="checkbox" 
          name="termsAndConditions"
          onChange={handleChange} 
        />
        <button>Send!</button>
      </form>
    )
  }
}

export default Form;
