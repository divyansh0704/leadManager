
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/layout/Sidebar.jsx";
import Header from "./components/layout/Header.jsx";

import Login from "./features/auth/components/Login.jsx";
import Signup from "./features/auth/components/Signup.jsx";
import ProtectedRoute from "./features/auth/components/ProtectedRoute.jsx";

import LeadsPage from "./features/leads/pages/LeadPage.jsx";

import "./App.css";
import "./index.css";

function DashboardLayout() {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content">
        <Header />
        <LeadsPage />
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />} />
        </Route>

        {/* <Route path="*" element={<Navigate to="/dashboard" replace />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
