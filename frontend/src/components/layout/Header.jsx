// import { FaBell, FaUserCircle } from "react-icons/fa";
import { Bell, CircleUserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../features/auth/context/AuthContext";
import "../../index.css"
const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <header className="header">
      <h3 className="header-title">
        <span className="header-title-desktop">Dashboard</span>
        <span className="header-title-mobile">LeadFlow</span>
      </h3>

      <div className="header-right">
        <Bell />

        <CircleUserRound size={25} />
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
