import React from 'react'
import {Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const _Navbar = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand><Link to="/">React-Bootstrap</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link to="/popular">Popular</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default _Navbar