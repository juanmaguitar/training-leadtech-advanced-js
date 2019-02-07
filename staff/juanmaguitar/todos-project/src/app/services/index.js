import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos'

// export const getTodos = () => axios.get(url).then(({ data }) => data)

export const getTodos = async () => {
  const { data } = await axios.get(url)
  return data
}
