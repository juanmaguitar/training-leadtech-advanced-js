import axios from 'axios'
import { todosUrl, usersUrl } from '../constants/appConstants'

const getData = async url => {
  const { data } = await axios.get(url)
  return data
}

export const getTodos = getData.bind(null, todosUrl)
export const getUsers = getData.bind(null, usersUrl)

export const getTodosByUser = async userId => {
  const todosList = await getTodos()
  const todosByUser = todosList.filter(todo => todo.userId === userId)
  const user = await getUserById(userId)
  const limitedTodosByUser = todosByUser.slice(0, 10)
  return { limitedTodosByUser, user }
}

export const getUserById = async userId => {
  const userList = await getUsers()
  const userById = userList.filter(user => user.id === userId)
  return userById
}
