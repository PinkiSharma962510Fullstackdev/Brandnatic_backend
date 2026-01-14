// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../utils/api";


// function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showAll, setShowAll] = useState(false);

//   const INITIAL_LIMIT = 10;

//   useEffect(() => {
//     api
//       .get("/blogs/public")
//       .then((res) => setBlogs(res.data))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) {
//     return (
//       <div className="bg-black text-white min-h-screen flex items-center justify-center">
//         Loading blogs…
//       </div>
//     );
//   }

//   const visibleBlogs = showAll
//     ? blogs
//     : blogs.slice(0, INITIAL_LIMIT);

//   return (
//     <div className="bg-black text-white pt-28 px-6">
//       <div className="max-w-7xl mx-auto">

//         {/* HEADER */}
//         <div className="mb-14 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Our Blogs
//           </h1>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Insights, tips & strategies on digital marketing,
//             SEO and web growth.
//           </p>
//         </div>

//         {/* BLOG GRID */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {visibleBlogs.map((blog) => (
//             <article
//               key={blog._id}
//               className="
//                 bg-zinc-900 rounded-2xl overflow-hidden
//                 border border-zinc-800
//                 hover:border-blue-500/50
//                 transition
//               "
//             >
//               <div className="p-7 flex flex-col h-full">
//                 <h2 className="text-xl font-semibold mb-3 line-clamp-2">
//                   {blog.title}
//                 </h2>

//                 <p className="text-xs text-gray-500 mb-4">
//                   {new Date(blog.createdAt).toLocaleDateString("en-IN")}
//                 </p>

//                 <p className="text-gray-400 text-sm line-clamp-3 mb-6">
//                   {blog.contentHTML
//                     .replace(/<[^>]+>/g, "")
//                     .slice(0, 120)}
//                   …
//                 </p>

//                 {/* ✅ ONLY FIX IS HERE */}
//                 <Link
//                   to={`/blogs/${blog.slug}`}
//                   className="
//                     mt-auto inline-flex items-center gap-2
//                     text-blue-400 font-medium
//                     hover:text-blue-300
//                   "
//                 >
//                   Read More →
//                 </Link>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* VIEW ALL */}
//         {!showAll && blogs.length > INITIAL_LIMIT && (
//           <div className="mt-14 text-center">
//             <button
//               onClick={() => setShowAll(true)}
//               className="
//                 px-8 py-3 rounded-xl font-semibold
//                 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500
//                 hover:from-blue-600 hover:via-sky-600 hover:to-cyan-500
//               "
//             >
//               View All Blogs
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Blogs;



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../utils/api";



// function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showAll, setShowAll] = useState(false);

//   const INITIAL_LIMIT = 10;

//   useEffect(() => {
//     api
//       .get("/blogs/public")
//       .then((res) => setBlogs(res.data))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) {
//     return (
//       <div className="bg-black text-white min-h-screen flex items-center justify-center">
//         Loading blogs…
//       </div>
//     );
//   }

//   const visibleBlogs = showAll
//     ? blogs
//     : blogs.slice(0, INITIAL_LIMIT);

//   return (
//     <div className="bg-black text-white pt-28 px-6">
//       <div className="max-w-7xl mx-auto">

//         {/* HEADER */}
//         <div className="mb-14 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Our Blogs
//           </h1>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Insights, tips & strategies on digital marketing,
//             SEO and web growth.
//           </p>
//         </div>

//         {/* BLOG GRID */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {visibleBlogs.map((blog) => {
           

//             return (
//               <article
//   key={blog._id}
//   className="
//     bg-zinc-900 rounded-2xl overflow-hidden
//     border border-zinc-800
//     hover:border-blue-500/50
//     transition
//     flex flex-col h-full
//   "
// >
//   {/* IMAGE */}
// <img
//   src={blog.coverImage}
//   alt={blog.title}
//   className="w-full h-48 object-cover"
//   onError={(e) => {
//     e.currentTarget.style.display = "none";
//   }}
// />



//   {/* CONTENT */}
//   <div className="p-7 flex flex-col flex-1">
//     <h2 className="text-xl font-semibold mb-3 line-clamp-2">
//       {blog.title}
//     </h2>

//     <p className="text-xs text-gray-500 mb-4">
//       {new Date(blog.createdAt).toLocaleDateString("en-IN")}
//     </p>

//    <p className="text-gray-400 text-sm line-clamp-3 mb-6">
//   {(blog.contentHTML || "")
//     .replace(/<[^>]+>/g, "")
//     .slice(0, 120)}
//   …
// </p>

//     {/* ✅ ALWAYS VISIBLE */}
//     <Link
//       to={`/blogs/${blog.slug}`}
//       className="
//         mt-auto inline-flex items-center gap-2
//         text-blue-400 font-medium
//         hover:text-blue-300
//       "
//     >
//       Read More →
//     </Link>
//   </div>
// </article>

//             );
//           })}
//         </div>

//         {/* VIEW ALL */}
//         {!showAll && blogs.length > INITIAL_LIMIT && (
//           <div className="mt-14 text-center">
//             <button
//               onClick={() => setShowAll(true)}
//               className="
//                 px-8 py-3 rounded-xl font-semibold
//                 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500
//                 hover:from-blue-600 hover:via-sky-600 hover:to-cyan-500
//               "
//             >
//               View All Blogs
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Blogs;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../utils/api";
// // import api from "../../admin/utils/api";

// function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
  

//   /* 🔹 LOAD MORE LOGIC */
//   const INITIAL_COUNT = 4;
//   const LOAD_MORE_COUNT = 5;
//   const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
//   useEffect(() => {
//   api
//     .get("/blogs/public")
//     .then((res) => {
//       console.log("API RESPONSE:", res.data);
//       setBlogs(res.data);
//     })
//     .catch((err) => {
//       console.error("API ERROR:", err);
//     })
//     .finally(() => setLoading(false));
// }, []);

//   useEffect(() => {
//     api
//       .get("/blogs/public")
//       .then((res) => setBlogs(res.data))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) {
//     console.log("TOTAL BLOGS:", blogs.length);
// console.log("VISIBLE:", visibleCount);
//     return (
//       <div className="bg-black text-white min-h-screen flex items-center justify-center">
//         Loading blogs…
//       </div>
//     );
//   }

//   const visibleBlogs = blogs.slice(0, visibleCount);

//   return (
//     <div className="bg-black text-white pt-28 px-6">
//       <div className="max-w-7xl mx-auto">

//         {/* HEADER */}
//         <div className="mb-14 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Our Blogs
//           </h1>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Insights, tips & strategies on digital marketing,
//             SEO and web growth.
//           </p>
//         </div>

//         {/* BLOG GRID */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {visibleBlogs.map((blog) => (
//             <article
//               key={blog._id}
//               className="
//                 bg-zinc-900 rounded-2xl overflow-hidden
//                 border border-zinc-800
//                 hover:border-blue-500/50
//                 transition
//                 flex flex-col h-full
//               "
//             >
//               {/* IMAGE */}
//               {blog.coverImage && (
//                 <img
//                   src={blog.coverImage}
//                   alt={blog.title}
//                   className="w-full h-48 object-cover"
//                   onError={(e) => {
//                     e.currentTarget.style.display = "none";
//                   }}
//                 />
//               )}

//               {/* CONTENT */}
//               <div className="p-7 flex flex-col flex-1">
//                 <h2 className="text-xl font-semibold mb-3 line-clamp-2">
//                   {blog.title}
//                 </h2>

//                 <p className="text-xs text-gray-500 mb-4">
//                   {new Date(blog.createdAt).toLocaleDateString("en-IN")}
//                 </p>

//                 <p className="text-gray-400 text-sm line-clamp-3 mb-6">
//                   {(blog.contentHTML || "")
//                     .replace(/<[^>]+>/g, "")
//                     .slice(0, 120)}
//                   …
//                 </p>

//                 <Link
//                   to={`/blogs/${blog.slug}`}
//                   className="
//                     mt-auto inline-flex items-center gap-2
//                     text-blue-400 font-medium
//                     hover:text-blue-300
//                   "
//                 >
//                   Read More →
//                 </Link>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* 🔹 LOAD MORE BUTTON */}
//         {visibleCount < blogs.length && (
//           <div className="mt-16 text-center">
//             <button
//               onClick={() =>
//                 setVisibleCount((prev) => prev + LOAD_MORE_COUNT)
//               }
//               className="
//                 px-10 py-3 rounded-xl font-semibold
//                 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500
//                 hover:from-blue-600 hover:via-sky-600 hover:to-cyan-500
//                 transition
//               "
//             >
//               Load More Blogs
//             </button>
//           </div>
//         )}
//       </div>
      
//     </div>
//   );
// }

// export default Blogs;


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const INITIAL_COUNT = 4;
  const LOAD_MORE_COUNT = 5;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    api
      .get("/blogs/public") // 🔥 ALL BLOGS API
      .then((res) => {
        console.log("API RESPONSE LENGTH:", res.data.length);
        setBlogs(res.data);
      })
      .catch((err) => {
        console.error("API ERROR:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Loading blogs…
      </div>
    );
  }

  const visibleBlogs = blogs.slice(0, visibleCount);

  return (
    <div className="bg-black text-white pt-28 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">

        <div className="mb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Blogs
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Insights, tips & strategies on digital marketing,
            SEO and web growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleBlogs.map((blog) => (
            <article
              key={blog._id}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 flex flex-col"
            >
              {blog.coverImage && (
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-7 flex flex-col flex-1">
                <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                  {blog.title}
                </h2>

                <p className="text-xs text-gray-500 mb-4">
                  {new Date(blog.createdAt).toLocaleDateString("en-IN")}
                </p>

                <p className="text-gray-400 text-sm line-clamp-3 mb-6">
                  {(blog.contentHTML || "")
                    .replace(/<[^>]+>/g, "")
                    .slice(0, 120)}
                  …
                </p>

                <Link
                  to={`/blogs/${blog.slug}`}
                  className="mt-auto text-blue-400 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {visibleCount < blogs.length && (
          <div className="mt-16 text-center">
            <button
              onClick={() =>
                setVisibleCount((prev) => prev + LOAD_MORE_COUNT)
              }
              className="px-10 py-3 rounded-xl font-semibold bg-blue-600 hover:bg-blue-700"
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
