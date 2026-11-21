import { useContext } from "react";
import { Users, UserPlus, Phone, CheckCircle } from "lucide-react";
import { LeadContext } from "../context/LeadContext";
import "./LeadStats.css";

const LeadStats = () => {
  const { leads } = useContext(LeadContext);

  const stats = [
    {
      title: "Total Leads",
      value: leads.length,
      icon: Users,
      color: "#2563eb",
      bg: "#dbeafe",
    },
    {
      title: "New Leads",
      value: leads.filter((lead) => lead.status === "New").length,
      icon: UserPlus,
      color: "#9333ea",
      bg: "#f3e8ff",
    },
    {
      title: "Contacted",
      value: leads.filter((lead) => lead.status === "Contacted").length,
      icon: Phone,
      color: "#d97706",
      bg: "#fef3c7",
    },
    {
      title: "Qualified",
      value: leads.filter((lead) => lead.status === "Qualified").length,
      icon: CheckCircle,
      color: "#16a34a",
      bg: "#dcfce7",
    },
  ];

  return (
    <div className="stats-container">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div className="stat-card" key={item.title}>
            <div
              className="stat-icon"
              style={{ backgroundColor: item.bg, color: item.color }}
            >
              <Icon size={22} />
            </div>

            <div>
              <p>{item.title}</p>
              <h2>{item.value}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LeadStats;