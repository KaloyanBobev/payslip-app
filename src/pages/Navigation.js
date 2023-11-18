import React from "react";
// import { Link, Outlet } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar bg="primary" expand="md">
        <Container>
          <Navbar.Brand href="#home">Navbar Brand</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link exact path href="/">
                Login
              </Nav.Link>
              <Nav.Link href="/payslip">Payslip</Nav.Link>
              <Nav.Link href="/download">Download Your Payslips</Nav.Link>
              <Nav.Link href="/calendar">Calendar</Nav.Link>
              <Nav.Link href="/details">Details</Nav.Link>
              <Nav.Link href="/security">Security Detailss</Nav.Link>

              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Dropdown Item 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Dropdown Item 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Dropdown Item 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Another Item</NavDropdown.Item>
          </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="payslip">Payslip</Link>
          </li>
          <li>
            <Link to="download">Download Your payslips</Link>
          </li>
          <li>
            <Link to="calendar">Calendar</Link>
          </li>
          <li>
            <Link to="details">Details</Link>
          </li>
          <li>
            <Link to="security">Security Questions</Link>
          </li>
        </ul>
      </nav>
      <Outlet />*/}
    </>
  );
}
