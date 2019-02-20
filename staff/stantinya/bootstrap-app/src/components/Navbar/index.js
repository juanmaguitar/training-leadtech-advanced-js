import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const _Navbar = ({ selected }) => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand>
      <Link to="/">React-Bootstrap</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link to="/users">Users</Link>
      </Nav>
      {selected.length} users selected
    </Navbar.Collapse>
  </Navbar>
);

const mapStateToProps = ({ selected }) => ({ selected });

export default connect(mapStateToProps)(_Navbar);
