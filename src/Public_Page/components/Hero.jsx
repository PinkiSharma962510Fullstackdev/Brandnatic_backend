



// // 
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const slides = [
//   {
//     image: "/hero_img/Marketing_Automation.webp",
//     title: "Marketing Automation",
//     desc: "Smart automation workflows, CRM integrations, and funnels that work 24/7.",
//     label: "Automation",
//   },
//   {
//     image: "/hero_img/AI_Marketing.webp",
//     title: "AI Marketing",
//     desc: "We help brands generate high-quality leads using AI-powered strategies.",
//     label: "AI Marketing",
//   },
//   {
//     image: "/hero_img/Web_Development.webp",
//     title: "Web Development",
//     desc: "High-performance websites and landing pages built for speed, SEO, conversions, and scalability.",
//     label: "Web Development",
//   },
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((i) => (i + 1) % slides.length);
//     }, 6500);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-full min-h-[90vh] overflow-hidden bg-black">

//       {/* ✅ STATIC LCP IMAGE (NO ANIMATION EVER) */}
//       <img
//         src={slides[0].image}
//         width="1600"
//         height="900"
//         loading="eager"
//         fetchpriority="high"
//         decoding="async"
//         alt="AI Powered Digital Marketing"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* ✅ SLIDING FAKE LAYER (NOT LCP) */}
//       <div
//         className="absolute inset-0 will-change-transform transition-transform duration-[1100ms] ease-out"
//         style={{
//           transform: `translateX(-${index * 100}%)`,
//           display: "flex",
//         }}
//       >
//         {slides.map((slide, i) => (
//           <div
//             key={i}
//             className="min-w-full h-full"
//             style={{
//               backgroundImage: `url(${slide.image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           />
//         ))}
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/45 z-[1]" />

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">

//         <div className="flex items-center gap-3 mb-6">
//           <span className="w-10 h-[2px] bg-[#28B8DF]" />
//           <p className="text-sm tracking-widest uppercase text-gray-300">
//             BRANDNATIC | AI DIGITAL MARKETING AGENCY IN NOIDA & DELHI NCR
//           </p>
//         </div>

//         <motion.h1
//           key={slides[index].title}
//           initial={{ x: -30, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white max-w-3xl"
//         >
//           {slides[index].title}
//         </motion.h1>

//         <motion.p
//           key={slides[index].desc}
//           initial={{ x: -30, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.15 }}
//           className="mt-6 max-w-xl text-lg text-gray-300"
//         >
//           {slides[index].desc}
//         </motion.p>

//         <motion.button
//           aria-label="Book a call with Brandnatic"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.97 }}
//           className="mt-10 px-8 py-4 rounded-full
//           bg-gradient-to-r from-[#28B8DF] to-[#1aa9f2]
//           text-white font-semibold text-lg"
//         >
//           Book A Call Now →
//         </motion.button>
//       </div>

//       {/* Label */}
//       <div className="absolute bottom-8 left-8 text-xs text-white/50 uppercase tracking-widest z-10">
//         {slides[index].label}
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/hero_img/AI_Marketing.webp",
    title: "AI Marketing",
    desc: "We help brands generate high-quality leads using AI-powered strategies.",
    label: "AI Marketing",
  },
  {
    image: "/hero_img/Web_Development.webp",
    title: "Web Development",
    desc: "High-performance websites built for speed, SEO, conversions, and scalability.",
    label: "Web Development",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* ✅ PROPER MOBILE DETECT */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ✅ DESKTOP AUTO SLIDE */
  useEffect(() => {
    if (isMobile) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setIndex((i) => (i + 1) % slides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [isMobile]);

  useEffect(() => {
    if (!isTransitioning) return;
    const t = setTimeout(() => setIsTransitioning(false), 1200);
    return () => clearTimeout(t);
  }, [isTransitioning]);

  const current = slides[index];
  const next = slides[(index + 1) % slides.length];

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-black">

      {/* ✅ STATIC LCP IMAGE (BOTTOM LAYER) */}
      <img
        src={slides[0].image}
        width="1600"
        height="900"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        alt="AI Powered Digital Marketing - Brandnatic"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* ✅ DESKTOP CAROUSEL (MIDDLE LAYER) */}
      {!isMobile && (
        <div
          className="absolute inset-0 z-[1]"
          style={{
            transform: isTransitioning ? "translateX(-100%)" : "translateX(0)",
            transition: isTransitioning
              ? "transform 1100ms ease-out"
              : "none",
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${current.image})` }}
          />
          <div
            className="absolute inset-0 translate-x-full bg-cover bg-center"
            style={{ backgroundImage: `url(${next.image})` }}
          />
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 z-[2]" />

      {/* CONTENT */}
      <div className="relative z-[3] max-w-7xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-6xl font-bold text-white">{current.title}</h1>
        <p className="mt-6 text-xl text-gray-200 max-w-xl">
          {current.desc}
        </p>
      </div>

      {/* Label */}
      <div className="absolute bottom-8 left-8 z-[3] text-xs text-white/50 uppercase">
        {current.label}
      </div>
    </section>
  );
}
