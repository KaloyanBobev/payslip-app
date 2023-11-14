import React from "react";

import Nav from "react-bootstrap/Nav";

export default function Navigation() {
  return (
    <>
      <Nav defaultActiveKey="/" className="flex-row">
        <Nav.Link href="/">Login</Nav.Link>
        <Nav.Link href="payslip">Payslip</Nav.Link>
        <Nav.Link href="download">Download Your Payslips</Nav.Link>
        <Nav.Link href="calendar">Calendar</Nav.Link>
        <Nav.Link href="details">Details</Nav.Link>
        <Nav.Link href="security">Security Details</Nav.Link>
      </Nav>

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
        </ul>
      </nav>
      <Outlet /> */}
    </>
  );
}
