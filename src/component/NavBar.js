import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>EcomDashboard</Navbar.Brand>
          {/* create link for pages */}
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/addproduct" className="LinkStyle">AddProduct</Nav.Link>
          <Nav.Link as={Link} to="/updateproduct" className="LinkStyle">UpdateProduct</Nav.Link>
          <Nav.Link as={Link} to="/login" className="LinkStyle">Login</Nav.Link>
          <Nav.Link as={Link} to="/register" className="LinkStyle">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
