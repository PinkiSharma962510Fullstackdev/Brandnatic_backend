// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../../admin/utils/api";


// const getFirstImage = (html) => {
//   if (!html) return null;

//   const match = html.match(/<img[^>]+src="([^">]+)"/);
//   return match ? match[1] : null;
// };

// function HomeBlogsSection() {
  
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await api.get("/blogs/public");
//         setBlogs(res.data.slice(0, 3)); // latest 3
//       } catch (err) {
//         console.error("Failed to fetch blogs", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   if (loading) {
//     return (
//       <section className="py-20 bg-black text-center text-zinc-400">
//         Loading blogs...
//       </section>
//     );
//   }

//   if (!blogs.length) return null;

//   return (
//     <section className="py-24 bg-black text-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* HEADER */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">
//             Latest Insights ✨
//           </h2>
//           <p className="text-zinc-400 max-w-2xl mx-auto">
//             Explore our latest blogs on digital growth, marketing,
//             technology and business strategies.
//           </p>
//         </div>

//         {/* BLOG GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {blogs.map((blog) => {
//   const image = getFirstImage(blog.contentHTML);

//   return (
//     <Link
//       key={blog._id}
//       to={`/blogs/${blog.slug}`}
//       className="
//         group bg-zinc-900 rounded-2xl overflow-hidden
//         border border-zinc-800
//         hover:border-blue-500
//         transition-all duration-300
//         hover:-translate-y-2
//         hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
//       "
//     >
//       {/* IMAGE */}
//       {image && (
//         <div className="h-48 overflow-hidden">
//           <img
//             src={image}
//             alt={blog.title}
//             className="
//               w-full h-full object-cover
//               group-hover:scale-105 transition duration-500
//             "
//             loading="lazy"
//           />
//         </div>
//       )}

//       {/* CONTENT */}
//       <div className="p-6">
//         <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
//           {blog.title}
//         </h3>

//         <p className="text-zinc-400 text-sm leading-relaxed line-clamp-4">
//           {blog.contentHTML.replace(/<[^>]*>/g, "")}
//         </p>

//         <div className="mt-6 text-blue-400 text-sm font-medium">
//           Read More →
//         </div>
//       </div>
//     </Link>
//   );
// })}

          
//         </div>

//         {/* VIEW ALL */}
//         <div className="text-center mt-16">
//           <Link
//             to="/blogs"
//             className="
//               inline-block px-8 py-3 rounded-lg
//               bg-blue-600 hover:bg-blue-700
//               transition font-medium
//             "
//           >
//             View All Blogs
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HomeBlogsSection;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../../admin/utils/api";

// const getFirstImage = (html) => {
//   if (!html) return null;
//   const match = html.match(/<img[^>]+src="([^">]+)"/);
//   return match ? match[1] : null;
// };

// function HomeBlogsSection() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(async () => {
//       try {
//         const res = await api.get("/blogs/public");
//         setBlogs(res.data.slice(0, 3)); // latest 3
//       } catch (err) {
//         console.error("Failed to fetch blogs", err);
//       } finally {
//         setLoading(false);
//       }
//     }, 2500); // ✅ AFTER LCP (Hero + Services load first)

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <section className="py-20 bg-black text-center text-zinc-400">
//         Loading blogs...
//       </section>
//     );
//   }

//   if (!blogs.length) return null;

//   return (
//     <section className="py-24 bg-black text-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* HEADER */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">
//             Latest Insights ✨
//           </h2>
//           <p className="text-zinc-400 max-w-2xl mx-auto">
//             Explore our latest blogs on digital growth, marketing,
//             technology and business strategies.
//           </p>
//         </div>

//         {/* BLOG GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {blogs.map((blog) => {
//             const image = getFirstImage(blog.contentHTML);

//             return (
//               <Link
//                 key={blog._id}
//                 to={`/blogs/${blog.slug}`}
//                 className="
//                   group bg-zinc-900 rounded-2xl overflow-hidden
//                   border border-zinc-800
//                   hover:border-blue-500
//                   transition-all duration-300
//                   hover:-translate-y-2
//                   hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
//                 "
//               >
//                 {/* IMAGE */}
//                 {image && (
//                   <div className="h-48 overflow-hidden">
//                     <img
//                       src={image}
//                       alt={blog.title}
//                       className="
//                         w-full h-full object-cover
//                         group-hover:scale-105 transition duration-500
//                       "
//                       loading="lazy"
//                       decoding="async"
//                     />
//                   </div>
//                 )}

//                 {/* CONTENT */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
//                     {blog.title}
//                   </h3>

//                   <p className="text-zinc-400 text-sm leading-relaxed line-clamp-4">
//                     {blog.contentHTML.replace(/<[^>]*>/g, "")}
//                   </p>

//                   <div className="mt-6 text-blue-400 text-sm font-medium">
//                     Read More →
//                   </div>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>

//         {/* VIEW ALL */}
//         <div className="text-center mt-16">
//           <Link
//             to="/blogs"
//             className="
//               inline-block px-8 py-3 rounded-lg
//               bg-blue-600 hover:bg-blue-700
//               transition font-medium
//             "
//           >
//             View All Blogs
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
// s
// export default HomeBlogsSection;




import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../admin/utils/api";

function HomeBlogsSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        // backend already limit kar raha hai
        const res = await api.get("/blogs/public?limit=3");
        setBlogs(res.data);
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      } finally {
        setLoading(false);
      }
    }, 2500); // after hero/LCP

    return () => clearTimeout(timer);
  }, []);

  if (loading) return null;
  if (!blogs.length) return null;

  return (
    <section className="py-24 bg-black text-white">
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
                group bg-zinc-900 rounded-2xl overflow-hidden
                border border-zinc-800
                hover:border-blue-500
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
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
                      group-hover:scale-105 transition duration-500
                    "
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
                  {blog.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-4">
                  {blog.excerpt}
                </p>

                <div className="mt-6 text-blue-400 text-sm font-medium">
                  Read More →
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
              bg-blue-600 hover:bg-blue-700
              transition font-medium
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
