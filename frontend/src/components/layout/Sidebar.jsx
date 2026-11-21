// import { FaChartPie, FaUsers, FaCog } from "react-icons/fa";
import { LayoutDashboard, Users, Settings } from "lucide-react";
import "../../index.css";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">LeadFlow</h2>

      <nav>
        <a href="#" className="nav-link active">
          <LayoutDashboard />
          Dashboard
        </a>

        <a href="#" className="nav-link">
          <Users />
          Leads
        </a>

        <a href="#" className="nav-link">
          <Settings />
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;