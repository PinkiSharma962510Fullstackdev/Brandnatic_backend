import axios from "axios";

const api = axios.create({
  baseURL: "https://brandnatic-backend-bac.vercel.app/api", // backend url
});

// 🔐 TOKEN AUTO ATTACH
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
