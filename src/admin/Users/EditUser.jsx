import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../utils/api";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "editor",
    permissions: {
      blogs: {
        create: false,
        edit: false,
        delete: false,
        publish: false,
      },
      comments: {
        approve: false,
        spam: false,
        delete: false,
      },
      users: {
        manage: false,
      },
    },
  });

  /* ================= FETCH USER ================= */
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get(`/users/${id}`);
        setForm({
          name: res.data.name,
          email: res.data.email,
          role: res.data.role,
          permissions: res.data.permissions,
        });
      } catch (err) {
        alert("Failed to load user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  /* ================= TOGGLE PERMISSION ================= */
  const togglePermission = (section, key) => {
    setForm((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [section]: {
          ...prev.permissions[section],
          [key]: !prev.permissions[section][key],
        },
      },
    }));
  };

  /* ================= UPDATE USER ================= */
  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/users/${id}`, form);
      alert("User updated successfully");
      navigate("/admin/users");
    } catch (err) {
      alert("Update failed");
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-semibold mb-6">Edit User</h1>

      <form onSubmit={submit} className="space-y-5">

        {/* NAME */}
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            className="w-full p-2 bg-zinc-800 rounded"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            disabled
            className="w-full p-2 bg-zinc-800 opacity-60 rounded"
            value={form.email}
          />
        </div>

        {/* ROLE */}
        <div>
          <label className="block text-sm mb-1">Role</label>
          <select
            className="w-full p-2 bg-zinc-800 rounded"
            value={form.role}
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
          >
            <option value="superadmin">Super Admin</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="moderator">Moderator</option>
          </select>
        </div>

        {/* PERMISSIONS */}
        <div>
          <h2 className="text-lg font-medium mb-3">Permissions</h2>

          {Object.entries(form.permissions).map(
            ([section, perms]) => (
              <div
                key={section}
                className="mb-4 p-4 bg-zinc-900 rounded"
              >
                <h3 className="capitalize mb-2">{section}</h3>

                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(perms).map(([key, value]) => (
                    <label
                      key={key}
                      className="flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={() =>
                          togglePermission(section, key)
                        }
                      />
                      <span className="capitalize">{key}</span>
                    </label>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* ACTIONS */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded"
          >
            Update User
          </button>

          <button
            type="button"
            onClick={() => navigate("/admin/users")}
            className="bg-zinc-700 px-6 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
