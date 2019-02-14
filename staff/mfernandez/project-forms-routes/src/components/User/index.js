import React, { Component } from "react";
import {get} from 'axios'
import { Link } from "react-router-dom";
import {getTodosByUser} from '../services'

const getUserUrl = id => `https://jsonplaceholder.typicode.com/users/${id}`

class User extends Component {
  state = {
    userData: ''
  }

  async componentDidMount() {
    const { match: {params: {id}} } = this.props;
    const url = getUserUrl(id)
    const {data: userData} = await get(url)
    const todos = await getTodosByUser(id)
    console.log(todos)
    this.setState({userData, todos})
  }

  componentWillUnmount() {
    // funciones al desmontar un componente
  }
  
  render() {
    const {name, email} = this.state.userData
    const todos = this.state.todos

    const getTodosList = todos.map((id, title) => <li key={id}>{title}</li>)

    return (
      <div>
        <h1>Useeerr! => {name} {email}</h1>
        <Link to="/users">Back to Users</Link>
        <ul>
          {getTodosList}
        </ul>
      </div>
    )
  }
}
export default User;
