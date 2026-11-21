import { createContext, useEffect, useState } from "react";
import { getLeads, createLead, updateLead, deleteLead } from "../services/leadService";
import { useAuth } from "../../auth/context/AuthContext";

export const LeadContext = createContext();

export const LeadProvider = ({ children }) => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user, loading: authLoading } = useAuth();

 
  const fetchLeads = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getLeads();
      setLeads(data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch leads");
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchLeads();
  // }, []);

  useEffect(() => {
    if (authLoading) return;

    if (user) {
        fetchLeads();
    } else {
        setLeads([]);
        setError("");
    }
}, [user, authLoading]);

  // Add a new lead
  const addLead = async (leadData) => {
    const newLead = await createLead(leadData);
    setLeads((prev) => [...prev, newLead]);
  };

  // Update an existing lead
  const editLead = async (id, leadData) => {
    const updatedLead = await updateLead(id, leadData);

    setLeads((prev) =>
      prev.map((lead) => (lead._id === id ? updatedLead : lead))
    );
  };

  // Delete a lead
  const removeLead = async (id) => {
    await deleteLead(id);

    setLeads((prev) => prev.filter((lead) => lead._id !== id));
  };

  return (
    <LeadContext.Provider
      value={{
        leads,
        loading,
        error,
        addLead,
        editLead,
        removeLead,
        fetchLeads,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
};