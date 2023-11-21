import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import Navigation from "./Navigation";
export default function CalendarElement() {
  const [date, setDate] = useState(new Date());
  return (
    <>
{/*
      <Navigation /> */}
      <div className="container">
        <h1>Viewing Holiday Calendar for John Smith</h1>
        <Calendar
          className="center-block"
          onChange={setDate}
          value={date}
          selectRange={true}
          defaultView="decade"
        />
        {date.length > 0 ? (
          <p className="text-center">
            <span className="bold">Start:</span> {date[0].toDateString()}
            &nbsp;|&nbsp;
            <span className="bold">End:</span> {date[1].toDateString()}
          </p>
        ) : (
          <p className="text-center">
            <span className="bold">Default selected date:</span>{" "}
            {date.toDateString()}
          </p>
        )}
      </div>
    </>
  );
}
