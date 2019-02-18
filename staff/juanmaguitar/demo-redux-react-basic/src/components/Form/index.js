import React, { Component } from "react"
import { connect } from "react-redux"
import { addTodo } from "../../actions/"

class Form extends Component {
  state = {
    value: ""
  }

  handleSubmit = e => {
    e.preventDefault()
    const { value } = this.state
    const { addTodo } = this.props
    addTodo(value)
  }

  handleChange = e => {
    const { value } = e.target
    this.setState({ value })
  }

  render() {
    const { value } = this.state
    const { handleChange, handleSubmit } = this
    return (
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button>addTodo</button>
      </form>
    )
  }
}

export {Form}
export default connect(
  null,
  { addTodo }
)(Form)
