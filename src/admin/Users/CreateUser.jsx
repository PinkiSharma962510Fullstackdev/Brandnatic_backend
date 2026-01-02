import { useState } from "react";
import api from "../utils/api";

function CreateUser() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "editor", // 🟢 already correct
    permissions: {
      blogs: { create: false, edit: false, delete: false, publish: false },
      comments: { approve: false, spam: false, delete: false },
      users: { manage: false },
    },
  });

  const toggle = (section, key) => {
    setForm({
      ...form,
      permissions: {
        ...form.permissions,
        [section]: {
          ...form.permissions[section],
          [key]: !form.permissions[section][key],
        },
      },
    });
  };

  return (
    <div>
      <h1 className="text-xl mb-4">Create User</h1>

      {/* NAME */}
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      {/* EMAIL */}
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      {/* PASSWORD */}
      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      {/* 🟢 ROLE SELECT (NEW ADDITION) */}
      <div className="mt-3">
        <label className="block mb-1 font-medium">
          Role
        </label>

        <select
          value={form.role}
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
          className="border px-2 py-1 text-white bg-black"
        >
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
          <option value="moderator">Moderator</option>
        </select>
      </div>

      {/* PERMISSIONS */}
      <h2 className="mt-4 font-semibold">
        Permissions
      </h2>

      {Object.entries(form.permissions).map(
        ([section, perms]) => (
          <div key={section}>
            <p className="mt-2 capitalize">
              {section}
            </p>

            {Object.keys(perms).map((p) => (
              <label key={p} className="block">
                <input
                  type="checkbox"
                  checked={form.permissions[section][p]}
                  onChange={() => toggle(section, p)}
                />{" "}
                {p}
              </label>
            ))}
          </div>
        )
      )}

      {/* SUBMIT */}
      <button
        onClick={async () => {
          await api.post("/users", form);
          alert("User Created");
        }}
        className="bg-blue-600 px-4 py-2 mt-4 text-white"
      >
        Create User
      </button>
    </div>
  );
}

export default CreateUser;
