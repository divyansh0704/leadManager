
import Lead from "../models/lead.js";


export const getLeads = async (req, res) => {
    try {
        const leads = await Lead.find({ user: req.userId });
        res.status(200).json(leads);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const createLead = async (req, res) => {
    try {
        // const { name, email, phone, company, source, status } = req.body;
        // const lead = await Lead.create(req.body);
        const lead = await Lead.create({
      ...req.body,
      user: req.userId,
    });
        res.status(201).json(lead);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



export const updateLead = async (req, res) => {
  try {
    const { name, email, phone, company, source, status } = req.body;

    const lead = await Lead.findByIdAndUpdate(
      
      { _id: req.params.id, user: req.userId },
  { name, email, phone, company, source, status },
  { new: true, runValidators: true }
    );

    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    res.status(200).json(lead);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const deleteLead = async (req, res) => {
    try {
        const lead = await Lead.findByIdAndDelete({
      _id: req.params.id,
      user: req.userId,
    });

        if (!lead) {
            return res.status(404).json({ message: "Lead not found" });
        }

        res.status(200).json({ message: "Lead deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
