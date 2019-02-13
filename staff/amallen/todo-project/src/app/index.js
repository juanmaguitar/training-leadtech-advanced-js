import { getTodos, getUsers, getUserById } from './services'

getTodos().then(console.log)
getUsers().then(console.log)
getUserById(3).then(console.log)
