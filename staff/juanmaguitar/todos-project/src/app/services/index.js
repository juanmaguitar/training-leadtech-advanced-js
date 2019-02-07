import axios from 'axios'
import { urlTodos, urlUsers } from '../constants'

export const getData = async url => {
  const { data } = await axios.get(url)
  return data
}

export const getTodos = getData.bind(null, urlTodos)
export const getUsers = getData.bind(null, urlUsers)

export const getTodosByUser = async id => {
  const todosList = await getTodos()
  const isTodoFromUser = ({ userId }) => userId === id
  const userTodos = todosList.filter(isTodoFromUser)
  return userTodos.slice(0, 10)
}
