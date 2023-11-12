import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CalendarElement from "./pages/Calendar";
import Payslip from "./pages/Payslip";
import DownloadPayslips from "./pages/DownloadPayslips";
import Navigation from "./pages/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="payslip" element={<Payslip />} />
        <Route path="calendar" element={<CalendarElement />} />
        <Route path="download" element={<DownloadPayslips />} />
      </Routes>
    </div>
  );
}

export default App;
