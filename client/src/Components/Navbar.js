import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavbarHome() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Product</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
            <Nav.Link href="#pricing">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHome;
