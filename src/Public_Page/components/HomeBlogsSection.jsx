import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../admin/utils/api";
import { User, Calendar } from "lucide-react";

function HomeBlogsSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const res = await api.get("/blogs/public/home");
        setBlogs(res.data);
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      } finally {
        setLoading(false);
      }
    }, 2500); // after hero / LCP

    return () => clearTimeout(timer);
  }, []);

  if (loading || !blogs.length) return null;

  return (
    <section className="pb-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Latest Insights ✨
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Explore our latest blogs on digital growth, marketing,
            technology and business strategies.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog._id}
              to={`/blogs/${blog.slug}`}
              className="
                group relative
                bg-zinc-900/80 backdrop-blur
                rounded-2xl overflow-hidden
                border border-zinc-800
                transition-all duration-300
                hover:border-cyan-400/40
                hover:-translate-y-2
                hover:shadow-[0_20px_50px_-15px_rgba(34,211,238,0.35)]
              "
            >
              {/* IMAGE */}
              {blog.coverImage && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="
                      w-full h-full object-cover
                      transition-transform duration-500
                      group-hover:scale-[1.05]
                    "
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              )}

              {/* CONTENT */}
              <div className="p-6 flex flex-col">

                {/* TITLE */}
                <h3 className="
                  text-xl font-semibold mb-2
                  transition-colors
                  group-hover:text-cyan-400
                ">
                  {blog.title}
                </h3>

                {/* AUTHOR + DATE */}
                <div className="
                  flex items-center gap-4
                  text-xs text-zinc-400
                  bg-zinc-800/40 border border-zinc-700/60
                  rounded-full px-4 py-2 mb-4
                  w-fit
                ">
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-cyan-400" />
                    <span>
                      By{" "}
                      <span className="text-white font-medium">
                        {blog.author?.name || "Brandnatic Team"}
                      </span>
                    </span>
                  </div>

                  <span className="text-zinc-600">•</span>

                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-cyan-400" />
                    <span>
                      {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                {/* EXCERPT */}
                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-4">
                  {blog.excerpt}
                </p>

                {/* CTA */}
                <div className="
                  mt-6 inline-flex items-center gap-1
                  text-cyan-400 text-sm font-semibold
                  group/read
                ">
                  <span className="relative">
                    Read More
                    <span
                      className="
                        absolute left-0 -bottom-0.5
                        h-[2px] w-0
                        bg-cyan-400
                        transition-all duration-300
                        group-hover/read:w-full
                      "
                    />
                  </span>
                  <span className="transition-transform duration-300 group-hover/read:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* VIEW ALL */}
        <div className="text-center mt-16">
          <Link
            to="/blogs"
            className="
              inline-block px-8 py-3 rounded-lg
              bg-cyan-500 text-black font-medium
              hover:bg-cyan-400 transition
            "
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeBlogsSection;
