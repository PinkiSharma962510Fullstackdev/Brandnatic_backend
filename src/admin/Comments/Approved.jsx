import { useEffect, useState } from "react";
import api from "../utils/api";

function Approved() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.get("/comments/approved").then((res) => {
      setComments(res.data);
    });
  }, []);

  return (
    <div className="p-6 text-white">
      <h1 className="text-xl mb-4">Approved Comments</h1>

      {comments.map((c) => (
        <div key={c._id} className="bg-zinc-900 p-4 mb-3 rounded">
          <p className="font-semibold">{c.name}</p>
          <p>{c.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Approved;
