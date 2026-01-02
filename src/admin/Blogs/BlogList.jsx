import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";


function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH BLOGS ================= */
  const fetchBlogs = async () => {
    try {
      const res = await api.get("/blogs");
      setBlogs(res.data);
    } catch (err) {
      alert("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  /* ================= DELETE BLOG ================= */
  const deleteBlog = async (id) => {
    if (!window.confirm("Delete this blog?")) return;

    try {
      await api.delete(`/blogs/${id}`);
      setBlogs(blogs.filter((b) => b._id !== id));
    } catch (err) {
      alert("Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-white">
        Loading blogs...
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="p-8 text-white">
        No blogs found
      </div>
    );
  }

  return (
    <div className="p-8 text-white space-y-6">
      <h1 className="text-2xl mb-6">All Blogs</h1>

      {blogs.map((blog, index) => (
        <div
          key={blog._id}
          className="bg-zinc-900 p-5 rounded space-y-3"
        >
          <h2 className="font-semibold">
            {index + 1}. {blog.title}
          </h2>

          <p className="text-xs text-zinc-500">
            Status: {blog.status} · Author:{" "}
            {blog.author?.name || "Admin"}
          </p>

          {/* CONTENT PREVIEW */}
          <div
            className="text-sm text-zinc-400 line-clamp-3"
            dangerouslySetInnerHTML={{
              __html: blog.contentHTML?.slice(0, 300),
            }}
          />

          {/* ACTION BUTTONS */}
          <div className="flex gap-3 pt-4">
            <Link
              to={`/admin/blogs/edit/${blog._id}`}
              className="bg-blue-600 px-4 py-2 rounded text-sm hover:bg-blue-700"
            >
              Edit
            </Link>

            <Link
              to={`/admin/blogs/preview/${blog._id}`}
              className="bg-zinc-700 px-4 py-2 rounded text-sm hover:bg-zinc-600"
            >
              View
            </Link>

            <button
              onClick={() => deleteBlog(blog._id)}
              className="bg-red-600 px-4 py-2 rounded text-sm hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
