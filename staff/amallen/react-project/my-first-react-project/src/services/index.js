import axios from 'axios'
import { urlTodos, urlUsers } from '../constants'

export const getData = async url => {
  const { data } = await axios.get(url)
  return data
}

export const getTodos = getData.bind(null, urlTodos)
export const getUsers = getData.bind(null, urlUsers)

export const getTodosByUser = async id => {
  const toDoList = await getTodos()
  const isTodoFromUser = ({ userId }) => userId === id
  const userTodos = toDoList.filter(isTodoFromUser)
  return userTodos
}

export const getUserById = async userId => {
  const userById = await getUsers()
  const userIdById = ({ id }) => id === userId
  const userFiltred = userById.filter(userIdById)
  return userFiltred
}
