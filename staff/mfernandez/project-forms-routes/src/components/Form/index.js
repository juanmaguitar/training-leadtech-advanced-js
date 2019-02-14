import React, { Component } from "react";

class Form extends Component {
  state = {
    userName: '',
    termsAndConditions: false,
    error: ''
  };

  handleChange = (event) => {
    // console.log(target)
    const {type, name, value, checked} = event.target
    const parseValue = (type === "checkbox") ? checked : value
    this.setState({[name]: parseValue})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {userName, termsAndConditions} = this.state
    if (!termsAndConditions) alert('Check terms!!')
    else alert(userName)
  }

  render() {
    const {userName} = this.state
    const {handleChange, handleSubmit} = this
    return (
      <div>
        <h1>My Form!</h1>
        <form action="" onSubmit={handleSubmit}>
          <input 
            type = "text"
            name = "userName"
            value = {userName} 
            onChange = {handleChange} />
          <input 
            type = "checkbox"
            name = "termsAndConditions"
            onChange = {handleChange} /> Check terms!
          <button>Send!</button>
        </form>
      </div>
    );
  }
}

export default Form;
