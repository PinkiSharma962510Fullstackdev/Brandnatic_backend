// import { motion } from "framer-motion";
// import { useState } from "react";
// import ContactModal from "../Navbar/ContactModal";

// const caseStudies = [
//   {
//     brand: "E-Commerce Brand",
//     title: "AI-Powered Revenue Growth",
//     result: "3.2× ROAS · 180% Traffic Growth",
//     media: "/services_cart_videos/cart2.mp4",
//   },
//   {
//     brand: "Real Estate Company",
//     title: "High-Intent Lead Generation System",
//     result: "220% Qualified Leads · Faster Closures",
//     media: "/services_cart_videos/cart3.mp4",
//   },
//   {
//     brand: "Startup / SaaS",
//     title: "SEO & Scalable Web Development",
//     result: "Top Rankings · 4× Inbound Leads",
//     media: "/services_cart_videos/cart5.mp4",
//   },
//   {
//     brand: "Local Business",
//     title: "Local SEO & Social Growth",
//     result: "Top 3 Local Rankings · Daily Inquiries",
//     media: "/services_cart_videos/cart6.mp4",
//   },
// ];

// export default function CaseStudies() {
//   const [contactOpen, setContactOpen] = useState(false);
//   return (
//     <section
//       className="
//         relative 
//         z-[999] 
//         min-h-screen 
//         w-full 
//         bg-black 
//         md:py-10
//       "
//     >
//       <div className="relative z-[999] max-w-7xl mx-auto px-6">

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mb-20"
//         >
//           <h2 className="text-5xl font-bold text-white">
//             Case <span className="text-[#1AA9F2]">Studies</span>
//           </h2>
//           <p className="mt-4 text-gray-300 max-w-2xl">
//             Real brands. Real growth. See how Brandnatic delivers measurable
//             results using AI-powered marketing, automation, and development.
//           </p>
//         </motion.div>

//         {/* GRID */}
//         <div className="grid md:grid-cols-2 gap-10">
//           {caseStudies.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="group relative h-[420px] rounded-3xl overflow-hidden bg-black shadow-xl"
//             >
//               <video
//   src={item.media}
//   autoPlay
//   muted
//   loop
//   playsInline
//   preload="metadata"
//   width="600"
//   height="420"
//   style={{ aspectRatio: "600 / 420" }}
//   className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
// />


//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

//               <div className="absolute bottom-0 p-8 z-10">
//                 <span className="text-xs uppercase tracking-wider text-white/70">
//                   {item.brand}
//                 </span>

//                 <h3 className="mt-2 text-2xl font-semibold text-white">
//                   {item.title}
//                 </h3>

//                 <p className="mt-3 text-white/80 text-sm">
//                   {item.result}
//                 </p>

//                 <span className="mt-5 inline-block text-[#1AA9F2] font-medium opacity-0 group-hover:opacity-100 transition">
//                   View Case Study →
//                 </span>
//               </div>

//               <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-[#1AA9F2]/40 transition-all duration-500" />
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="mt-24 text-center"
//         >
         
//           <button
//   onClick={() => setContactOpen(true)}
//   className="px-10 py-4 rounded-full bg-[#1AA9F2] text-white font-semibold shadow-lg hover:scale-105 transition cursor-pointer"
// >
//   Book a Strategy Call
// </button>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { useState } from "react";
import ContactModal from "../Navbar/ContactModal";

const caseStudies = [
  {
    brand: "E-Commerce Brand",
    title: "AI-Powered Revenue Growth",
    result: "3.2× ROAS · 180% Traffic Growth",
    image: "/services_cart_img/ecommerce-solution.webp",
  },
  {
    brand: "Real Estate Company",
    title: "High-Intent Lead Generation System",
    result: "220% Qualified Leads · Faster Closures",
    image: "/services_cart_img/lead-generation.webp",
  },
  {
    brand: "Startup / SaaS",
    title: "SEO & Scalable Web Development",
    result: "Top Rankings · 4× Inbound Leads",
    image: "/services_cart_img/website-design-development.webp",
  },
  {
    brand: "Local Business",
    title: "Local SEO & Social Growth",
    result: "Top 3 Local Rankings · Daily Inquiries",
    image: "/services_cart_img/seo-smo.webp",
  },
];

export default function CaseStudies() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-black via-[#05080f] to-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl font-bold text-white">
            Case <span className="text-[#1AA9F2]">Studies</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Real brands. Real growth. Discover how Brandnatic delivers measurable
            results using AI-powered marketing, automation, and development.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12">
          {caseStudies.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -12 }}
              className="
                group relative h-[420px]
                rounded-3xl overflow-hidden
                shadow-2xl cursor-pointer
              "
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="
                  absolute inset-0 w-full h-full object-cover
                  transition-transform duration-1000 ease-out
                  group-hover:scale-110
                "
              />

              {/* PREMIUM OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/95 via-black/60 to-black/20
                  group-hover:from-black/97 group-hover:via-black/70
                  transition-all duration-500
                "
              />

              {/* CONTENT CARD */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div
                  className="
                    backdrop-blur-lg bg-white/5
                    rounded-2xl p-6
                    border border-white/15
                    shadow-xl
                    transition-all duration-500
                    group-hover:bg-white/10
                  "
                >
                  <span className="text-xs uppercase tracking-widest text-white/70">
                    {item.brand}
                  </span>

                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-white/80 text-sm">
                    {item.result}
                  </p>

                  <span className="
                    mt-5 inline-block text-[#1AA9F2] font-medium
                    opacity-0 translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-500
                  ">
                    View Case Study →
                  </span>
                </div>
              </div>

              {/* PREMIUM BORDERS + GLOW */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-[#1AA9F2]/40 transition pointer-events-none" />
              <div className="absolute inset-[1px] rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#1AA9F2]/40 via-transparent to-[#1AA9F2]/40 pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_90px_rgba(26,169,242,0.35)] pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-28 text-center"
        >
          <button
            onClick={() => setContactOpen(true)}
            className="
              px-12 py-4 rounded-full
              bg-[#1AA9F2] text-white font-semibold
              shadow-[0_20px_60px_rgba(26,169,242,0.45)]
              hover:scale-105 transition
            "
          >
            Book a Strategy Call
          </button>
        </motion.div>

        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </section>
  );
}
