import { get } from 'axios'
import { usersUrl, todosUrl } from '../constans'

const getData = url => get(url).then(({ data }) => data)

export const getTodos = getData.bind(null, todosUrl)
export const getUsers = getData.bind(null, usersUrl)

// otra forma de expresar una promesa
export const getTodosOtherForm = async () => {
  const { data } = await get(todosUrl)
  return data
}

export const getTodosByUser = async id => {
  const todosList = await getTodos()
  const isTodoFromUser = ({ userId }) => userId === id
  const userTodos = todosList.filter(isTodoFromUser)
  return userTodos.slice(0, 10)
}
