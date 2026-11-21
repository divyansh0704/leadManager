
import axios from "axios";

const API = axios.create({
//   baseURL: "http://localhost:5000/api/auth",
  baseURL: "https://leadmanager-hqrd.onrender.com/api/auth",
  withCredentials: true,
});


export const signupUser = async (userData) => {
  const response = await API.post("/signup", userData);
  return response.data;
};


export const loginUser = async (userData) => {
  const response = await API.post("/login", userData);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await API.get("/me");
  return response.data;
};

export const logoutUser = async () => {
  const response = await API.post("/logout");
  return response.data;
};

export default API;
