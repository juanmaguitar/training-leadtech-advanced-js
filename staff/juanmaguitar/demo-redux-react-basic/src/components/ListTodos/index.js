import React from "react"
import { connect } from "react-redux"

import ItemTodo from "../ItemTodo"

const ListTodos = ({ todos}) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <ItemTodo key={index} index={index} todo={todo} />
      ))}
    </ul>
  )
}

const mapStateToProps = ({ todos }) => ({ todos })

export default connect(mapStateToProps)(ListTodos)
