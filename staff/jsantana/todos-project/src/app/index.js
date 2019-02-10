import $ from 'jquery'
import { getHtmlOptionsUsers, getHtmlListItemsByUser } from './helpers'
  ;(async () => {
  const htmlOptionsUsers = await getHtmlOptionsUsers()
  $('#users-list').html(htmlOptionsUsers)
})()

$('#users-list').on('change', async e => {
  const { value: idUser } = e.target
  const htmlListTodos = await getHtmlListItemsByUser(idUser)
  $('#list-todos').html(htmlListTodos)
})
