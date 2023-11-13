import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CalendarElement from "./pages/Calendar";
import Payslip from "./pages/Payslip";
import DownloadPayslips from "./pages/DownloadPayslips";
import Navigation from "./pages/Navigation";
import Details from "./pages/Details";
import Security from "./pages/Security";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="payslip" element={<Payslip />} />
        <Route path="calendar" element={<CalendarElement />} />
        <Route path="download" element={<DownloadPayslips />} />
        <Route path="derails" element={<Details />} />
        <Route path="derails" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
