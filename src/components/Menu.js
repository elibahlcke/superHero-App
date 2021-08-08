import React from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';
import reactlogo from '../images/logo.png'
import '../style/menu.css';



export default function Menu() {
  
  return (
    <Container>
        <Navbar bg="primary" expand="lg" variant="dark">
        <Navbar.Brand href="/">
        <img
        alt=""
        src={reactlogo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      MY TEAM

    </Navbar.Brand>

    <Button id="btn" clasName="align-right" variant="outline-light" onClick={() => {
        localStorage.removeItem('token');
        window.location.reload();
    }}>Log out</Button>

  </Navbar>
</Container>
  );
}
