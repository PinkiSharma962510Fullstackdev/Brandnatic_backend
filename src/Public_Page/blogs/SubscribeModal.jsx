import { useState } from "react";
import api from "../utils/api";

function SubscribeModal({ open, email, onClose }) {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  if (!open) return null;

  const subscribe = async () => {
    try {
      setLoading(true);
      await api.post("/subscribe", { email });
      setMsg("Verification email sent. Please check inbox.");
    } catch (err) {
      setMsg(err.response?.data?.message || "Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-6 rounded-xl w-full max-w-md border border-zinc-700">
        <h3 className="text-xl font-semibold mb-2">
          Subscribe to Comment
        </h3>

        <p className="text-sm text-gray-400 mb-4">
          Please verify your email to prevent spam comments.
        </p>

        {msg && <p className="text-sm mb-3">{msg}</p>}

        <button
          onClick={subscribe}
          disabled={loading}
          className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Sending..." : "Send Verification Email"}
        </button>

        <button
          onClick={onClose}
          className="mt-3 w-full border border-zinc-600 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SubscribeModal;
