import React from 'react'

// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom";

const _Navbar = () => (    
    <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link to="/">React-Bootstrap</Link></Navbar.Brand>
        <Link to="/Users">Users</Link>
    </Navbar>
)

export default _Navbar