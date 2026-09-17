import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import VoiceAdvisor from "./pages/VoiceAdvisor";
import LocalBusiness from "./pages/LocalBusiness";
import Opportunity from "./pages/Opportunity";
import Simulator from "./pages/Simulator";
import MoneyPlanner from "./pages/MoneyPlanner";
import SchemeMatcher from "./pages/SchemeMatcher";  
import Reports from "./pages/Reports";

import FinancialAnalysis from "./pages/FinancialAnalysis";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/voice-advisor" element={<VoiceAdvisor />} />
        <Route path="/advisor" element={<VoiceAdvisor />} />
        <Route path="/local-business" element={<LocalBusiness />} />
        <Route path="/opportunity" element={<Opportunity />} />
        <Route path="/simulator" element={<Simulator />} />
        <Route path="/money-planner" element={<MoneyPlanner />} />
        <Route path="/schemes" element={<SchemeMatcher />} />
        <Route path="/reports" element={<Reports />} />

        <Route path="/financial-analysis" element={<FinancialAnalysis />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;