import axios from 'axios'
import { urlTodos, urlUsers } from '../constants'

// Make a request for a user with a given ID
// export function getTodos () {
//     axios.get(url)
//         .then(({data}) => data)
// }

// Crear archivo en carpeta services/ modulo q devuelva la promesa del axios

// export const getTodos = () => axios.get(url).then(({ data }) => data)

// export const getTodos = async () => {
//   const { data } = await axios.get(urlTodos)
//   return data
// }

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

export const getUserById = async id => {
  const userById = await getUsers()
  const userIdById = ({ userId }) => userId === id
  const userFiltred = userById.filter(userIdById)
  return userFiltred
}
