import { getUsers, getTodosByUser } from '../services'

export const getHtmlListItemsByUser = async userId => {
  const todos = await getTodosByUser(+userId)
  const getSuccessClassName = completed =>
    completed ? 'list-group-item-success' : ''

  return todos
    .map(
      ({ title, completed }) =>
        `<li class="list-group-item ${getSuccessClassName(
          completed
        )}">${title}</li>`
    )
    .join('')
}

export const getHtmlOptionsUsers = async () => {
  const users = await getUsers()
  return users
    .map(({ name, id }) => `<option value="${id}">${name}</option>`)
    .join('')
}
