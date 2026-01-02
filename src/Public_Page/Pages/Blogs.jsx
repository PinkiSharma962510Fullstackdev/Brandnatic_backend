import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../admin/utils/api";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await api.get("/blogs/public");
        setBlogs(res.data);
      } catch (err) {
        console.error("Failed to load blogs", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-zinc-400 flex items-center justify-center">
        Loading blogs...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-12 text-center">
          All Blogs ✨
        </h1>

        <div className="grid gap-8 md:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              key={blog._id}
              to={`/blogs/${blog.slug}`}
              className="
                bg-zinc-900 p-6 rounded-xl
                border border-zinc-800
                hover:border-blue-500
                transition
              "
            >
              <h2 className="text-xl font-semibold mb-3">
                {blog.title}
              </h2>

              <p className="text-sm text-zinc-400 line-clamp-4">
                {blog.contentHTML.replace(/<[^>]*>/g, "")}
              </p>

              <span className="inline-block mt-4 text-blue-400 text-sm">
                Read More →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Blogs;
