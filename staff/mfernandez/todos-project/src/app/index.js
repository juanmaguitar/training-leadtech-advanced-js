import { getTodos, getTodosByUser, getUsers, getUserById } from '../services'

getTodos().then(console.log)
getUsers().then(console.log)
getTodosByUser(1).then(console.log)
getTodosByUser(2).then(console.log)
getTodosByUser(3).then(console.log)
getUserById(3).then(console.log)