import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // 👇 MOST IMPORTANT LINE
  return children ? children : <Outlet />;
}

export default ProtectedRoute;
