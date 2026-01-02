// src/utils/auth.js

export const saveAuth = (data) => {
  // 🔑 token
  localStorage.setItem("adminToken", data.token);

  // 👤 sirf user info (NOT token)
  if (data.user) {
    localStorage.setItem(
      "adminUser",
      JSON.stringify(data.user)
    );
  }
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("adminUser"));
};

export const logout = () => {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminUser");
};
