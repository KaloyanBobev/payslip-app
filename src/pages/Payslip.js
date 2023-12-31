// import the base code from React library
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import Navigation from "./Navigation";

export default function Payslip() {
  const { userId } = useParams();
  // State to store the data from the JSON file
  const [employeeData, setEmployeeData] = useState(null);
  const [payslipData, setPayslipData] = useState(null);

  useEffect(() => {
    // Make a GET request to the external JSON file
    axios
      .get("/employee.json")
      .then((response) => {
        // Handle the successful response
        setEmployeeData(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching employee data:", error);
      });
    axios
      .get("/payslipInfo.json")
      .then((response) => {
        // Handle the successful response
        setPayslipData(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching paislip data:", error);
      });
  }, []); // Empty dependency array ensures the effect runs only once (on mount)

  //JSX part printing all the infomration for the employee
  return (
    <>
      <Navigation />
      {/* Render your employee form with the data from the JSON file */}
      <div className="container">
        {employeeData && payslipData && (
          <>
            <h1 className="">
              Payslip for {employeeData[userId - 1].first_name}{" "}
              {employeeData[userId - 1].second_name} for Monthly period 7
              2023/2024
            </h1>
            <div className="container">
              <div className="row bg-primary">
                <div className="col-md-2 col-xs-4">Employee ID</div>
                <div className="col-md-2 col-xs-4">Employee Names</div>
                <div className="col-md-2 col-xs-4">Employer</div>
                <div className="col-md-2 col-xs-4">PAYE reference</div>
                <div className="col-md-2 col-xs-4">Pay date</div>
                <div className="col-md-2 col-xs-4">Tax period</div>
              </div>
              <div className="row">
                <div className="col-md-2 col-xs-4 border border-primary">
                  {employeeData[userId - 1].id}
                </div>
                <div className="col-md-2 col-xs-4 border border-primary">
                  {employeeData[userId - 1].first_name}{" "}
                  {employeeData[userId - 1].second_name}
                </div>
                <div className="col-md-2 col-xs-4 border border-primary">
                  {payslipData[userId - 1].Employer}
                </div>
                <div className="col-md-2 col-xs-4 border border-primary">
                  {payslipData[userId - 1].PAYEReference}
                </div>
                <div className="col-md-2 col-xs-4 border border-primary">
                  27/10/2023
                </div>
                <div className="col-md-2 col-xs-4 border border-primary">7</div>
              </div>
              <div className="row clearfix bg-primary">
                <div className="col-md-2 col-xs-4 ">Payments</div>
                <div className="col-md-2 col-xs-4 float-end">Value</div>
                <div className="col-md-2 col-xs-4">Deduction</div>
                <div className="col-md-2 col-xs-4 float-end">Value</div>
                <div className="col-md-2 col-xs-4">Year to date</div>
                <div className="col-md-2 col-xs-4 float-end">Value</div>
              </div>
              <div className="row clearfix border border-primary">
                <div className="col-md-2 col-xs-4 ">
                  <div>Salary</div>
                  <div>Total</div>
                </div>
                <div className="col-md-2 col-xs-4 float-end">
                  <div>£2010.23</div>
                  <div>£2010.23</div>
                </div>
                <div className="col-md-2 col-xs-4">
                  <div>Tax</div>
                  <div>Employee's NI</div>
                  <div>Workplace Pension EES</div>
                  <div>Total</div>
                </div>
                <div className="col-md-2 col-xs-4 float-end">
                  <div>£352.23</div>
                  <div>£123.23</div>
                  <div>£201.11</div>
                  <div>£682.57</div>
                </div>
                <div className="col-md-2 col-xs-4 ">
                  <div>Gross taxable</div>
                  <div>Tax</div>
                  <div>Employee's NI</div>
                  <div>Employer's NI</div>
                </div>
                <div className="col-md-2 col-xs-4 h-50 float-end ">
                  <div>£18203.78</div>
                  <div>£2589.56</div>
                  <div>£850.13</div>
                  <div>1356.45</div>
                </div>
              </div>
              <div className="row">
                <span className="col-md-4 border">
                  <div className="row">
                    <div className="col-md-6 col-xs-4 bg-primary">
                      {" "}
                      Tax Code
                    </div>
                    <div className="col-md-6 col-xs-4 border border-primary">
                      {" "}
                      1257L
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-xs-4 bg-primary">
                      NI Number
                    </div>
                    <div className="col-md-6 col-xs-4 border border-primary">
                      {employeeData[userId-1].NINO}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-xs-4 bg-primary">
                      NI Category
                    </div>
                    <div className="col-md-6 col-xs-4 border border-primary">
                      {" "}
                      A
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-xs-4 bg-primary">
                      HMRC pay ID
                    </div>
                    <div className="col-md-6 col-xs-4 border border-primary">
                      {" "}
                      1933
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-xs-4 bg-primary">
                      Departament
                    </div>
                    <div className="col-md-6 col-xs-4 border border-primary">
                      {" "}
                      IT Departament
                    </div>
                  </div>
                </span>
                <span className="col-md-4 border border-primary">
                  <div className="row  bg-primary">Other payments</div>
                  <div className="row b">
                    <div className="col-md-6 col-xs-4">Employer's NI</div>
                    <div className="col-md-6 col-xs-4">£178.12</div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-xs-4">
                      Workplace pansion ESR
                    </div>
                    <div className="col-md-6 col-xs-4">£55.12</div>
                  </div>
                </span>
              </div>
              <div className="row border border-primary">
                <div className="col-md-6 col-xs-4">Net Pay</div>
                <div className="col-md-6 col-xs-4 ">
                  <b>£2012.33</b>
                </div>
              </div>
            </div>
          </>
        )}

        {/* <div className="container">
          <div className="row bg-primary">
            <div className="col-md-2 col-xs-4">Employee ID</div>
            <div className="col-md-2 col-xs-4">Employee Names</div>
            <div className="col-md-2 col-xs-4">Employer</div>
            <div className="col-md-2 col-xs-4">PAYE reference</div>
            <div className="col-md-2 col-xs-4">Pay date</div>
            <div className="col-md-2 col-xs-4">Tax period</div>
          </div>
          <div className="row">
            <div className="col-md-2 col-xs-4 border border-primary">125125</div>
            <div className="col-md-2 col-xs-4 border border-primary">John Smith</div>
            <div className="col-md-2 col-xs-4 border border-primary">UWL</div>
            <div className="col-md-2 col-xs-4 border border-primary">120/123dsss</div>
            <div className="col-md-2 col-xs-4 border border-primary">27/10/2023</div>
            <div className="col-md-2 col-xs-4 border border-primary">7</div>
          </div>
          <div className="row clearfix bg-primary">
            <div className="col-md-2 col-xs-4 ">Payments</div>
            <div className="col-md-2 col-xs-4 float-end">Value</div>
            <div className="col-md-2 col-xs-4">Deduction</div>
            <div className="col-md-2 col-xs-4 float-end">Value</div>
            <div className="col-md-2 col-xs-4">Year to date</div>
            <div className="col-md-2 col-xs-4 float-end">Value</div>
          </div>
          <div className="row clearfix border border-primary">
            <div className="col-md-2 col-xs-4 ">
              <div>Salary</div>
              <div>Total</div>
            </div>
            <div className="col-md-2 col-xs-4 float-end">
              <div>£2010.23</div>
              <div>£2010.23</div>
            </div>
            <div className="col-md-2 col-xs-4">
              <div>Tax</div>
              <div>Employee's NI</div>
              <div>Workplace Pension EES</div>
              <div>Total</div>
            </div>
            <div className="col-md-2 col-xs-4 float-end">
              <div>£352.23</div>
              <div>£123.23</div>
              <div>£201.11</div>
              <div>£682.57</div>
            </div>
            <div className="col-md-2 col-xs-4 ">
              <div>Gross taxable</div>
              <div>Tax</div>
              <div>Employee's NI</div>
              <div>Employer's NI</div>
            </div>
            <div className="col-md-2 col-xs-4 h-50 float-end ">
              <div>£18203.78</div>
              <div>£2589.56</div>
              <div>£850.13</div>
              <div>1356.45</div>
            </div>
          </div>
          <div className="row">
            <span className="col-md-4 border">
              <div className="row">
                <div className="col-md-6 col-xs-4 bg-primary"> Tax Code</div>
                <div className="col-md-6 col-xs-4 border border-primary"> 1257L</div>
              </div>
              <div className="row">
                <div className="col-md-6 col-xs-4 bg-primary">NI Number</div>
                <div className="col-md-6 col-xs-4 border border-primary"> SE012688A</div>
              </div>
              <div className="row">
                <div className="col-md-6 col-xs-4 bg-primary">NI Category</div>
                <div className="col-md-6 col-xs-4 border border-primary"> A</div>
              </div>
              <div className="row">
                <div className="col-md-6 col-xs-4 bg-primary">HMRC pay ID</div>
                <div className="col-md-6 col-xs-4 border border-primary"> 1933</div>
              </div>
              <div className="row">
                <div className="col-md-6 col-xs-4 bg-primary">Departament</div>
                <div className="col-md-6 col-xs-4 border border-primary">
                  {" "}
                  IT Departament
                </div>
              </div>
            </span>
            <span className="col-md-4 border border-primary">
              <div className="row  bg-primary">Other payments</div>
              <div className="row b">
                <div className="col-md-6 col-xs-4">Employer's NI</div>
                <div className="col-md-6 col-xs-4">£178.12</div>
              </div>
              <div className="row">
                <div className="col-md-6 col-xs-4">Workplace pansion ESR</div>
                <div className="col-md-6 col-xs-4">£55.12</div>
              </div>
            </span>
          </div>
          <div className="row border border-primary">
            <div className="col-md-6 col-xs-4">Net Pay</div>
            <div className="col-md-6 col-xs-4 ">
              <b>£2012.33</b>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </>
  );
}
