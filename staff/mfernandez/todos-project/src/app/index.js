import { getHtmlUsers, getHtmlListTodosByUser } from '../helpers'
import { getTodos } from '../services'
import $ from 'jquery'

getTodos().then(console.log)
getHtmlUsers().then(console.log)
getHtmlListTodosByUser(1).then(console.log)

;(async () => {
  $('#users').html(await getHtmlUsers())
})()

$('#users').on('change', async e => {
  const { value } = e.target
  $('#todos-user-list').html(await getHtmlListTodosByUser(+value))
})
