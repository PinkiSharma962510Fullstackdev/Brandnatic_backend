





import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import ContactModal from "../Navbar/ContactModal";
import api from "../utils/api";
import "../../styles/blog-content.css";
import { Helmet } from "react-helmet-async";
import { BlogFAQ } from "./BlogFAQ";

function BlogDetails() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [contactOpen, setContactOpen] = useState(false);
  const [refreshComments, setRefreshComments] = useState(false);

  /* 🔽 LOAD MORE CONFIG */
  const INITIAL_VISIBLE = 3;
  const LOAD_MORE_COUNT = 5;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  /* ================= BLOG DETAILS ================= */
  useEffect(() => {
    api.get(`/blogs/public/${slug}`).then((res) => {
      setBlog(res.data);
    });
  }, [slug]);

  /* ================= RECENT BLOGS ================= */
  useEffect(() => {
    api.get("/blogs/public").then((res) => {
      setRecentBlogs(res.data.filter((b) => b.slug !== slug));
    });
  }, [slug]);

  /* ================= SEARCH FILTER ================= */
  const filteredBlogs = useMemo(() => {
    const key = search.trim().toLowerCase();
    if (!key) return recentBlogs;

    return recentBlogs.filter((b) =>
      b.title?.toLowerCase().includes(key)
    );
  }, [search, recentBlogs]);

  /* 🔄 RESET ON SEARCH */
  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [search]);

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < filteredBlogs.length;

  /* ================= LOADING ================= */
  if (!blog) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Loading blog…
      </div>
    );
  }

  return (
    <>
      <div className="bg-black text-white pt-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
       <Helmet>
  {/* ===== SEO TITLE ===== */}
  <title>{blog.seoTitle || blog.title}</title>

  {/* ===== META DESCRIPTION ===== */}
  <meta
    name="description"
    content={
      blog.seoDescription ||
      blog.contentHTML
        ?.replace(/<[^>]+>/g, "")
        ?.slice(0, 155)
    }
  />

  {/* ===== CANONICAL ===== */}
  <link
    rel="canonical"
    href={`https://brandnatic.com/blogs/${blog.slug}`}
  />

  {/* ===== OPEN GRAPH ===== */}
  <meta property="og:type" content="article" />
  <meta property="og:title" content={blog.seoTitle || blog.title} />
  <meta property="og:description" content={blog.seoDescription} />
  <meta
    property="og:image"
    content={
      blog.coverImage || "https://brandnatic.com/og-blog.jpg"
    }
  />

  {/* ===== TWITTER ===== */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content={blog.seoTitle || blog.title}
  />
  <meta
    name="twitter:description"
    content={blog.seoDescription}
  />
  <meta
    name="twitter:image"
    content={
      blog.coverImage || "https://brandnatic.com/og-blog.jpg"
    }
  />

  {/* ✅ FAQ SCHEMA (AUTO INJECT) */}
  {blog.faqs?.length > 0 && (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": blog.faqs
          .filter(faq => faq.question && faq.answer)
          .map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer.replace(/<[^>]+>/g, "")
            }
          }))
      })}
    </script>
  )}
</Helmet>




          {/* ================= LEFT: BLOG CONTENT ================= */}
          <article
            className="blog-content lg:col-span-2"
            itemScope
            itemType="https://schema.org/Article"
          >
             {/* ===== ARTICLE META (SEO) ===== */}
  <meta itemProp="author" content="Brandnatic" />
  <meta itemProp="publisher" content="Brandnatic" />
  <meta
    itemProp="dateModified"
    content={new Date(
      blog.updatedAt || blog.createdAt
    ).toISOString()}
  />
  <meta
    itemProp="mainEntityOfPage"
    content={`https://brandnatic.com/blogs/${blog.slug}`}
  />
            {/* TITLE */}
            <motion.h1
              itemProp="headline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {blog.title}
            </motion.h1>

            {/* DATE */}
            <div className="text-sm text-gray-400 mb-10">
              <time itemProp="datePublished">
                {new Date(blog.createdAt).toLocaleDateString("en-IN")}
              </time>
            </div>

            {/* BLOG CONTENT */}
            <div
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: blog.contentHTML }}
            />

            {/* ================= COMMENTS ================= */}
            <div className="mt-20">
              <CommentForm
                blogId={blog._id}
                onSuccess={() =>
                  setRefreshComments((p) => !p)
                }
              />
              <CommentList
                blogId={blog._id}
                refresh={refreshComments}
              />
            </div>
                          {/* INLINE FAQ ACCORDION */}
          {blog.faqs?.length > 0 && (
            <div className="mt-10 space-y-4">
              {blog.faqs.map((faq, index) => (
                <BlogFAQ key={index} faq={faq} />
              ))}
            </div>
          )}

                    </article>
         



          {/* ================= RIGHT: RECENT BLOGS ================= */}
          <aside className="space-y-8 sticky top-28 h-fit">

            <div className="text-2xl font-semibold">
              Recent Blogs
            </div>

            {/* CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700">
              <h4 className="text-lg font-semibold mb-2">
                Need Digital Growth?
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                SEO • Websites • Paid Ads
              </p>
              <button
                onClick={() => setContactOpen(true)}
                className="
                  w-full py-3 rounded-xl font-semibold
                  bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500
                  hover:from-blue-600 hover:via-sky-600 hover:to-cyan-500
                "
              >
                Talk to Expert →
              </button>
            </div>

            {/* SEARCH */}
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search blogs..."
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2 text-sm"
            />

            {/* BLOG LIST */}
            {/* <div className="space-y-4">
              <AnimatePresence>
                {visibleBlogs.map((post) => (
                  <motion.div
                    key={post._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
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
            </div> */}

            <div className="space-y-4">
  <AnimatePresence>
    {visibleBlogs.map((post) => (
      <motion.div
        key={post._id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link
          to={`/blogs/${post.slug}`}
          className="
            group flex gap-4 p-3 rounded-xl
            bg-zinc-900 hover:bg-zinc-800
            border border-zinc-800 hover:border-blue-500/40
            transition
          "
        >
          {/* ✅ COVER IMAGE */}
          <div className="w-20 h-20 rounded-lg overflow-hidden bg-zinc-800 flex-shrink-0">
            <img
              src={post.coverImage || "/images/blog-placeholder.webp"}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/images/blog-placeholder.webp";
              }}
            />
          </div>

          {/* ✅ CONTENT */}
          <div className="flex flex-col justify-between">
            <p className="text-sm font-medium line-clamp-2 leading-snug">
              {post.title}
            </p>

            <p className="text-xs text-gray-500 mt-1">
              {new Date(post.createdAt).toLocaleDateString("en-IN")}
            </p>
          </div>
        </Link>
      </motion.div>
    ))}
  </AnimatePresence>
</div>


            {/* LOAD MORE */}
            {hasMore && (
              <button
                onClick={() =>
                  setVisibleCount((prev) => prev + LOAD_MORE_COUNT)
                }
                className="
                  w-full py-3 mb-6 rounded-xl font-semibold
                  bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500
                  hover:from-blue-600 hover:via-sky-600 hover:to-cyan-500
                "
              >
                Load More ↓
              </button>
            )}
          </aside>
        </div>
      </div>

      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}

export default BlogDetails;
