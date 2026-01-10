import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PermissionGate from "../components/PermissionGate";
import api from "../utils/api";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await api.get("/users");
      setUsers(res.data);
    } catch (err) {
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Users</h1>

        <PermissionGate module="users" action="manage">
          <Link
            to="/admin/users/create"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            + Create User
          </Link>
        </PermissionGate>
      </div>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* USER TABLE */}
      <div className="bg-zinc-900 rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-zinc-800">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className="p-6 text-center text-gray-400">
                  Loading users…
                </td>
              </tr>
            ) : (
              users.map((u) => (
                <tr
                  key={u._id}
                  className="border-b border-zinc-800 hover:bg-zinc-800/40"
                >
                  <td className="p-3">{u.name}</td>
                  <td className="p-3 text-gray-400">{u.email}</td>
                  <td className="p-3 capitalize">{u.role}</td>
                  <td className="p-3">
                    <PermissionGate module="users" action="manage">
                      <Link
                        to={`/admin/users/edit/${u._id}`}
                        className="text-blue-400 hover:underline"
                      >
                        Edit
                      </Link>
                    </PermissionGate>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
