import axios from 'axios'

const urlTodos = 'https://jsonplaceholder.typicode.com/todos'

const usersUrl = 'https://jsonplaceholder.typicode.com/users'

// export const getTodos = () => axios.get(url).then(({ data }) => data)

export const getTodos = async () => {
  const { data } = await axios.get(urlTodos)
  return data
}

export const getUsers = async () => {
  const { data } = await axios.get(usersUrl)
  return data
}

export const getTodosByUser = async id => {
  const todosList = await getTodos()
  const isTodoFromUser = ({ userId }) => userId === id
  const userTodos = todosList.filter(isTodoFromUser)
  return userTodos.slice(0, 10)
}

export const getUserById = async userId => {
  const users = await getUsers()
  const isMyUser = ({ id }) => userId === id
  return users.filter(isMyUser)
}

export const getTodosByUserWithUserInfo = async id => {
  const user = await getUserById(id)
  const todos = await getTodosByUser(id)
  return { user, todos }
}
