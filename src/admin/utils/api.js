// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://brandnatic-backend-bac.vercel.app/api", // backend url
// });

// // 🔐 TOKEN AUTO ATTACH
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("adminToken");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // LOCAL backend
});

// 🔐 TOKEN AUTO ATTACH (THIS IS THE KEY FIX)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken"); // ✅ RIGHT KEY

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

