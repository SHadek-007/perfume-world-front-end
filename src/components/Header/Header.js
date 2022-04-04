import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mb-4">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home" className="fs-3 fw-bold">Perfume World</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto py-4">
              <Link className=" text-decoration-none text-dark me-4" to={'/'}>HOME</Link>
              <Link className=" text-decoration-none text-dark me-4"  to={'/reviews'}>REVIEWS</Link>
              <Link className=" text-decoration-none text-dark me-4"  to={'/dashboard'}>DASHBOARD</Link>
              <Link className=" text-decoration-none text-dark me-4"  to={'/blogs'}>BLOGS</Link>
              <Link className=" text-decoration-none text-dark me-4"  to={'/about'}>ABOUT</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
