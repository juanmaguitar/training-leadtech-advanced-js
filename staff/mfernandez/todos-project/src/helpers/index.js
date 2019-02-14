import { getUsers, getTodosByUser } from '../services'

export const getHtmlUsers = async () => {
  let userList = await getUsers()
  userList = userList.map(
    ({ name, id }) => `<option value='${id}'>${name}</option>`
  )
  userList.unshift('<option value="">Select a user</option>')
  return userList
}

export const getHtmlListTodosByUser = async id => {
  let userTodosList = await getTodosByUser(id)
  const checkCompletedTodo = completed => {
    return completed ? 'list-group-item-success' : ''
  }
  return userTodosList.todos.map(
    ({ completed, title }) =>
      `<li class='list-group-item ${checkCompletedTodo(
        completed
      )}'>${title}</li>`
  )
}
