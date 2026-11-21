import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/leads",
   withCredentials: true,
});

export const getLeads = async () => {
  const response = await API.get("/");
  return response.data;
};

export const createLead = async (leadData) => {
  const response = await API.post("/", leadData);
  return response.data;
};

export const updateLead = async (id, leadData) => {
  const response = await API.put(`/${id}`, leadData);
  return response.data;
};

export const deleteLead = async (id) => {
  const response = await API.delete(`/${id}`);
  return response.data;
};