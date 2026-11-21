import { useState } from "react";
import { Plus } from "lucide-react";

import LeadStats from "../components/LeadStats";
import LeadTable from "../components/LeadTable";
import LeadForm from "../components/LeadForm";
import Modal from "../../../components/common/modal";

import "./LeadPage.css";

const LeadsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  const handleAddLead = () => {
    setSelectedLead(null);
    setIsModalOpen(true);
  };

  const handleEditLead = (lead) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedLead(null);
  };

  return (
    <div className="leads-page">
      <div className="leads-page-header">
        <div>
          <h2>Lead Management</h2>
          <p>Manage and track your sales leads.</p>
        </div>

        <button onClick={handleAddLead}>
          <Plus size={18} />
          Add Lead
        </button>
      </div>

      <LeadStats />

      <LeadTable onEdit={handleEditLead} />

      {isModalOpen && (
        <Modal
          title={selectedLead ? "Edit Lead" : "Add New Lead"}
          onClose={handleCloseModal}
        >
          <LeadForm
            selectedLead={selectedLead}
            onClose={handleCloseModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default LeadsPage;