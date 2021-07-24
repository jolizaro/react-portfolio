import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {

  return (
    <header>
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
      
      <LinkContainer to="/">
        <Navbar.Brand>Joliza Mateo</Navbar.Brand>
      </LinkContainer>
      <div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
   
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link id="yellow-text">About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/portfolio">
            <Nav.Link id="yellow-text">Portfolio</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link id="yellow-text">Contact Me</Nav.Link>
          </LinkContainer>
          
        </Nav>
     
      </Navbar.Collapse>
      </div>
    </Container>
    </Navbar>
    </header>
  )
}

export default Header
