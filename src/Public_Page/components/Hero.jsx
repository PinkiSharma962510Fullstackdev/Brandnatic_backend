



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
import ContactModal from "../Navbar/ContactModal";


const slides = [
  {
    image: "/hero_img/hero3.webp",
    title: "Marketing Automation",
    desc: "AI-powered marketing automation that captures, nurtures and converts leads automatically. Smart workflows, follow-ups and campaigns designed to maximize ROI through digital marketing.",
    label: "MARKETING AUTOMATION",
  },
  {
    image: "/hero_img/hero1.webp",
    title: "AI-Powered Digital Growth",
    desc: "AI-driven digital marketing strategies combining SEO, paid ads and analytics to deliver high-quality leads and scalable business growth.",
    label: "AI DIGITAL MARKETING",
  },
  {
    image: "/hero_img/hero2.webp",
    title: "High-Performance Websites",
    desc: "Fast, SEO-optimized and conversion-focused website development that boosts visibility, engagement and lead generation.",
    label: "WEBSITE DEVELOPMENT",
  },
];


const services = [
  "AI Chatbot Development",
  "Software Development",
  "Automation",
  "E-Commerce Solutions",
  "SEO & SMO",
  "Paid Ads",
  "Social Media Marketing",
  "Lead Generation",
  "Website Design & Dev",
  "Mobile App Development",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);

  // Mobile check (simple & safe)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    // Sirf desktop pe auto slide chalega
    if (isMobile) return;

    const slideTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, 3800);

    const progressTimer = setInterval(() => {
      setProgress((p) => Math.min(100, p + 2.5)); // ~40 steps → smooth
    }, 95);

    return () => {
      clearInterval(slideTimer);
      clearInterval(progressTimer);
    };
  }, [isMobile]);

  const current = slides[index];

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-black">
      {/* === LCP ke liye best first image (mobile + desktop dono ke liye safe) === */}
      <img
        src={slides[0].image}
        alt="Brandnatic Hero Background"
        width="1920"
        height="1080"
        fetchpriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover md:hidden" // ← sirf mobile pe yeh dikhega
      />

      {/* Desktop sliding images */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out md:flex hidden" // ← mobile pe hide
        style={{
          transform: `translateX(-${index * 100}vw)`,
          width: `${slides.length * 100}vw`,
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-[100vw] h-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      {/* Mobile ke liye fixed background (first image) */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${current.image})` }} // 
      /> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />

      {/* Content - yeh dono jagah change hoga */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-7 sm:px-6 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#1AA9F2] text-xs sm:text-sm tracking-[0.35em] uppercase font-medium mb-3"
        >
          {current.label}
        </motion.div>

        <motion.h1
          key={current.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl"
        >
          {current.title}
        </motion.h1>

        <motion.p
          key={current.desc}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-4 text-base sm:text-lg text-gray-200 max-w-xl"
        >
          {current.desc}
        </motion.p>

        <motion.button
          onClick={() => setContactOpen(true)}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="
            mt-7 px-7 py-3 text-sm font-medium
            sm:px-9 sm:py-3.5 sm:text-base
            md:px-10 md:py-4 md:text-xl
            rounded-full
            bg-gradient-to-r from-[#1AA9F2] to-[#28B8DF]
            text-white shadow-lg
            hover:shadow-xl hover:shadow-cyan-500/40
            hover:scale-105 active:scale-98
            transition-all duration-300
            flex items-center justify-center gap-2.5
            w-[220px] sm:w-[260px] md:w-[300px]
          "
        >
          Book Strategy Call →
        </motion.button>
      </div>

      {/* Progress + Dots → Sirf desktop pe */}
      {!isMobile && (
        <div className="absolute top-16 left-6 md:left-10 z-30 flex items-center gap-4 bg-black/50 backdrop-blur-lg px-5 py-3 rounded-full border border-white/15 shadow-xl">
          <div className="relative w-10 h-10">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" fill="none" stroke="white" strokeWidth="5" strokeOpacity="0.12" />
              <motion.circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#1AA9F2"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 289 }}
                animate={{
                  strokeDasharray: 289,
                  strokeDashoffset: 289 - (289 * progress) / 100,
                }}
                transition={{ duration: 0.12, ease: "linear" }}
              />
            </svg>
          </div>

          <div className="flex gap-3">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full transition-all duration-400 ${
                  i === index
                    ? "bg-[#1AA9F2] scale-150 shadow-lg shadow-[#1AA9F2]/50 ring-2 ring-[#1AA9F2]/30"
                    : "bg-white/40 scale-100"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Bottom services ticker - same everywhere */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/65 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-3.5 sm:py-4 overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-5 sm:gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            {[...services, ...services].map((service, i) => (
              <div
                key={i}
                className="inline-flex items-center px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex-shrink-0"
              >
                <span className="text-[#1AA9F2] text-xs sm:text-sm font-medium uppercase tracking-wide">
                  {service}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
}