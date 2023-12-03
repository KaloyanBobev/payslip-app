// import the base code from React library
import React from "react";
//import a useState hook from react
import { useState } from "react";
//import a Calendar element and css file
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navigation from "./Navigation";
//Calendar function
export default function CalendarElement() {
  //assing new varable date and set default new date
  const [date, setDate] = useState(new Date());
  //return the JSX
  return (
    <>
      <Navigation />
      <div className="container">
        <h1>Viewing Holiday Calendar for John Smith</h1>
        {/*printing on the screen the tinar operator if condition is done will print a start and end date if is not will show a default date */}
        {date.length > 0 ? (
          <p className="text-center">
            <span className="bold">Start:</span> {date[0].toDateString()}
            &nbsp;|&nbsp;
            <span className="bold">End:</span> {date[1].toDateString()}
            &nbsp;|&nbsp;
            <span className="bold">Difference:</span>{" "}
            {calculateDateDifference(date[0], date[1])} days
          </p>
        ) : (
          <p className="text-center">
            <span className="bold">Default selected date:</span>{" "}
            {date.toDateString()}
          </p>
        )}
        {/*using a ready component from Calendar component */}
        <Calendar
          className="center-block"
          onChange={setDate}
          value={date}
          selectRange={true}
          defaultView="decade"
        />
      </div>
    </>
  );
}

// Helper function to calculate the difference between two dates
const calculateDateDifference = (startDate, endDate) => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffDays = Math.round(Math.abs((startDate - endDate) / oneDay));
  if (diffDays > 20) {
    return "Too many";
  }
  return diffDays;
};
