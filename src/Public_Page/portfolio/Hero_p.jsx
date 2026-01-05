// import { useEffect, useRef, useState } from "react";

// export default function Hero() {
//   const videosRef = useRef([]);
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const videos = videosRef.current;

//     const playVideo = (index) => {
//       videos.forEach((v, i) => {
//         if (!v) return;
//         v.pause();
//         v.currentTime = 0;
//       });

//       const currentVideo = videos[index];
//       if (currentVideo) {
//         currentVideo.play();
//       }
//     };

//     playVideo(active);

//     const handleEnded = () => {
//       setActive((prev) => (prev + 1) % videos.length);
//     };

//     videos.forEach((video) => {
//       if (video) video.addEventListener("ended", handleEnded);
//     });

//     return () => {
//       videos.forEach((video) => {
//         if (video) video.removeEventListener("ended", handleEnded);
//       });
//     };
//   }, [active]);

//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-black">
//       {/* Background Videos */}
//       {["/videos/hero3.mp4", "/videos/hero1.mp4", "/videos/hero2.mp4"].map(
//         (src, index) => (
//           <video
//             key={index}
//             ref={(el) => (videosRef.current[index] = el)}
//             className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000
//               ${active === index ? "opacity-100" : "opacity-0"}`}
//             muted
//             playsInline
//             autoPlay={active === index}
//           >
//             <source src={src} type="video/mp4" />
//           </video>
//         )
//       )}

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60 z-10" />

//       {/* Content */}
//       <div className="relative z-20 flex h-full items-center justify-center text-center px-6">
//         <div className="max-w-3xl">
//           <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
//             We Build Brands That Convert
//           </h1>
//           <p className="mt-6 text-lg md:text-xl text-zinc-300">
//             Creative Digital Marketing Agency
//           </p>

//           <div className="mt-10 flex justify-center gap-4">
//             <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium">
//               Get a Quote
//             </button>
//             <button className="px-8 py-3 rounded-full border border-white/30 hover:border-white transition text-white">
//               View Work
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// export default function Hero() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">

//       {/* BACKGROUND IMAGE */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/images/hero1.png')",
//         }}
//       />

//       {/* DARK OVERLAY */}
//       {/* <div className="absolute inset-0 bg-black/60 z-0" /> */}

//       {/* BIG BACKGROUND TEXT */}
     

//       {/* TOP RIGHT TEXT */}
//       <div className="absolute top-8 right-10 text-xs tracking-widest text-white z-20">
//         CREATIVE DIGITAL AGENCY
//       </div>

//       {/* BOTTOM LEFT */}
//       <div className="absolute bottom-10 left-10 text-xs tracking-widest text-white z-20">
//         CONTACT US
//       </div>

//       {/* BOTTOM RIGHT */}
//       <div className="absolute bottom-10 right-10 text-xs tracking-widest text-white z-20">
//         8433499574
//       </div>
//     </section>
//   );
// }




// export default function Hero() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">

//       {/* BACKGROUND IMAGE */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/images/hero1.png')",
//         }}
//       />

//       {/* CENTER BRANDNATIC TEXT */}
//       <div className="absolute inset-0 flex items-center justify-center z-10">
//   <h1
//     className="
//       flex
//       text-[10vw] md:text-[8vw]
//       font-extrabold uppercase
//       tracking-tight leading-none
//       select-none
//     "
//   >
//     {/* BRAND (FILLED) */}
//     <span className="text-[#f3ecd9]">
//       BRA
//     </span>

//     {/* NATIC (OUTLINE ONLY) */}
//     <span
//       className="
//         text-transparent
//         ml-1
//         [-webkit-text-stroke:2px_#f3ecd9]
//       "
//     >
//       NDN
//     </span>
//      <span className="text-[#f3ecd9]">
//       ATIC
//     </span>
//   </h1>
// </div>


//       {/* TOP RIGHT TEXT */}
//       <div className="absolute top-8 right-10 text-xs tracking-widest text-white z-20">
//         CREATIVE DIGITAL AGENCY
//       </div>

//       {/* BOTTOM LEFT */}
//       <div className="absolute bottom-10 left-10 text-xs tracking-widest text-white z-20">
//         AI-Driven Marketing • Scalable Brand Growth
//       </div>

//       {/* BOTTOM RIGHT */}
//       <div className="absolute bottom-10 right-10 text-xs tracking-widest text-white z-20">
//          Book a Free Strategy Call
//       </div>
//     </section>
//   );
// }



// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">

//       {/* BACKGROUND IMAGE */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: "url('/images/hero1.png')" }}
//       />

//       {/* CENTER BRANDNATIC TEXT */}
//       <div className="absolute inset-0 flex items-center justify-center z-10">
//         <motion.h1
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.6, ease: "easeOut" }}
//           className="
//             flex
//             text-[10vw] md:text-[8vw]
//             font-extrabold uppercase
//             tracking-tight leading-none
//             select-none
//           "
//         >
//           {/* BRAND */}
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 1 }}
//             className="text-[#f3ecd9]"
//           >
//             BRA
//           </motion.span>

//           {/* NDN OUTLINE */}
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8, duration: 1 }}
//             className="
//               text-transparent ml-1
//               [-webkit-text-stroke:2px_#f3ecd9]
//             "
//           >
//             NDN
//           </motion.span>

//           {/* ATIC */}
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.1, duration: 1 }}
//             className="text-[#f3ecd9]"
//           >
//             ATIC
//           </motion.span>
//         </motion.h1>
//       </div>

//       {/* TOP RIGHT */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.4, duration: 1 }}
//         className="absolute top-8 right-10 text-xs tracking-widest text-white z-20"
//       >
//         CREATIVE DIGITAL AGENCY
//       </motion.div>

//       {/* BOTTOM LEFT */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.6, duration: 1 }}
//         className="absolute bottom-10 left-10 text-xs tracking-widest text-white z-20"
//       >
//         AI-Driven Marketing • Scalable Brand Growth
//       </motion.div>

//       {/* BOTTOM RIGHT */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.8, duration: 1 }}
//         className="absolute bottom-10 right-10 text-xs tracking-widest text-white z-20"
//       >
//         Book a Free Strategy Call
//       </motion.div>
//     </section>
//   );
// }


// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function Hero() {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <section
//       className="relative h-screen w-full overflow-hidden"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* BACKGROUND IMAGE */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: "url('/images/hero1.png')" }}
//       />

//       {/* BRANDNATIC TEXT */}
//       <div className="absolute inset-0 z-10 pointer-events-none">
//         <motion.h1
//           animate={{
//             x: hovered ? "30vw" : "0vw", // 👉 LEFT ➜ RIGHT
//             y: "0vh",                    // ❌ no vertical movement
//           }}
//           transition={{
//             duration: 2.2,               // slow & premium
//             ease: [0.22, 1, 0.36, 1],     // luxury easing
//           }}
//           className="
//             absolute top-1/2 left-1/2
//             -translate-x-1/2 -translate-y-1/2
//             flex
//             text-[10vw] md:text-[8vw]
//             font-extrabold uppercase
//             tracking-tight leading-none
//             select-none
//           "
//         >
//           {/* BRA */}
//           <span className="text-[#f3ecd9]">BRA</span>

//           {/* NDN (outline) */}
//           <span
//             className="
//               text-transparent ml-1
//               [-webkit-text-stroke:2px_#f3ecd9]
//             "
//           >
//             NDN
//           </span>

//           {/* ATIC */}
//           <span className="text-[#f3ecd9]">ATIC</span>
//         </motion.h1>
//       </div>

//       {/* TOP RIGHT */}
//       <div className="absolute top-8 right-10 text-xs tracking-widest text-white z-20">
//         CREATIVE DIGITAL AGENCY
//       </div>

//       {/* BOTTOM LEFT */}
//       <div className="absolute bottom-10 left-10 text-xs tracking-widest text-white z-20">
//         AI-Driven Marketing • Scalable Brand Growth
//       </div>

//       {/* BOTTOM RIGHT */}
//       <div className="absolute bottom-10 right-10 text-xs tracking-widest text-white z-20">
//         Book a Free Strategy Call
//       </div>
//     </section>
//   );
// }


// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function Hero() {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <section
//       className="relative h-screen w-full overflow-hidden"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* BACKGROUND VIDEO */}
//       <video
//         className="absolute inset-0 h-full w-full object-cover"
//         src="/videos/hero_main.mp4"   
//         autoPlay
//         loop                   
//         muted
//         playsInline
//       />

//       {/* OPTIONAL DARK OVERLAY (recommended) */}
//       <div className="absolute inset-0 bg-black/50 z-0" />

//       {/* BRANDNATIC TEXT */}
//       <div className="absolute inset-0 z-10 pointer-events-none">
//         <motion.h1
//           animate={{
//             x: hovered ? "30vw" : "0vw",
//             y: "0vh",
//           }}
//           transition={{
//             duration: 2.2,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             absolute top-1/2 left-1/2
//             -translate-x-1/05 -translate-y-1/0.5
//             flex
//             text-[10vw] md:text-[8vw]
//             font-extrabold uppercase
//             tracking-tight leading-none
//             select-none
//           "
//         >
//           <span className="text-[#f3ecd9]">BRA</span>

//           <span className="text-transparent ml-1 [-webkit-text-stroke:2px_#f3ecd9]">
//             NDN
//           </span>

//           <span className="text-[#f3ecd9]">ATIC</span>
//         </motion.h1>
//       </div>

//       {/* TOP RIGHT */}
//       <div className="absolute top-8 right-10 text-xs tracking-widest text-white z-20">
//         CREATIVE DIGITAL AGENCY
//       </div>

//       {/* BOTTOM LEFT */}
//       <div className="absolute bottom-10 left-10 text-xs tracking-widest text-white z-20">
//         AI-Driven Marketing • Scalable Brand Growth
//       </div>

//       {/* BOTTOM RIGHT */}
//       <div className="absolute bottom-10 right-10 text-xs tracking-widest text-white z-20 cursor-pointer hover:underline">
//         Book a Free Strategy Call
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

export default function Hero_p() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero_main.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Top right - agency name - hidden on mobile */}
      <div className="absolute top-6 right-6 md:top-8 md:right-10 text-xs md:text-sm tracking-widest text-white/90 z-20 hidden md:block">
        CREATIVE DIGITAL AGENCY
      </div>

      {/* Animated brand name - slightly smaller + better positioning on mobile */}
      <motion.h1
        initial={{ x: "-120%" }}
        animate={{ x: "120%" }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
        className="
          absolute top-[40%] md:top-[42%] -translate-y-1/2 left-0 z-10
          flex items-center
          text-[11vw] sm:text-[9vw] md:text-[8vw] lg:text-[7.5vw]
          font-extrabold uppercase
          tracking-[-0.02em] leading-none
          whitespace-nowrap
          select-none
        "
      >
        <span className="text-[#f3ecd9]">BRA</span>
        <span className="text-transparent ml-1 sm:ml-2 [-webkit-text-stroke:1.5px_#f3ecd9] sm:[-webkit-text-stroke:2px_#f3ecd9]">
          NDN
        </span>
        <span className="text-[#f3ecd9]">ATIC</span>
      </motion.h1>

      <motion.h1
        initial={{ x: "120%" }}
        animate={{ x: "-120%" }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        className="
          absolute top-[58%] md:top-[58%] -translate-y-1/2 left-0 z-10
          flex items-center
          text-[11vw] sm:text-[9vw] md:text-[8vw] lg:text-[7.5vw]
          font-extrabold uppercase
          tracking-[-0.02em] leading-none
          whitespace-nowrap
          select-none opacity-70
        "
      >
        <span className="text-[#f3ecd9]">BRA</span>
        <span className="text-transparent ml-1 sm:ml-2 [-webkit-text-stroke:1.5px_#f3ecd9] sm:[-webkit-text-stroke:2px_#f3ecd9]">
          NDN
        </span>
        <span className="text-[#f3ecd9]">ATIC</span>
      </motion.h1>

      {/* === Mobile Bottom Center Info === */}
      <div className="md:hidden absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 text-center space-y-4 px-5 w-full max-w-[90%]">
        <div className="text-xs sm:text-sm tracking-widest text-white/80 font-light">
          AI-Driven Marketing • Scalable Brand Growth
        </div>

        <div className="text-xs sm:text-sm tracking-widest text-white font-medium underline decoration-1 underline-offset-4 cursor-pointer hover:text-[#f3ecd9] transition-colors">
          Book a Free Strategy Call
        </div>
      </div>

      {/* === Desktop Bottom Left + Right === */}
      <div className="hidden md:block">
        <div className="absolute bottom-10 left-10 text-sm tracking-widest text-white/90 z-20">
          AI-Driven Marketing • Scalable Brand Growth
        </div>

        <div className="absolute bottom-10 right-10 text-sm tracking-widest text-white z-20 cursor-pointer hover:underline">
          Book a Free Strategy Call
        </div>
      </div>
    </section>
  );
}