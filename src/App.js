import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CalendarElement from "./pages/Calendar";
import Payslip from "./pages/Payslip";
import DownloadPayslips from "./pages/DownloadPayslips";
import Details from "./pages/Details";
import Security from "./pages/Security";
import Forgot from "./pages/ForgotPassword";
import NotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="payslip/:userId" element={<Payslip />} />
        <Route path="calendar" element={<CalendarElement />} />
        <Route path="download" element={<DownloadPayslips />} />
        <Route path="details" element={<Details />} />
        <Route path="security" element={<Security />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
