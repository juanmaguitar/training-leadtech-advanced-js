import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos'
const urlUsers = 'https://jsonplaceholder.typicode.com/users'

// export const getTodos = () => { axios.get(url).then(({ data }) => data)}
export const getTodos = async () => {
  const { data } = await axios.get(url)
  return data
}

export const getUsers = async () => {
  const { data } = await axios.get(urlUsers)
  return data
}

export const getTodosByUser = async userId => {
  const todosList = await getTodos()
  const user = await getUserById(userId)
  const userTodos = todosList.filter(todo => todo.userId === userId)
  const tenUserTodos = userTodos.slice(0, 10)

  user.map((item, i) => {
    document.write(`<p>
                        <strong>Name</strong>: ${item.name}
                        <strong>Username</strong>: ${item.username}
                    </p>`)
  })
  tenUserTodos.map((item, i) => {
    document.write(`<p>
                        <strong>Title</strong>: ${item.title}
                        <strong>Completed</strong>: ${item.completed}
                    </p>`)
  })

  return { tenUserTodos, user }
}

export const getUserById = async id => {
  const userList = await getUsers()
  const user = userList.filter(item => item.id === id)
  return user
}
