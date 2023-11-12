import React from "react";

export default function Payslip() {
  return (
    <div className="payslip-container">
      <h1>Payslip for John Smith for Monthly period 7 2023/2024</h1>
      <div className="employee-info-heading">
        <div>Employee ID</div>
        <div>Employee Names</div>
        <div>Employer</div>
        <div>PAYE reference</div>
        <div>Pay date</div>
        <div>Tax period</div>
      </div>
      <div className="employee-info">
        <div>125125</div>
        <div>John Smith</div>
        <div>UWL</div>
        <div>120/123dsss</div>
        <div>27/10/2023</div>
        <div>7</div>
      </div>
    </div>
  );
}
