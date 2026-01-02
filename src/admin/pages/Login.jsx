import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import { saveAuth } from "../utils/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      const res = await api.post("/auth/login", { email, password });
      saveAuth(res.data);
      navigate("/admin");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      
      {/* LOGIN CARD */}
      <div className="w-full max-w-md bg-zinc-900/90 border border-zinc-800 rounded-xl shadow-2xl p-8">

        {/* BRAND */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-wide">
            Admin Panel
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Secure login required
          </p>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded">
            {error}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={submit} className="space-y-5">

          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-blue-500"
              placeholder="admin@email.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200 py-2 rounded font-medium disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

      </div>
    </div>
  );
}

export default Login;
