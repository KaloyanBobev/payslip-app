import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav>
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
      <Outlet />
    </>
  );
}
