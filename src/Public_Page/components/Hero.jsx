



// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// const slides = [
//   {
//     id: 1,
//     image: "/hero_img/Marketing_Automation.jpg",
//     title: "Marketing Automation",
//     desc: "Smart automation workflows, CRM integrations, and funnels that work 24/7.",
//     label: "Automation",
//   },
//   {
//     id: 2,
//     image: "/hero_img/AI_Marketing.jpg",
//     title: "AI Marketing",
//     desc: "We help brands generate high-quality leads using AI-powered strategies.",
//     label: "AI Marketing",
//   },
//   {
//     id: 3,
//     image: "/hero_img/Web_Development.jpg",
//     title: "Web Development",
//     desc: "High-performance websites and landing pages built for speed, SEO, conversions, and long-term scalability.",
//     label: "Web Development",
//   },
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 6500);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-full min-h-[90vh] overflow-hidden bg-black">

//       {/* 🔥 BACKGROUND IMAGE (LCP FIXED) */}
//       <div className="absolute inset-0">
//         <AnimatePresence initial={false}>
//           <motion.img
//             key={slides[index].id}
//             src={slides[index].image}
//             alt={slides[index].title}
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={index === 0 ? false : { x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "-100%" }}
//             transition={{
//               duration: 1.1,
//               ease: [0.43, 0.13, 0.23, 0.96],
//             }}
//             loading={index === 0 ? "eager" : "lazy"}
//             fetchpriority={index === 0 ? "high" : "auto"}
//             decoding="async"
//           />
//         </AnimatePresence>
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/45 z-[1]" />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
//         <div className="flex items-center gap-3 mb-6">
//           <span className="w-10 h-[2px] bg-[#28B8DF]" />
//           <h1 className="text-sm tracking-widest uppercase text-gray-300">
//             BRANDNATIC | AI DIGITAL MARKETING AGENCY IN NOIDA & DELHI NCR
//           </h1>
//         </div>

//         <motion.h1
//           key={`title-${index}`}
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-3xl"
//         >
//           {slides[index].title}
//         </motion.h1>

//         <motion.p
//           key={`desc-${index}`}
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           className="mt-6 max-w-xl text-lg lg:text-xl text-gray-300 leading-relaxed"
//         >
//           {slides[index].desc}
//         </motion.p>

//         <motion.button
//         aria-label="Book a call with Brandnatic"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.97 }}
//           className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#28B8DF] to-[#1aa9f2] text-white font-semibold text-lg shadow-[0_15px_40px_rgba(40,184,223,0.35)]"
//         >
//           Book A Call Now →
//         </motion.button>
//       </div>

//       <div className="absolute bottom-8 left-8 text-xs text-white/50 tracking-widest uppercase z-10">
//         {slides[index].label}
//       </div>
//     </section>
//   );
// }



import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/hero_img/Marketing_Automation.webp",
    title: "Marketing Automation",
    desc: "Smart automation workflows, CRM integrations, and funnels that work 24/7.",
    label: "Automation",
  },
  {
    id: 2,
    image: "/hero_img/AI_Marketing.webp",
    title: "AI Marketing",
    desc: "We help brands generate high-quality leads using AI-powered strategies.",
    label: "AI Marketing",
  },
  {
    id: 3,
    image: "/hero_img/Web_Development.webp",
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
      {/* 🔥 BACKGROUND IMAGE SLIDER (PERFORMANCE SAFE) */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[index].id}
            src={slides[index].image}
            alt={slides[index].title}
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 1.1,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            loading="eager"               // 🔥 hero images should NOT be lazy
            fetchpriority={index === 0 ? "high" : "auto"}
            decoding="async"
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 z-[1]" />

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
          aria-label="Book a call with Brandnatic"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full
          bg-gradient-to-r from-[#28B8DF] to-[#1aa9f2]
          text-white font-semibold text-lg
          shadow-[0_15px_40px_rgba(40,184,223,0.35)]"
        >
          Book A Call Now →
        </motion.button>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-8 left-8 text-xs text-white/50 tracking-widest uppercase z-10">
        {slides[index].label}
      </div>
    </section>
  );
}
