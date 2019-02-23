import React, {Component} from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

import { Link } from "react-router-dom";

class _Navbar extends Component {
  state = {
    query: '',
  }

  handleInputChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit = event => event.preventDefault()

  render() {
    const {query} = this.state
    const {handleInputChange, handleSubmit} = this

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          React Movies
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/popular">
                Popular
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/now-playing">
                Now Playing
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/top-rated">
                Top Rated
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/upcoming">
                Upcoming
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline onSubmit={handleSubmit}>
            <FormControl
              type="text"
              placeholder="Search"
              name="query"
              className="mr-sm-2"
              value={query}
              onChange={handleInputChange}
            />
            <Button variant="outline-success" as={Link} to={`/search/q/${query}`}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default _Navbar;
