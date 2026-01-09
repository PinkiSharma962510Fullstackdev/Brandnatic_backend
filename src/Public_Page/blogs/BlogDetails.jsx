

// import { useParams, Link } from "react-router-dom";
// import { useEffect, useState, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import CommentForm from "./CommentForm";
// import CommentList from "./CommentList";


// import ContactModal from "../Navbar/ContactModal";
// import api from "../utils/api";


// function BlogDetails() {
//   const { slug } = useParams();

//   const [blog, setBlog] = useState(null);
//   const [recentBlogs, setRecentBlogs] = useState([]);
//   const [search, setSearch] = useState("");
//   const [contactOpen, setContactOpen] = useState(false);
//   const [refreshComments, setRefreshComments] = useState(false);

//   /* ================= BLOG DETAILS ================= */
//   useEffect(() => {
//     api.get(`/blogs/public/${slug}`).then((res) => {
//       setBlog(res.data);
//     });
//   }, [slug]);

//   /* ================= RECENT BLOGS ================= */
//   useEffect(() => {
//     api.get("/blogs/public").then((res) => {
//       setRecentBlogs(res.data.filter((b) => b.slug !== slug));
//     });
//   }, [slug]);

//   /* ================= SEARCH ================= */
//   const filteredBlogs = useMemo(() => {
//     const key = search.trim().toLowerCase();
//     if (!key) return recentBlogs;

//     return recentBlogs.filter((b) =>
//       b.title?.toLowerCase().includes(key)
//     );
//   }, [search, recentBlogs]);

//   /* ================= LOADING ================= */
//   if (!blog) {
//     return (
//       <div className="bg-black text-white min-h-screen flex items-center justify-center">
//         Loading blog…
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="bg-black text-white pt-28 px-6">
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">

//           {/* ================= LEFT CONTENT ================= */}
//           <article className="lg:col-span-2">

//             {/* TITLE */}
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
//             >
//               {blog.title}
//             </motion.h1>

//             {/* META */}
//             <div className="text-sm text-gray-400 mb-10">
//               {new Date(blog.createdAt).toLocaleDateString("en-IN")}
//             </div>

//             {/* BLOG CONTENT (TinyMCE HTML) */}
//             <div
//               className="
//                 prose prose-invert max-w-none
//                 prose-headings:font-semibold
//                 prose-p:leading-relaxed
//                 prose-img:rounded-xl
//                 prose-a:text-blue-400
//               "
//               dangerouslySetInnerHTML={{
//                 __html: blog.contentHTML,
//               }}
//             />

//             {/* FAQs */}
//             {blog.faqs?.length > 0 && (
//               <section className="mt-16">
//                 <h2 className="text-2xl font-bold mb-6">
//                   Frequently Asked Questions
//                 </h2>

//                 <div className="space-y-4">
//                   {blog.faqs.map((faq, i) => (
//                     <div
//                       key={i}
//                       className="bg-zinc-900 border border-zinc-700 p-5 rounded-xl"
//                     >
//                       <h4 className="font-semibold mb-2">
//                         {faq.question}
//                       </h4>
//                       <p className="text-gray-400">
//                         {faq.answer}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {/* COMMENTS */}
//             <div className="mt-16">
//               <CommentForm
//                 blogId={blog._id}
//                 onSuccess={() =>
//                   setRefreshComments((p) => !p)
//                 }
//               />
//               <CommentList
//                 blogId={blog._id}
//                 refresh={refreshComments}
//               />
//             </div>
//           </article>

//           {/* ================= RIGHT SIDEBAR ================= */}
//           <aside className="space-y-8 sticky top-28 h-fit">

//             {/* CTA */}
//             <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700">
//               <h4 className="text-lg font-semibold mb-2">
//                 Need Digital Growth?
//               </h4>
//               <p className="text-sm text-gray-400 mb-4">
//                 SEO • Websites • Paid Ads
//               </p>
//               <button
//                 onClick={() => setContactOpen(true)}
//                 className="
//                   w-full py-3 rounded-xl font-semibold
//                   bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500
//                   hover:from-blue-600 hover:via-sky-600 hover:to-cyan-500
//                 "
//               >
//                 Talk to Expert →
//               </button>
//             </div>

//             {/* SEARCH */}
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search blogs..."
//               className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2 text-sm"
//             />

//             {/* RECENT BLOGS */}
//             <div className="space-y-4">
//               <AnimatePresence>
//                 {filteredBlogs.map((post) => (
//                   <motion.div
//                     key={post._id}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                   >
//                     <Link
//                       to={`/blog/${post.slug}`}
//                       className="block p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800"
//                     >
//                       <p className="font-medium line-clamp-2">
//                         {post.title}
//                       </p>
//                       <p className="text-xs text-gray-500 mt-1">
//                         {new Date(post.createdAt).toLocaleDateString("en-IN")}
//                       </p>
//                     </Link>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>
//           </aside>
//         </div>
//       </div>

//       <ContactModal
//         open={contactOpen}
//         onClose={() => setContactOpen(false)}
//       />
//     </>
//   );
// }

// export default BlogDetails;





import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import ContactModal from "../Navbar/ContactModal";
import api from "../utils/api";

function BlogDetails() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [contactOpen, setContactOpen] = useState(false);
  const [refreshComments, setRefreshComments] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

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

          {/* ================= LEFT CONTENT ================= */}
          <article className="lg:col-span-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {blog.title}
            </motion.h1>

            <div className="text-sm text-gray-400 mb-10">
              {new Date(blog.createdAt).toLocaleDateString("en-IN")}
            </div>

            <div className="tox">
  <div
    className="mce-content-body"
    dangerouslySetInnerHTML={{ __html: blog.contentHTML }}
  />
</div>

            {/* ================= FAQs ================= */}
{blog?.faqs?.length > 0 && (
  <section className="mt-16">
    <h2 className="text-2xl font-bold mb-6">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4">
      {blog.faqs.map((faq, index) => {
        const isOpen = openFaq === index;

        return (
          <div
            key={index}
            className="border border-zinc-700 rounded-xl overflow-hidden bg-black"
          >
            {/* QUESTION ROW */}
            <button
              onClick={() =>
                setOpenFaq(isOpen ? null : index)
              }
              className="
                w-full flex items-center justify-between
                px-5 py-4 text-left
                text-white font-medium
                hover:bg-zinc-900 transition
              "
            >
              <span>{faq.question}</span>

              <span className="text-xl">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* ANSWER */}
            {isOpen && (
              <div className="px-5 pb-5 text-gray-400 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  </section>
)}



            {/* COMMENTS */}
            <div className="mt-16">
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
          </article>

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="space-y-8 sticky top-28 h-fit">

            {/* TALK TO EXPERT (UNCHANGED) */}
             <div className="text-2xl px-2">Recent Blogs</div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700">
              <h4 className="text-lg font-semibold mb-2">
                Need Digital Growth?
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                SEO • Websi
                tes • Paid Ads
              </p>
              <button
                onClick={() => setContactOpen(true)}
                className="
                  w-full py-3 rounded-xl font-semibold
                  bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500
                  hover:from-blue-600 hover:via-sky-600 hover:to-cyan-500 cursor-pointer
                "
              >
                Talk to Expert →
              </button>
            </div>

            {/* SEARCH (UNCHANGED) */}
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search blogs..."
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2 text-sm"
            />

            {/* RECENT BLOGS */}
           
            <div className="space-y-4">
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
            </div>

            {/* LOAD MORE */}
            {hasMore && (
              <button
                onClick={() =>
                  setVisibleCount((prev) => prev + LOAD_MORE_COUNT)
                }
                className="
                  w-[60%] mx-auto block cursor-pointer mx-auto py-3 mx-[50px] rounded-xl font-semibold
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
