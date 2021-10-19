import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const {user,logOut} =useAuth()
    return (
        <>
  
  <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">Bio-Medicare Clinic</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
      <Nav.Link  as={Link} to="/service">Services</Nav.Link>
      <Nav.Link as={Link} to="/doctor">Doctors</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      {user?.email?
        <button onClick={logOut} className="btn btn-warning">Log out</button>:
        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
   
    </Container>
  </Navbar>
</>
    );
};

export default Header;