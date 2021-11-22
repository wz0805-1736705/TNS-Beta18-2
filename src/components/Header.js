// to use JSX, import:
import React from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
// import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="Copy of TNS-logo-dark.png"
            width="125"
            height="35"
            className="d-inline-block mt-1"
          />
        </Navbar.Brand>

        <Nav className="me-auto">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About us</NavLink>
          <NavLink href="/neighborhood">Neighborhood</NavLink>
          {/* <NavLink href="/quiz">Quiz</NavLink> */}
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <NavLink href="/signIn">Sign In</NavLink>
          <NavLink href="/signUp">Sign Up</NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

// in react html, instead of class, use className instead
