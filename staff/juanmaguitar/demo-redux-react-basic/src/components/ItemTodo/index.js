import React from "react"
import store from "../../store/"
import { toggleTodo } from "../../actions/"

const ItemTodo = ({index, todo: { text, completed}}) => {

  const handleChange = e => {
    store.dispatch(toggleTodo(index))
  }

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={handleChange}/>
      {text}
    </li>
  )
}

export default ItemTodo
