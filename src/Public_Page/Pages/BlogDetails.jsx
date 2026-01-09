import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../admin/utils/api";

function BlogDetails() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // load more
  const INITIAL_VISIBLE = 1;
  const LOAD_MORE_COUNT = 5;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  /* ================= FETCH BLOG ================= */
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await api.get(`/blogs/${slug}`);
        setBlog(res.data);
      } catch (err) {
        console.error("Blog not found", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  /* ================= RECENT BLOGS ================= */
  useEffect(() => {
    api.get("/blogs").then((res) => {
      setRecentBlogs(res.data.filter((b) => b.slug !== slug));
    });
  }, [slug]);

  /* ================= SEARCH ================= */
  const filteredBlogs = useMemo(() => {
    const key = search.trim().toLowerCase();
    if (!key) return recentBlogs;

    return recentBlogs.filter((b) =>
      b.title.toLowerCase().includes(key)
    );
  }, [search, recentBlogs]);

  /* 🔥 ADD #1 — RESET LOAD MORE ON SEARCH */
  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [search]);

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);

  /* 🔥 ADD #2 — SAFE hasMore CHECK */
  const hasMore = filteredBlogs.length > visibleCount;

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-zinc-400 flex items-center justify-center">
        Loading blog...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Blog not found ❌
      </div>
    );
  }

  return (
    <div className="bg-black text-white pt-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}
        <div className="md:col-span-2">
          {blog.coverImage && (
            <img
              src={`${import.meta.env.VITE_API_URL}${blog.coverImage}`}
              alt={blog.title}
              className="w-full h-[380px] object-cover rounded-xl mb-8"
            />
          )}

          <h1 className="text-4xl font-bold mb-6">
            {blog.title}
          </h1>

       <div
  className="prose prose-invert max-w-none"
  dangerouslySetInnerHTML={{ __html: blog.contentHTML }}
/>


        {/* RIGHT SIDEBAR */}
        <aside className="border-l border-zinc-800 pl-6 sticky top-28 space-y-8">

          {/* SEARCH */}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search blogs..."
            className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2 text-sm"
          />

          {/* HEADER */}
          <div className="flex justify-between border-b border-zinc-700 pb-3">
            <h3 className="text-xl font-semibold">Recent Blogs</h3>
            <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">
              {filteredBlogs.length}
            </span>
          </div>

          {/* BLOG LIST */}
          <div className="space-y-4">
            <AnimatePresence>
              {visibleBlogs.map((post) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <Link
                    to={`/admin/blogs/${post.slug}`}
                    className="block p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800"
                  >
                    <p className="font-medium line-clamp-2">
                      {post.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(post.createdAt).toLocaleDateString("en-IN")}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* LOAD MORE */}
          {hasMore && (
            <motion.button
              onClick={() =>
                setVisibleCount((p) => p + LOAD_MORE_COUNT)
              }
              className="
                w-full py-3 rounded-xl text-sm font-semibold
                bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500
                hover:from-blue-600 hover:via-sky-600 hover:to-cyan-500
              "
            >
              Load More ↓
            </motion.button>
          )}
        </aside>

      </div>
    </div>
  );
}

export default BlogDetails;
