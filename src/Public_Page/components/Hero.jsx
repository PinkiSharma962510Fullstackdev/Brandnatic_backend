// import { motion } from "framer-motion";

// /* ------------------ FLOATING LABEL ------------------ */
// const floatingLabel = {
//   animate: {
//     y: [0, -10, 0],
//   },
//   transition: {
//     duration: 4,
//     repeat: Infinity,
//     ease: "easeInOut",
//   },
// };

// /* ------------------ HERO ------------------ */

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

//       {/* 🎥 BACKGROUND VIDEO */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         src="/videos/hero_bg3.mp4" // 🔁 CHANGE VIDEO HERE
//         autoPlay
//         muted
//         loop
//         playsInline
//       />

//       {/* 🌑 OVERLAY */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 z-[1]" />

//       {/* 🧠 CONTENT */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

//         {/* 🔵 FLOATING LABEL (INFINITE) */}
//         <motion.p
//           animate={floatingLabel.animate}
//           transition={floatingLabel.transition}
//           className="
//             inline-block
//             text-[#f5f7f8]
//             text-sm
//             tracking-[0.12em]
//             uppercase
//             font-semibold
//             mb-6
//           "
//         >
//           AI DIGITAL MARKETING AGENCY
//         </motion.p>

// {/* 🧠 HEADING WITH STRONG MULTI-DIRECTION HOVER MOVE */}
// <motion.h1
//   initial="rest"
//   animate="rest"
//   whileHover="hover"
//   variants={{
//     rest: {
//       scale: 1,
//       x: 0,
//       y: 0,
//     },
//     hover: {
//       scale: 1.05,
//       x: [0, 20, -20, 12, -12, 0],
//       y: [0, -16, 16, -12, 12, 0],
//       transition: {
//         duration: 4,
//         ease: "easeInOut",
//         repeat: Infinity,
//       },
//     },
//   }}
//   className="
//     text-4xl md:text-6xl lg:text-7xl
//     font-extrabold
//     leading-tight
//     text-white
//     cursor-default
//     will-change-transform
//   "
// >
//   Enabling Growth Through <br />

//   {/* 🚀 STRONG FLOATING KEYWORD */}
//   <motion.span
//     variants={{
//       rest: {
//         x: 0,
//         y: 0,
//         textShadow: "0px 0px 0px rgba(40,184,223,0)",
//       },
//       hover: {
//         x: [0, 32, -32, 20, -20, 0],
//         y: [0, -24, 24, -18, 18, 0],
//         textShadow: "0px 0px 40px rgba(40,184,223,0.8)",
//         transition: {
//           duration: 3.5,
//           ease: "easeInOut",
//           repeat: Infinity,
//         },
//       },
//     }}
//     className="
//       inline-block
//       bg-[length:200%_200%]
//       bg-gradient-to-r
//       from-[#B8F0FF]
//       via-[#28B8DF]
//       to-[#B8F0FF]
//       bg-clip-text
//       text-transparent
//       will-change-transform
//     "
//   >
//     Intelligent SEO
//   </motion.span>
// </motion.h1>



//         {/* DESCRIPTION */}
//         <p className="mt-8 max-w-3xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed">
//           AI is transforming how search engines work — and traditional SEO is no longer enough.
//           At <span className="text-white font-semibold">Brandnatic</span>, we combine AI,
//           machine learning, automation, and performance marketing to help brands scale
//           visibility, ROI, and long-term digital dominance.
//         </p>

//         {/* CTA */}
//         <motion.a
//           href="#contact"
//           whileHover={{ scale: 1.06 }}
//           transition={{ type: "spring", stiffness: 260, damping: 18 }}
//           className="
//             inline-block
//             mt-12
//             px-10
//             py-4
//             rounded-full
//             bg-[#1aa9f2]
//             text-white
//             font-semibold
//             text-lg
//             shadow-xl
//             cursor-pointer
//           "
//         >
//           Book A Call Now
//         </motion.a>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { useState } from "react";
import EnquiryModal from "../Navbar/ContactModal";

/* ------------------ FLOATING LABEL ------------------ */
const floatingLabel = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function Hero() {

  // ✅ HOOK INSIDE COMPONENT
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

        {/* 🎥 BACKGROUND VIDEO */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero_bg3.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/*  OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 z-[1]" />

        {/*  CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          {/* FLOATING LABEL */}
          <motion.p
            animate={floatingLabel.animate}
            transition={floatingLabel.transition}
            className="text-white text-sm tracking-widest uppercase font-semibold mb-6"
          >
            `<h1>Brandnatic | AI Digital Marketing Agency in Noida</h1>`
          </motion.p>

          {/* HEADING */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white"
          >
            Enabling Growth Through <br />
            <span className="text-[#28B8DF]">
              Intelligent SEO
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-300">
            AI-powered SEO & growth strategies to scale your brand visibility.
          </p>

          {/* ✅ CTA BUTTON */}
          <motion.button
            onClick={() => setOpenEnquiry(true)}
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="
              inline-block mt-12 px-10 py-4 rounded-full
              bg-[#1aa9f2] text-white font-semibold text-lg shadow-xl cursor-pointer
            "
          >
            Book A Call Now
          </motion.button>

        </div>
      </section>

      {/* ✅ ENQUIRY MODAL (VERY IMPORTANT) */}
      <EnquiryModal
        open={openEnquiry}
        onClose={() => setOpenEnquiry(false)}
      />
    </>
  );
}
