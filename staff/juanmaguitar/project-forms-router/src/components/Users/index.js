import React, {Component} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

const URL_USERS = `https://jsonplaceholder.typicode.com/users`

class Users extends Component {

  state = {
    users: []
  }
  
  async componentDidMount() {
    const {data: users} = await axios.get(URL_USERS)
    this.setState({users})
  }

  render() {
    const {users} = this.state
    return (
      <div>
        <h1>List Users</h1>
        <ul>
          {
            users.map(({id, name}) => <li key={id}><Link to={`/user/${id}`}>{name}</Link></li> )
          }
        </ul>
      </div>
    )
  } 
}

export default Users
