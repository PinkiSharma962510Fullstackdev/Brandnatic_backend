
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../utils/api";

/* =========================
   BRANDNATIC SERVICES (UI FILTER)
========================= */
const SERVICES = [
  "SEO Marketing",
  "AI Automation",
  "Web Development",
  "Performance Marketing",
  "Lead Generation",
  "Software Development",
];

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [activeService, setActiveService] = useState(null);

  const INITIAL_COUNT = 6;
  const LOAD_MORE_COUNT = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    api.get("/blogs/public")
      .then((res) => setBlogs(res.data))
      .finally(() => setLoading(false));
  }, []);

  /* =========================
     FILTERED BLOGS (HONEST FILTER)
     👉 only search-based for now
  ========================= */
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const text =
        (blog.title + " " + (blog.contentHTML || ""))
          .replace(/<[^>]+>/g, "")
          .toLowerCase();

      const matchesSearch = text.includes(search.toLowerCase());

      // TEMP service hint (soft match)
      const matchesService = activeService
        ? text.includes(activeService.split(" ")[0].toLowerCase())
        : true;

      return matchesSearch && matchesService;
    });
  }, [blogs, search, activeService]);

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Loading blogs…
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-20 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ================= SEARCH ================= */}
        <div className="mb-10">
          <div className="relative w-full">
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setVisibleCount(INITIAL_COUNT);
              }}
              placeholder="Search blogs, SEO, AI, automation…"
              className="
                w-full px-6 py-4 rounded-full
                bg-zinc-900 border border-zinc-700
                text-white placeholder-zinc-400
                focus:outline-none focus:border-cyan-400
                focus:shadow-[0_0_25px_rgba(34,211,238,0.35)]
                transition
              "
            />

            {/* Brandnatic color icon */}
            <div className="
              absolute right-2 top-1/2 -translate-y-1/2
              h-10 w-10 rounded-full
              flex items-center justify-center
              bg-gradient-to-r from-cyan-400 to-blue-500
              shadow-lg shadow-cyan-500/30
            ">
              🔍
            </div>
          </div>
        </div>

        {/* ================= SERVICES ROW ================= */}
        <div className="mb-14">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveService(null)}
              className={`
                px-5 py-2 rounded-full text-sm font-semibold
                border transition
                ${!activeService
                  ? "bg-cyan-500 text-black border-cyan-400"
                  : "border-zinc-700 text-zinc-300 hover:border-cyan-400"
                }
              `}
            >
              All
            </button>

            {SERVICES.map((service) => (
              <button
                key={service}
                onClick={() => {
                  setActiveService(service);
                  setVisibleCount(INITIAL_COUNT);
                }}
                className={`
                  px-5 py-2 rounded-full text-sm font-semibold
                  border transition
                  ${activeService === service
                    ? "bg-cyan-500 text-black border-cyan-400"
                    : "border-zinc-700 text-zinc-300 hover:border-cyan-400"
                  }
                `}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        {/* ================= BLOG GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleBlogs.length === 0 && (
            <div className="col-span-full text-center text-zinc-400 py-20">
              No blogs found.
            </div>
          )}

          {visibleBlogs.map((blog, i) => (
            <motion.article
              key={blog._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="
                bg-zinc-900 border border-zinc-800
                rounded-2xl overflow-hidden
                hover:border-cyan-400/50
                transition
              "
            >
              {blog.coverImage && (
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full aspect-[16/9] object-cover"
                />
              )}

             <div className="p-6 flex flex-col">
  <h2 className="text-lg font-bold mb-2 line-clamp-2">
    {blog.title}
  </h2>

  {/* AUTHOR */}
  <div className="flex items-center gap-2 text-sm text-zinc-400 mb-3">
    <User size={16} className="text-cyan-400" />
    <span>
      By{" "}
      <span className="text-white font-medium">
        {blog.author?.name || "Brandnatic Team"}
      </span>
    </span>
  </div>

  <p className="text-zinc-400 text-sm line-clamp-3 mb-6">
    {(blog.contentHTML || "")
      .replace(/<[^>]+>/g, "")
      .slice(0, 140)}
    …
  </p>

  <Link
    to={`/blogs/${blog.slug}`}
    className="mt-auto text-cyan-400 font-semibold"
  >
    Read More →
  </Link>
</div>

            </motion.article>
          ))}
        </div>

        {/* LOAD MORE */}
        {visibleCount < filteredBlogs.length && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setVisibleCount((p) => p + LOAD_MORE_COUNT)}
              className="
                px-10 py-3 rounded-full font-semibold
                bg-gradient-to-r from-cyan-500 to-blue-500
                text-black
                hover:scale-105 transition
              "
            >
              Load More Blogs
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blogs;
