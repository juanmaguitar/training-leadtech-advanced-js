import React, {Component} from 'react';
import axios from 'axios'
const getUrl = id => `https://jsonplaceholder.typicode.com/users/${id}`

class User extends Component {

  state = {
    user: {}
  }
  async componentDidMount() {
    const { match: { params: { id }} } = this.props
    const url = getUrl(id)
    const {data: user} = await axios.get(url)
    this.setState({user})

  }

  componentWillUnmount() {
    console.log('bye!')
  }

  render() {
    const {name, email} = this.state.user
    return (
      <div>
        <h1>User</h1>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    )
  } 
}




export default User
