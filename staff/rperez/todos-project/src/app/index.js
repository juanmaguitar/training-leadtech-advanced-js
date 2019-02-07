import axios from 'axios'

const todosUrl = 'https://jsonplaceholder.typicode.com/todos'
const usersUrl = 'https://jsonplaceholder.typicode.com/users'

const getDataFromResponse = ({ data }) => data

export const getTodos = () => axios.get(todosUrl).then(getDataFromResponse)

// export const getTodos = async () => {
//   const { data } = await axios.get(url)
//   return data
// }

export const getUsers = () => axios.get(usersUrl).then(getDataFromResponse)
