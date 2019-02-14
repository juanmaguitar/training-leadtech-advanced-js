import React, { Component } from "react";
import { get } from "axios";
import { Link } from "react-router-dom";

const URL_USERS = `https://jsonplaceholder.typicode.com/users`

class Users extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    const { data: users } = await get(URL_USERS);
    this.setState({ users });
  }

  componentWillUnmount() {
    // funciones al desmontar un componente
  }

  render() {
    const { users } = this.state;
    const getLinksList = users.map(
      ({ id, name }) => <li key={id}><Link to={`user/${id}`}>{name}</Link></li>)

    return (
      <div>
        <h1>Users!</h1>
        <ul>{getLinksList}</ul>
      </div>
    );
  }
}
export default Users;
