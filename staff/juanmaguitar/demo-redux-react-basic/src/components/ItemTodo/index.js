import React from "react"
import { connect } from "react-redux"
import { toggleTodo } from "../../actions/"

const ItemTodo = ({toggleTodo, index, todo: { text, completed}}) => {

  const handleChange = e => {
    toggleTodo(index)
  }

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={handleChange}/>
      {text}
    </li>
  )
}

export default connect(
  null,
  { toggleTodo }
)(ItemTodo)
