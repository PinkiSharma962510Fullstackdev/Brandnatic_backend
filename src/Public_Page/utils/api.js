import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL
      ? `${import.meta.env.VITE_API_URL}/api`
      : "https://brandnatic-backend-bac.vercel.app/api",

  withCredentials: false, // public users, no auth cookies
});


export default api;
