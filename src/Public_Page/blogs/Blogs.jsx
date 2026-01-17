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


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../utils/api";

// function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const INITIAL_COUNT = 4;
//   const LOAD_MORE_COUNT = 5;
//   const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

//   useEffect(() => {
//     api
//       .get("/blogs/public") // 🔥 ALL BLOGS API
//       .then((res) => {
//         console.log("API RESPONSE LENGTH:", res.data.length);
//         setBlogs(res.data);
//       })
//       .catch((err) => {
//         console.error("API ERROR:", err);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) {
//     return (
//       <div className="bg-black text-white min-h-screen flex items-center justify-center">
//         Loading blogs…
//       </div>
//     );
//   }

//   const visibleBlogs = blogs.slice(0, visibleCount);

//   return (
//     <div className="bg-black text-white pt-28 px-6 min-h-screen">
//       <div className="max-w-7xl mx-auto">

//         <div className="mb-14 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Our Blogs
//           </h1>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Insights, tips & strategies on digital marketing,
//             SEO and web growth.
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {visibleBlogs.map((blog) => (
//             <article
//               key={blog._id}
//               className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 flex flex-col"
//             >
//               {blog.coverImage && (
//                 <img
//                   src={blog.coverImage}
//                   alt={blog.title}
//                   className="w-full h-48 object-cover"
//                 />
//               )}

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
//                   className="mt-auto text-blue-400 font-medium"
//                 >
//                   Read More →
//                 </Link>
//               </div>
//             </article>
//           ))}
//         </div>

//         {visibleCount < blogs.length && (
//           <div className="mt-16 text-center">
//             <button
//               onClick={() =>
//                 setVisibleCount((prev) => prev + LOAD_MORE_COUNT)
//               }
//               className="px-10 mb-6 py-3 rounded-xl font-semibold bg-blue-600 hover:bg-blue-700"
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

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../utils/api";

// function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   const INITIAL_COUNT = 6;     // slightly more initial cards feel premium
//   const LOAD_MORE_COUNT = 6;
//   const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

//   useEffect(() => {
//     api
//       .get("/blogs/public")
//       .then((res) => {
//         console.log("API RESPONSE LENGTH:", res.data.length);
//         setBlogs(res.data);
//       })
//       .catch((err) => {
//         console.error("API ERROR:", err);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) {
//     return (
//       <div className="bg-black text-white min-h-screen flex items-center justify-center">
//         <div className="flex flex-col items-center gap-4">
//           <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//           <p className="text-lg">Loading amazing blogs…</p>
//         </div>
//       </div>
//     );
//   }

//   const visibleBlogs = blogs.slice(0, visibleCount);

//   return (
//     <div className="bg-gradient-to-b from-black via-zinc-950 to-black text-white min-h-screen pt-28 pb-20 px-5 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* HEADER - more premium typography */}
//         <div className="mb-16 md:mb-20 text-center">
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-5">
//             Our Blogs
//           </h1>
//           <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto font-light">
//             Insights, strategies & cutting-edge tips on digital marketing, SEO, and explosive web growth.
//           </p>
//         </div>

//         {/* BLOG GRID */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
//           {visibleBlogs.map((blog) => (
//             <article
//               key={blog._id}
//               className="
//                 group relative bg-zinc-900/60 backdrop-blur-xl 
//                 border border-zinc-800/80 rounded-2xl overflow-hidden
//                 transition-all duration-500 ease-out
//                 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-900/30
//                 hover:border-blue-500/40
//               "
//             >
//               {/* IMAGE with overlay gradient */}
//               {blog.coverImage ? (
//                 <div className="relative aspect-[16/9] overflow-hidden">
//                   <img
//                     src={blog.coverImage}
//                     alt={blog.title}
//                     className="
//                       w-full h-full object-cover transition-transform duration-700
//                       group-hover:scale-110
//                     "
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
//                 </div>
//               ) : (
//                 <div className="aspect-[16/9] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
//                   <span className="text-zinc-600 text-xl font-bold">No Cover</span>
//                 </div>
//               )}

//               {/* CONTENT */}
//               <div className="p-6 md:p-7 flex flex-col flex-1">
//                 <h2 className="text-2xl font-bold mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
//                   {blog.title}
//                 </h2>

//                 <p className="text-xs text-zinc-500 mb-4 tracking-wide">
//                   {new Date(blog.createdAt).toLocaleDateString("en-IN", {
//                     year: "numeric",
//                     month: "long",
//                     day: "numeric",
//                   })}
//                 </p>

//                 <p className="text-zinc-300 text-base leading-relaxed line-clamp-3 mb-6 flex-1">
//                   {(blog.contentHTML || "")
//                     .replace(/<[^>]+>/g, "")
//                     .slice(0, 140)}
//                   …
//                 </p>

//                 <Link
//                   to={`/blogs/${blog.slug}`}
//                   className="
//                     mt-auto inline-flex items-center gap-2
//                     text-blue-400 font-semibold tracking-wide
//                     hover:text-blue-300 transition-colors duration-300
//                     group-hover:translate-x-1
//                   "
//                 >
//                   Read More
//                   <span className="transition-transform group-hover:translate-x-1">→</span>
//                 </Link>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* LOAD MORE - gradient button with pulse */}
//         {visibleCount < blogs.length && (
//           <div className="mt-16 md:mt-20 text-center">
//             <button
//               onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_COUNT)}
//               className="
//                 relative px-10 py-4 rounded-full font-bold text-lg
//                 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600
//                 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700
//                 shadow-lg shadow-blue-900/40 hover:shadow-blue-700/60
//                 transition-all duration-500 transform hover:scale-105
//                 overflow-hidden
//               "
//             >
//               <span className="relative z-10">Load More Blogs</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Blogs;
// import { useEffect, useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import api from "../utils/api";

// /* =========================
//    BRANDNATIC SERVICE CATEGORIES
// ========================= */
// const BRANDNATIC_CATEGORIES = [
//   "Digital Marketing",
//   "SEO Marketing",
//   "AI Automation",
//   "Performance Marketing",
//   "Lead Generation",
//   "Web Development",
//   "Software Development",
// ];

// /* =========================
//    CATEGORY INFERENCE (SINGLE SOURCE OF TRUTH)
// ========================= */
// function inferCategory(blog) {
//   const text = (
//     blog.title +
//     " " +
//     (blog.contentHTML || "")
//   ).toLowerCase();

//   if (text.includes("seo")) return "SEO Marketing";
//   if (text.includes("ai") || text.includes("automation"))
//     return "AI Automation";
//   if (text.includes("ppc") || text.includes("ads"))
//     return "Performance Marketing";
//   if (text.includes("lead"))
//     return "Lead Generation";
//   if (text.includes("web") || text.includes("frontend") || text.includes("react"))
//     return "Web Development";
//   if (text.includes("software") || text.includes("saas") || text.includes("application"))
//     return "Software Development";

//   return "Digital Marketing";
// }
// function getBlogCategory(blog) {
//   // 1️⃣ real category from backend
//   if (blog.category && blog.category !== "Uncategorized") {
//     return blog.category;
//   }

//   // 2️⃣ fallback inference
//   return inferCategory(blog);
// }



// function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [showAllCategories, setShowAllCategories] = useState(false);

//   const INITIAL_COUNT = 6;
//   const LOAD_MORE_COUNT = 6;
//   const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

//   useEffect(() => {
//     api.get("/blogs/public")
//       .then((res) => setBlogs(res.data))
//       .finally(() => setLoading(false));
//   }, []);

//   /* =========================
//      CATEGORY COUNTS
//   ========================= */
//   const categories = useMemo(() => {
//     const map = {};
//     BRANDNATIC_CATEGORIES.forEach((c) => (map[c] = 0));

//     blogs.forEach((blog) => {
//       const cat = getBlogCategory(blog);
//       map[cat]++;
//     });

//     return map;
//   }, [blogs]);

//   /* =========================
//      FILTERED BLOGS
//   ========================= */
//   const filteredBlogs = useMemo(() => {
//     return blogs.filter((blog) => {
//       const text =
//         (blog.title + " " + (blog.contentHTML || ""))
//           .replace(/<[^>]+>/g, "")
//           .toLowerCase();

//       const matchesSearch = text.includes(search.toLowerCase());
//       const blogCategory = getBlogCategory(blog);

//       const matchesCategory =
//         activeCategory === "All" || blogCategory === activeCategory;

//       return matchesSearch && matchesCategory;
//     });
//   }, [blogs, search, activeCategory]);

//   const visibleBlogs = filteredBlogs.slice(0, visibleCount);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-black flex items-center justify-center text-white">
//         Loading amazing blogs…
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-b from-black via-zinc-950 to-black text-white min-h-screen pt-28 pb-20 px-5 md:px-8">
//       <div className="max-w-7xl mx-auto">

//         {/* ================= SEARCH + CATEGORIES ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="grid md:grid-cols-[1fr_300px] gap-14 mb-20"
//         >

//           {/* 🔍 SEARCH */}
//           <div>
//             <h3 className="text-xl font-semibold mb-5">Search</h3>

//             <div className="
//               relative flex items-center
//               bg-zinc-950 border-2 border-zinc-700
//               rounded-full
//               focus-within:border-cyan-400
//               focus-within:shadow-[0_0_35px_rgba(34,211,238,0.4)]
//               transition
//             ">
//               <input
//                 value={search}
//                 onChange={(e) => {
//                   setSearch(e.target.value);
//                   setVisibleCount(INITIAL_COUNT);
//                 }}
//                 placeholder="Search blogs, SEO, AI, automation…"
//                 className="
//                   w-full px-6 py-4 bg-transparent
//                   text-white placeholder-zinc-400
//                   focus:outline-none
//                 "
//               />
//               <div className="
//                 absolute right-2 h-12 w-12
//                 flex items-center justify-center
//                 rounded-full
//                 bg-gradient-to-r from-pink-500 to-rose-500
//                 shadow-lg shadow-pink-500/40
//                 animate-pulse
//               ">
//                 🔍
//               </div>
//             </div>
//           </div>

//           {/* 🗂 CATEGORIES */}
//           <div>
//             <h3 className="text-xl font-semibold mb-5">Categories</h3>

//             <ul className="space-y-4">
//               <li
//                 onClick={() => {
//                   setActiveCategory("All");
//                   setVisibleCount(INITIAL_COUNT);
//                 }}
//                 className={`cursor-pointer transition ${
//                   activeCategory === "All"
//                     ? "text-cyan-400 font-semibold"
//                     : "text-zinc-400 hover:text-white"
//                 }`}
//               >
//                 All ({blogs.length})
//               </li>

//               {Object.entries(categories)
//                 .filter(([, count]) => count > 0)
//                 .slice(0, showAllCategories ? undefined : 5)
//                 .map(([cat, count]) => (
//                   <li
//                     key={cat}
//                     onClick={() => {
//                       setActiveCategory(cat);
//                       setVisibleCount(INITIAL_COUNT);
//                     }}
//                     className={`cursor-pointer transition ${
//                       activeCategory === cat
//                         ? "text-cyan-400 font-semibold"
//                         : "text-zinc-400 hover:text-white"
//                     }`}
//                   >
//                     {cat} ({count})
//                   </li>
//                 ))}
//             </ul>

//             {Object.keys(categories).length > 5 && (
//               <button
//                 onClick={() => setShowAllCategories(!showAllCategories)}
//                 className="mt-6 text-sm font-semibold text-blue-400 hover:text-blue-300"
//               >
//                 {showAllCategories ? "Show Less" : "View All Categories →"}
//               </button>
//             )}
//           </div>
//         </motion.div>

//         {/* ================= BLOG GRID ================= */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {visibleBlogs.length === 0 && (
//             <div className="col-span-full text-center text-zinc-400 py-24">
//               No blogs found for this filter.
//             </div>
//           )}

//           {visibleBlogs.map((blog, i) => (
//             <motion.article
//               key={blog._id}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.05 }}
//               whileHover={{ y: -8, scale: 1.03 }}
//               className="
//                 group bg-zinc-900/60 backdrop-blur-xl
//                 border border-zinc-800 rounded-2xl overflow-hidden
//                 hover:border-cyan-400/40
//                 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
//               "
//             >
//               {blog.coverImage && (
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={blog.coverImage}
//                     alt={blog.title}
//                     className="
//                       w-full aspect-[16/9] object-cover
//                       transition-transform duration-700
//                       group-hover:scale-110
//                     "
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                 </div>
//               )}

//               <div className="p-6 flex flex-col">
//                 <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-cyan-400 transition">
//                   {blog.title}
//                 </h2>

//                 <p className="text-zinc-400 text-sm line-clamp-3 mb-6">
//                   {(blog.contentHTML || "")
//                     .replace(/<[^>]+>/g, "")
//                     .slice(0, 140)}
//                   …
//                 </p>

//                 <Link
//                   to={`/blogs/${blog.slug}`}
//                   className="mt-auto text-cyan-400 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
//                 >
//                   Read More →
//                 </Link>
//               </div>
//             </motion.article>
//           ))}
//         </div>

//         {/* LOAD MORE */}
//         {visibleCount < filteredBlogs.length && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="mt-20 text-center"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setVisibleCount((p) => p + LOAD_MORE_COUNT)}
//               className="
//                 px-12 py-4 rounded-full font-bold text-lg
//                 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600
//                 shadow-lg shadow-cyan-500/25
//               "
//             >
//               Load More Blogs
//             </motion.button>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Blogs;




// git main blogs 
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


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../utils/api";

// function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const INITIAL_COUNT = 4;
//   const LOAD_MORE_COUNT = 5;
//   const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

//   useEffect(() => {
//     api
//       .get("/blogs/public") // 🔥 ALL BLOGS API
//       .then((res) => {
//         console.log("API RESPONSE LENGTH:", res.data.length);
//         setBlogs(res.data);
//       })
//       .catch((err) => {
//         console.error("API ERROR:", err);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) {
//     return (
//       <div className="bg-black text-white min-h-screen flex items-center justify-center">
//         Loading blogs…
//       </div>
//     );
//   }

//   const visibleBlogs = blogs.slice(0, visibleCount);

//   return (
//     <div className="bg-black text-white pt-28 px-6 min-h-screen">
//       <div className="max-w-7xl mx-auto">

//         <div className="mb-14 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Our Blogs
//           </h1>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Insights, tips & strategies on digital marketing,
//             SEO and web growth.
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {visibleBlogs.map((blog) => (
//             <article
//               key={blog._id}
//               className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 flex flex-col"
//             >
//               {blog.coverImage && (
//                 <img
//                   src={blog.coverImage}
//                   alt={blog.title}
//                   className="w-full h-48 object-cover"
//                 />
//               )}

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
//                   className="mt-auto text-blue-400 font-medium"
//                 >
//                   Read More →
//                 </Link>
//               </div>
//             </article>
//           ))}
//         </div>

//         {visibleCount < blogs.length && (
//           <div className="mt-16 text-center">
//             <button
//               onClick={() =>
//                 setVisibleCount((prev) => prev + LOAD_MORE_COUNT)
//               }
//               className="px-10 mb-6 py-3 rounded-xl font-semibold bg-blue-600 hover:bg-blue-700"
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
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../utils/api";
import { User } from "lucide-react";

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
          <div className="relative max-w-3xl">
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
                <h2 className="text-lg font-bold mb-3 line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-xs text-zinc-400 mb-2">
 <div className="flex items-center gap-2 text-sm text-zinc-400 mt-3">
  <User size={16} className="text-cyan-400" />
  <span>
    By <span className="text-white font-medium">
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
