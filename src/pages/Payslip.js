import React from "react";

export default function Payslip() {
  return (
    <div className="container">
      <h1 className="">
        Payslip for John Smith for Monthly period 7 2023/2024
      </h1>
      <div className="container">
        <div className="row bg-primary">
          <div className="col-md-2">Employee ID</div>
          <div className="col-md-2">Employee Names</div>
          <div className="col-md-2">Employer</div>
          <div className="col-md-2">PAYE reference</div>
          <div className="col-md-2">Pay date</div>
          <div className="col-md-2">Tax period</div>
        </div>
        <div className="row">
          <div className="col-md-2 border border-primary">125125</div>
          <div className="col-md-2 border border-primary">John Smith</div>
          <div className="col-md-2 border border-primary">UWL</div>
          <div className="col-md-2 border border-primary">120/123dsss</div>
          <div className="col-md-2 border border-primary">27/10/2023</div>
          <div className="col-md-2 border border-primary">7</div>
        </div>
        <div className="row clearfix bg-primary">
          <div className="col-md-2 ">Payments</div>
          <div className="col-md-2 float-end">Value</div>
          <div className="col-md-2">Deduction</div>
          <div className="col-md-2 float-end">Value</div>
          <div className="col-md-2">Year to date</div>
          <div className="col-md-2 float-end">Value</div>
        </div>
        <div className="row clearfix border border-primary">
          <div className="col-md-2 ">
            <div>Salary</div>
            <div>Total</div>
          </div>
          <div className="col-md-2 float-end">
            <div>£2010.23</div>
            <div>£2010.23</div>
          </div>
          <div className="col-md-2">
            <div>Tax</div>
            <div>Employee's NI</div>
            <div>Workplace Pension EES</div>
            <div>Total</div>
          </div>
          <div className="col-md-2 float-end">
            <div>£352.23</div>
            <div>£123.23</div>
            <div>£201.11</div>
            <div>£682.57</div>
          </div>
          <div className="col-md-2 ">
            <div>Gross taxable</div>
            <div>Tax</div>
            <div>Employee's NI</div>
            <div>Employer's NI</div>
          </div>
          <div className="col-md-2 h-50 float-end ">
            <div>£18203.78</div>
            <div>£2589.56</div>
            <div>£850.13</div>
            <div>1356.45</div>
          </div>
        </div>
        <div className="row">
          <span className="col-md-4 border">
            <div className="row">
              <div className="col-md-6 bg-primary"> Tax Code</div>
              <div className="col-md-6 border border-primary"> 1257L</div>
            </div>
            <div className="row">
              <div className="col-md-6 bg-primary">NI Number</div>
              <div className="col-md-6 border border-primary"> SE012688A</div>
            </div>
            <div className="row">
              <div className="col-md-6 bg-primary">NI Category</div>
              <div className="col-md-6 border border-primary"> A</div>
            </div>
            <div className="row">
              <div className="col-md-6 bg-primary">HMRC pay ID</div>
              <div className="col-md-6 border border-primary"> 1933</div>
            </div>
            <div className="row">
              <div className="col-md-6 bg-primary">Departament</div>
              <div className="col-md-6 border border-primary">
                {" "}
                IT Departament
              </div>
            </div>
          </span>
          <span className="col-md-4 border border-primary">
            <div className="row  bg-primary">Other payments</div>
            <div className="row b">
              <div className="col-md-6">Employer's NI</div>
              <div className="col-md-6">£178.12</div>
            </div>
            <div className="row">
              <div className="col-md-6">Workplace pansion ESR</div>
              <div className="col-md-6">£55.12</div>
            </div>
          </span>
        </div>
        <div className="row border border-primary">
          <div className="col-md-6">Net Pay</div>
          <div className="col-md-6 ">
            <b>£2012.33</b>
          </div>
        </div>
      </div>
    </div>
  );
}
