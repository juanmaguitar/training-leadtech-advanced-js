import React from "react"
import store from "../../store/"

import ItemTodo from '../ItemTodo'

const ListTodos = () => {
  const {todos} = store.getState()
  return (
    <ul>
      {
        todos.map((todo, index) => <ItemTodo key={index} index={index} todo={todo} />)
      }
    </ul>
  )
}

export default ListTodos