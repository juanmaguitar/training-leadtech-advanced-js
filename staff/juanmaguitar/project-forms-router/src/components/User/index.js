import React, {Component} from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
import {getTodosByUser} from '../../services/'

const getUrl = id => `https://jsonplaceholder.typicode.com/users/${id}`

class User extends Component {

  state = {
    user: {},
    todos: []
  }
  async componentDidMount() {
    const { match: { params: { id }} } = this.props
    const url = getUrl(id)
    const {data: user} = await axios.get(url)
    const todos = await getTodosByUser(id)
    this.setState({user, todos})
  }

  componentWillUnmount() {
    console.log('bye!')
  }

  render() {
    const {user: {name, email}, todos} = this.state
    return (
      <div>
        <h1>User</h1>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <ul>
          {
            todos.map(({title, id}) => <li><Link to={`/todo/${id}`}>{title}</Link></li>)
          }
        </ul>
        <p><Link to="/users"><span role="img" aria-label="back to users">👈</span>  back to users list</Link> </p>
      </div>
    )
  } 
}




export default User
