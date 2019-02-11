import { getTodos, getUsers, getTodosByUser, getUserById } from './services/getData'

getTodos().then(console.log)
getUsers().then(console.log)
getTodosByUser(8).then(console.log)
getUserById(8).then(console.log)
