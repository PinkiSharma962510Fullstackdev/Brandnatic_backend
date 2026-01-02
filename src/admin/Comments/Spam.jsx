import { useEffect, useState } from "react";
import api from "../utils/api";

function Spam() {
  const [comments, setComments] = useState([]);

 const load = async () => {
  const res = await api.get("/admin/comments/spam");
  setComments(res.data);
};

  useEffect(() => {
    load();
  }, []);

const restore = async (id) => {
  await api.put(`/admin/comments/${id}/restore`);
  load();
};

const remove = async (id) => {
  await api.delete(`/admin/comments/${id}`);
  load();
};

  return (
    <div className="p-6 text-white">
      <h1 className="text-xl mb-4">Spam Comments</h1>

      {comments.map((c) => (
        <div key={c._id} className="bg-zinc-900 p-4 mb-3 rounded">
          <p className="font-semibold">{c.name}</p>
          <p className="my-2">{c.comment}</p>

          <div className="flex gap-3">
            <button
              onClick={() => restore(c._id)}
              className="bg-blue-600 px-3 py-1 rounded"
            >
              Restore
            </button>

            <button
              onClick={() => remove(c._id)}
              className="bg-red-700 px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Spam;
