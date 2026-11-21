import { useState, useContext, useEffect } from "react";
import { LeadContext } from "../context/LeadContext";
import "./LeadForm.css";

const initialFormData = {
    name: "",
    email: "",
    phone: "",
    company: "",
    source: "Website",
    status: "New",
};

const LeadForm = ({ selectedLead, onClose }) => {
    const { addLead, editLead } = useContext(LeadContext);

    const [formData, setFormData] = useState(initialFormData);
    const [saving, setSaving] = useState(false);
    // Fill the form when editing an existing lead
    useEffect(() => {
        if (selectedLead) {
            setFormData({
                name: selectedLead.name,
                email: selectedLead.email,
                phone: selectedLead.phone,
                company: selectedLead.company,
                source: selectedLead.source,
                status: selectedLead.status,
            });
        } else {
            setFormData(initialFormData);
        }
    }, [selectedLead]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            if (selectedLead) {
                await editLead(selectedLead._id, formData);
                alert("Lead updated successfully!");
            } else {
                await addLead(formData);
                alert("Lead added successfully!");
            }

            onClose();
        } catch (error) {
            alert(error.response?.data?.message || "Something went wrong");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="lead-form-container">
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input name="name" value={formData.name} onChange={handleChange} required />

            <label>Email</label>
            <input name="email" type="email" value={formData.email} onChange={handleChange} required />

            <label>Phone</label>
            <input name="phone" value={formData.phone} onChange={handleChange} pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number" required />

            <label>Company</label>
            <input name="company" value={formData.company} onChange={handleChange} required />

            <label>Source</label>
            <select name="source" value={formData.source} onChange={handleChange}>
                <option>Website</option>
                <option>Instagram</option>
                <option>LinkedIn</option>
                <option>Referral</option>
                <option>Other</option>
            </select>

            <label>Status</label>
            <select name="status" value={formData.status} onChange={handleChange}>
                <option>New</option>
                <option>Contacted</option>
                <option>Qualified</option>
                <option>Lost</option>
            </select>

            <button type="submit" className="submit-btn">
                
                {saving
                    ? "Saving..."
                    : selectedLead
                        ? "Update Lead"
                        : "Save Lead"}
            </button>
        </form>
        </div>
    );
};

export default LeadForm;