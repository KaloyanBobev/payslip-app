// import the base code from React library
import React from "react";
//import navigation elements
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../img/logo.png";
export default function Navigation() {
  return (
    <>
      <div className="navbar_container">
        <Navbar bg="primary" expand="md">
          <Container>
            {/*here we add a logo of the company */}
            <Navbar.Brand href="/">
              <img src={logo} alt="logo of my company Over 30s " />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/*this will work on small devices like mobile phones and will hide links in hamburger icon */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ">
                {/*the links to the pages in the application*/}
                <Nav.Link exact path href="/">
                  Login
                </Nav.Link>
                <Nav.Link href="/payslip">Payslip</Nav.Link>
                <Nav.Link href="/download">Download Your Payslips</Nav.Link>
                <Nav.Link href="/calendar">Calendar</Nav.Link>
                <Nav.Link href="/details">Details</Nav.Link>
                <Nav.Link href="security">Security Details</Nav.Link>

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
      </div>
    </>
  );
}
