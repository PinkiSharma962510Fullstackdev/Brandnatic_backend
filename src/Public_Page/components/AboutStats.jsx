import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import aboutImg from "../../assets/about_img.jpg";
import aboutBg from "/images/process.jpg";
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

/* ---------------- PREMIUM STAT CARD (Updated - Smaller & More Professional) ---------------- */
const StatCard = ({ value, label, index }) => {
  const count = useCountUp(value);
  const accentColor = "text-[#1AA9F2]";
  const borderColor = "border-[#1AA9F2]/50";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.1 + index * 0.12,
        type: "spring",
        stiffness: 100,
        damping: 14,
      }}
      whileHover={{
        y: -8,
        scale: 1.05,
        boxShadow: "0 20px 40px -12px rgba(26,169,242,0.3)",
      }}
      className={`
        group relative rounded-2xl py-6 px-5 text-center
        bg-gradient-to-b from-white/6 to-transparent
        backdrop-blur-xl ${borderColor}
        border
        shadow-lg
        hover:shadow-2xl hover:shadow-[#1AA9F2]/20
        transition-all duration-400
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Number - Thoda chhota aur clean */}
      <div className={`text-4xl md:text-5xl font-extrabold ${accentColor} tracking-tight`}>
        {count}<span className="text-2xl font-bold">+</span>
      </div>

      {/* Label - Compact aur professional */}
      <p className="mt-3 text-sm md:text-base text-gray-300 font-medium leading-tight">
        {label}
      </p>
    </motion.div>
  );
};

/* ---------------- MAIN SECTION ---------------- */
function AboutStats() {
  const [openContact, setOpenContact] = useState(false);

  const stats = [
    { value: 14, label: "Years in Industry" },
    { value: 1000, label: "Successful Campaigns" },
    { value: 500, label: "Happy Clients" },
    { value: 10, label: "Countries Served" },
    { value: 24, label: "24×7 Support" },
    { value: 100, label: "Client Satisfaction" },
  ];

  return (
    <>
      <section
        className="relative min-h-screen py-20 md:py-28"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Deep dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/55 z-10" />

        {/* Main content wrapper */}
        <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-center">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="space-y-8 pt-4 lg:pt-0"
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
                  px-8 py-3 rounded-full
                  bg-gradient-to-r from-[#1AA9F2] to-[#0d8bd9]
                  text-black font-semibold text-lg
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

            {/* RIGHT IMAGE + NEW ATTRACTION ELEMENT BELOW */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 60 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.3, type: "spring", stiffness: 80 }}
              className="relative -mt-40 sm:-mt-56 lg:-mt-96 xl:-mt-70 z-40"
            >
              {/* Floating Image Card */}
              <div className="
                relative rounded-3xl p-5 md:p-8
                bg-gradient-to-b from-gray-900/95 to-black/90
                backdrop-blur-2xl border border-white/15
                shadow-2xl shadow-black/70
                ring-1 ring-white/10
              ">
                <motion.img
                  src={aboutImg}
                  alt="Premium Digital Marketing Team"
                  className="rounded-2xl w-full max-w-2xl mx-auto border border-white/20 shadow-xl object-cover"
                  whileHover={{ scale: 1.03, y: -8 }}
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#1AA9F2]/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* NEW: Unique Attraction Element Below Image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 md:mt-12 -mx-4 md:-mx-8 px-6 md:px-10 py-8 rounded-3xl
                  bg-gradient-to-r from-[#1AA9F2]/10 via-cyan-900/20 to-transparent
                  backdrop-blur-xl border border-[#1AA9F2]/30
                  shadow-2xl shadow-[#1AA9F2]/20
                  relative overflow-hidden
                "
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1AA9F2]/5 to-transparent" />
                <div className="relative z-10 max-w-2xl mx-auto text-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg"
                  >
                    “We generated <span className="text-[#1AA9F2]">300+ qualified leads</span> in just 45 days for our luxury project!”
                  </motion.div>
                  <p className="mt-4 text-lg text-gray-300 font-medium">
                    — Mr. Rajesh Kapoor, Director at Apex Realty
                  </p>
                  <div className="mt-6 flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                </div>
                {/* Subtle floating particles */}
                <div className="absolute top-4 left-10 w-32 h-32 bg-[#1AA9F2]/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-6 right-12 w-40 h-40 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
              </motion.div>
            </motion.div>
          </div>

          {/* STATS GRID */}
          <div className="mt-16 md:mt-24 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
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