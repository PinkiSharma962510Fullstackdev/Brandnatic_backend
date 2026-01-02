import { useEffect, useState } from "react";
import api from "../utils/api";


function CommentList({ blogId, refresh }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    setLoading(true);

    api.get(`/comments/${blogId}`)
      .then((res) => {
        if (mounted) setComments(res.data);
      })
      .catch(() => {
        if (mounted) setComments([]);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [blogId, refresh]);

  return (
    <div className="mt-12">
      <h3 className="text-xl font-semibold mb-6">
        Comments ({comments.length})
      </h3>

      {/* LOADING */}
      {loading && (
        <div className="text-sm text-zinc-400">
          Loading comments…
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && comments.length === 0 && (
        <div className="text-sm text-zinc-400">
          No comments yet. Be the first to comment 🙂
        </div>
      )}

      {/* COMMENTS */}
      <div className="space-y-6">
        {comments.map((c) => (
          <div
            key={c._id}
            className="
              bg-zinc-900 border border-zinc-800
              rounded-xl p-5
            "
          >
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold text-white">
                {c.name}
              </p>

              <span className="text-xs text-zinc-500">
                {new Date(c.createdAt).toLocaleDateString("en-IN")}
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              {c.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentList;
