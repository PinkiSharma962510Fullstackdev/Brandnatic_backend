// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import EnquiryModal from "../Navbar/ContactModal";

// /* ---------- SLIDES DATA ---------- */
// const slides = [
//   {
//     id: 1,
//     image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2000&auto=format&fit=crop",
//     title: "AI Marketing",
//     desc: "We help brands generate consistent, high-quality leads using AI-powered ads, data-driven targeting, and performance marketing strategies.",
//     label: "AI Marketing",
//   },
//   {
//     id: 2,
//     image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2000&auto=format&fit=crop",
//     title: "Marketing Automation",
//     desc: "Smart automation workflows, CRM integrations, and funnels that work 24/7 to nurture leads and maximize ROI.",
//     label: "Automation",
//   },
//   {
//     id: 3,
//     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
//     title: "Web Development",
//     desc: "High-performance websites and landing pages built for speed, SEO, conversions, and long-term scalability.",
//     label: "Web Development",
//   },
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);
//   const [openEnquiry, setOpenEnquiry] = useState(false);

//   /* AUTO SLIDE */
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 6500);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//       <section className="relative w-full min-h-[90vh] overflow-hidden bg-black">

//         {/* 🔥 BACKGROUND IMAGE SLIDER */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={slides[index].id}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.2 }}
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${slides[index].image})` }}
//           />
//         </AnimatePresence>

//         {/* DARK OVERLAY */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40 z-[1]" />

//         {/* CONTENT */}
//         <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">

//           {/* SMALL LINE */}
//           <div className="flex items-center gap-3 mb-6">
//             <span className="w-10 h-[2px] bg-[#28B8DF]" />
//             <p className="text-sm tracking-widest uppercase text-gray-300">
//               AI Digital Marketing Agency
//             </p>
//           </div>

//           {/* HEADING */}
//           <motion.h1
//             key={`title-${index}`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-3xl"
//           >
//             {slides[index].title}
//           </motion.h1>

//           {/* DESCRIPTION */}
//           <motion.p
//             key={`desc-${index}`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="mt-6 max-w-xl text-lg lg:text-xl text-gray-300 leading-relaxed"
//           >
//             {slides[index].desc}
//           </motion.p>

//           {/* CTA */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//             onClick={() => setOpenEnquiry(true)}
//             className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full
//               bg-gradient-to-r from-[#28B8DF] to-[#1aa9f2]
//               text-white font-semibold text-lg
//               shadow-[0_15px_40px_rgba(40,184,223,0.35)]"
//           >
//             Book A Call Now
//             <span className="text-xl">→</span>
//           </motion.button>
//         </div>

//         {/* ✅ BOTTOM LEFT LABEL */}
//         <div className="absolute bottom-8 left-8 text-xs text-white/50 tracking-widest uppercase z-10">
//           {slides[index].label}
//         </div>

//         {/* ✅ TRENDING STRIP */}
//         <div className="absolute bottom-0 w-full bg-[#252c36] border-t border-white/10 z-10">
//           <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6 text-sm text-gray-300">
//             <span className="text-white font-semibold">Trending:</span>

//             {["AI Marketing", "Lead Generation", "Web Development", "Automation"].map(
//               (item) => (
//                 <span
//                   key={item}
//                   className="px-4 py-1 border border-white/30 rounded-full"
//                 >
//                   {item}
//                 </span>
//               )
//             )}
//           </div>
//         </div>
//       </section>

//       {/* MODAL */}
//       <EnquiryModal
//         open={openEnquiry}
//         onClose={() => setOpenEnquiry(false)}
//       />
//     </>
//   );
// }

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import EnquiryModal from "../Navbar/ContactModal";

const slides = [
 {
    id: 1,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    title: "AI Marketing",
    desc: "We help brands generate high-quality leads using AI-powered strategies.",
    label: "AI Marketing",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    title: "Marketing Automation",
    desc: "Smart automation workflows, CRM integrations, and funnels that work 24/7 to nurture leads and maximize ROI.",
    label: "Automation",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2000&auto=format&fit=crop",
    
    title: "Web Development",
    desc: "High-performance websites and landing pages built for speed, SEO, conversions, and long-term scalability.",
    label: "Web Development",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-black">
      {/* Background Slider – Slide Left → Right */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={slides[index].id}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 1.1,
              ease: [0.43, 0.13, 0.23, 0.96], // nice smooth cubic-bezier
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[index].image})` }}
          />
        </AnimatePresence>
      </div>

      {/* Dark overlay – much softer */}
      <div className="absolute inset-0 bg-black/55 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-[2px] bg-[#28B8DF]" />
          <h1 className="text-sm tracking-widest uppercase text-gray-300">
            BRANDNATIC | AI DIGITAL MARKETING AGENCY IN NOIDA & DELHI NCR
          </h1>
        </div>

        <motion.h1
          key={`title-${index}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-3xl"
        >
          {slides[index].title}
        </motion.h1>

        <motion.p
          key={`desc-${index}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 max-w-xl text-lg lg:text-xl text-gray-300 leading-relaxed"
        >
          {slides[index].desc}
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => {/* open modal */}}
          className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#28B8DF] to-[#1aa9f2] text-white font-semibold text-lg shadow-[0_15px_40px_rgba(40,184,223,0.35)]"
        >
          Book A Call Now
          <span className="text-xl">→</span>
        </motion.button>
      </div>

      {/* Bottom label & trending strip remain the same */}
      <div className="absolute bottom-8 left-8 text-xs text-white/50 tracking-widest uppercase z-10">
        {slides[index].label}
      </div>

      {/* Trending strip ... */}
    </section>
  );
}