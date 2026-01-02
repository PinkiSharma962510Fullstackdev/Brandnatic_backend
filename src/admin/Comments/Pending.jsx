import { useEffect, useState } from "react";
import api from "../utils/api";


function Pending() {
  const [comments, setComments] = useState([]);

  const load = async () => {
    const res = await api.get("/admin/comments/pending");
    setComments(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const approve = async (id) => {
    await api.put(`/admin/comments/${id}/approve`);
    load();
  };

  const spam = async (id) => {
    await api.put(`/admin/comments/${id}/spam`);
    load();
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-xl mb-4">Pending Comments</h1>

      {comments.map((c) => (
        <div key={c._id} className="bg-zinc-900 p-4 mb-3 rounded">
          <p className="font-semibold">{c.name}</p>
          <p className="text-sm text-zinc-400">{c.email}</p>
          <p className="my-2">{c.comment}</p>

          <div className="flex gap-3">
            <button
              onClick={() => approve(c._id)}
              className="bg-green-600 px-3 py-1 rounded"
            >
              Approve
            </button>

            <button
              onClick={() => spam(c._id)}
              className="bg-red-600 px-3 py-1 rounded"
            >
              Spam
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pending;
