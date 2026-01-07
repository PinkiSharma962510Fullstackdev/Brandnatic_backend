// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import img from "../../assets/about_img.png";
// import ContactModal from "../Navbar/ContactModal";

// /* ---------------- COUNT UP HOOK ---------------- */
// const useCountUp = (end, duration = 1500) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const increment = end / (duration / 16);

//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 16);

//     return () => clearInterval(timer);
//   }, [end, duration]);

//   return count;
// };

// /* ---------------- STAT CARD ---------------- */
// const StatCard = ({ value, label, color }) => {
//   const count = useCountUp(value);

//   return (
//     <motion.div
//       whileHover={{ y: -8, scale: 1.03 }}
//       transition={{ type: "spring", stiffness: 200, damping: 15 }}
//       className="
//         rounded-2xl p-6 text-center
//         bg-white/70 backdrop-blur-md
//         shadow-lg hover:shadow-2xl
//         border border-white/40
//       "
//     >
//       <div className={`text-4xl font-extrabold ${color}`}>
//         {count}+
//       </div>
//       <p className="mt-2 text-sm text-gray-700 font-medium">
//         {label}
//       </p>
//     </motion.div>
//   );
// };

// /* ---------------- MAIN SECTION ---------------- */
// function AboutStats() {
//   const [openContact, setOpenContact] = useState(false); // ✅ RIGHT PLACE

//   return (
//     <>
//       <section className="relative pt-25 py-10 bg-gradient-to-b from-[#f8fafc] to-[#eef2f7]">
//         <div className="max-w-7xl mx-auto px-6">

//           {/* -------- TOP CONTENT -------- */}
//           <div className="grid lg:grid-cols-2 gap-14 items-center">

//             {/* LEFT TEXT */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
//                 Leading Digital Marketing Company in{" "}
//                 <span className="text-[#1AA9F2]">Noida (Delhi NCR)</span>
//               </h2>

//               <p className="mt-6 text-gray-600">
//                 Brandnatic is one of the <strong><h3 className="display: inline">top digital marketing company in noida  (Delhi NCR) </h3></strong> which caters to AI based lead and sales system for real estate developer and broker. We approach traditional digital marketing in a way that goes far beyond what is commonly practiced by integrating smart ads, automation, and targeting buyer intent to provide consistent, high quality property leads. Our focus is simple- help real-estate businesses scale-up faster at predictable growth, not just online visibilit
//               </p>

             

//               {/*  CTA BUTTON */}
//               <motion.button
//                 onClick={() => setOpenContact(true)}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="
//                   mt-8 inline-flex items-center gap-2
//                   px-8 py-4 rounded-full
//                   bg-[#1AA9F2] text-white font-semibold
//                   shadow-lg hover:shadow-xl cursor-pointer
//                 "
//               >
//                 Get a Free Consultation
//               </motion.button>
//             </motion.div>

//             {/* RIGHT IMAGE */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <motion.img
//                 src={img}
//                 alt="Digital Marketing"
//                 className="rounded-3xl shadow-2xl"
//                 whileHover={{ scale: 1.03 }}
//               />
//             </motion.div>
//           </div>

//           {/* -------- STATS GRID -------- */}
//           <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//             <StatCard value={14} label="Years in Industry" color="text-blue-600" />
//             <StatCard value={1000} label="Successful Campaigns" color="text-green-600" />
//             <StatCard value={500} label="Happy Clients" color="text-orange-500" />
//             <StatCard value={10} label="Countries Served" color="text-indigo-700" />
//             <StatCard value={24} label="24x7 Support" color="text-sky-600" />
//             <StatCard value={100} label="Client Satisfaction" color="text-emerald-600" />
//           </div>
//         </div>
//       </section>

//       {/* ✅ CONTACT MODAL (REQUIRED) */}
//       <ContactModal
//         open={openContact}
//         onClose={() => setOpenContact(false)}
//       />
//     </>
//   );
// }

// export default AboutStats;




import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import aboutImg from "../../assets/about_img.png";
import aboutBg from "../../../public/images/process.jpg"; // your dark background

import ContactModal from "../Navbar/ContactModal";

/* ---------------- COUNT UP HOOK ---------------- */
const useCountUp = (end, duration = 1800) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

/* ---------------- UNIFORM PREMIUM STAT CARD ---------------- */
const StatCard = ({ value, label, index }) => {
  const count = useCountUp(value);
  
  // Using the same blue shade for number & border as your reference
  const accentColor = "text-[#1AA9F2]";      // main number color
  const borderColor = "border-[#1AA9F2]/60"; // slightly transparent for premium look

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.1 + index * 0.13,
        type: "spring",
        stiffness: 100,
        damping: 14,
      }}
      whileHover={{
        y: -12,
        scale: 1.04,
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6)",
        borderColor: "#1AA9F2",
        transition: { duration: 0.3 }
      }}
      className={`
        group relative rounded-2xl p-6 text-center
        bg-gradient-to-b from-white/8 to-transparent
        backdrop-blur-xl ${borderColor}
        border-2 border-opacity-60
        shadow-[0_8px_32px_rgba(0,0,0,0.4)]
        hover:shadow-[0_25px_60px_-12px_rgba(26,169,242,0.35)]
        transition-all duration-300
        overflow-hidden
      `}
    >
      {/* Subtle shine on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className={`text-5xl md:text-6xl font-black ${accentColor} tracking-tight drop-shadow-lg`}>
        {count}<span className="text-3xl">+</span>
      </div>

      <p className="mt-3 text-base md:text-lg text-gray-300 font-medium tracking-wide">
        {label}
      </p>
    </motion.div>
  );
};

/* ---------------- MAIN PREMIUM DARK SECTION ---------------- */
function AboutStats() {
  const [openContact, setOpenContact] = useState(false);

  const stats = [
    { value: 14,   label: "Years in Industry" },
    { value: 1000, label: "Successful Campaigns" },
    { value: 500,  label: "Happy Clients" },
    { value: 10,   label: "Countries Served" },
    { value: 24,   label: "24×7 Support" },
    { value: 100,  label: "Client Satisfaction" },
  ];

  return (
    <>
      <section
        className="relative min-h-screen py-20 md:py-28 overflow-hidden"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Deep dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-2xl">
                Leading Digital Marketing Agency
                <br />
                <span className="text-[#1AA9F2]">in Noida (Delhi NCR)</span>
              </h2>

              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl drop-shadow-md">
                Brandnatic specializes in AI-powered lead generation & sales systems for real estate developers and brokers. We transcend traditional digital marketing with intelligent automation, precision targeting, and buyer-intent focused campaigns.
              </p>

              <motion.button
                onClick={() => setOpenContact(true)}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                className="
                  group relative inline-flex items-center gap-3
                  px-10 py-5 rounded-full
                  bg-gradient-to-r from-[#1AA9F2] to-[#0d8bd9]
                  text-white font-semibold text-lg
                  shadow-2xl shadow-cyan-500/30
                  hover:shadow-2xl hover:shadow-cyan-500/50
                  hover:brightness-110
                  ring-1 ring-cyan-400/40
                  transition-all duration-500
                  overflow-hidden
                "
              >
                <span className="relative z-10">Get Premium Strategy Call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.button>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: 60 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.3, type: "spring", stiffness: 80 }}
            >
              <motion.img
                src={aboutImg}
                alt="Premium Digital Marketing Team"
                className="rounded-3xl shadow-2xl shadow-black/60 w-full max-w-xl mx-auto lg:mx-0 border border-white/10"
                whileHover={{ scale: 1.03, y: -8 }}
              />
            </motion.div>
          </div>

          {/* STATS GRID - All using same blue accent */}
          <div className="mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactModal open={openContact} onClose={() => setOpenContact(false)} />
    </>
  );
}

export default AboutStats;