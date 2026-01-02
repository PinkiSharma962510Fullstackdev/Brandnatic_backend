import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import img from "../../assets/about_img.png";
import ContactModal from "../Navbar/ContactModal";

/* ---------------- COUNT UP HOOK ---------------- */
const useCountUp = (end, duration = 1500) => {
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

/* ---------------- STAT CARD ---------------- */
const StatCard = ({ value, label, color }) => {
  const count = useCountUp(value);

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="
        rounded-2xl p-6 text-center
        bg-white/70 backdrop-blur-md
        shadow-lg hover:shadow-2xl
        border border-white/40
      "
    >
      <div className={`text-4xl font-extrabold ${color}`}>
        {count}+
      </div>
      <p className="mt-2 text-sm text-gray-700 font-medium">
        {label}
      </p>
    </motion.div>
  );
};

/* ---------------- MAIN SECTION ---------------- */
function AboutStats() {
  const [openContact, setOpenContact] = useState(false); // ✅ RIGHT PLACE

  return (
    <>
      <section className="relative pt-25 py-10 bg-gradient-to-b from-[#f8fafc] to-[#eef2f7]">
        <div className="max-w-7xl mx-auto px-6">

          {/* -------- TOP CONTENT -------- */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Leading Digital Marketing Company in{" "}
                <span className="text-[#1AA9F2]">Noida (Delhi NCR)</span>
              </h2>

              <p className="mt-6 text-gray-600">
                We are a <strong>ROI-driven</strong> digital marketing agency
                delivering measurable growth through data-backed strategies.
              </p>

              <p className="mt-4 text-gray-600">
                From SEO to AI-powered performance marketing, we focus on
                long-term business impact.
              </p>

              {/* ✅ CTA BUTTON */}
              <motion.button
                onClick={() => setOpenContact(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  mt-8 inline-flex items-center gap-2
                  px-8 py-4 rounded-full
                  bg-[#1AA9F2] text-white font-semibold
                  shadow-lg hover:shadow-xl cursor-pointer
                "
              >
                Get a Free Consultation
              </motion.button>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.img
                src={img}
                alt="Digital Marketing"
                className="rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.03 }}
              />
            </motion.div>
          </div>

          {/* -------- STATS GRID -------- */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <StatCard value={14} label="Years in Industry" color="text-blue-600" />
            <StatCard value={1000} label="Successful Campaigns" color="text-green-600" />
            <StatCard value={500} label="Happy Clients" color="text-orange-500" />
            <StatCard value={10} label="Countries Served" color="text-indigo-700" />
            <StatCard value={24} label="24x7 Support" color="text-sky-600" />
            <StatCard value={100} label="Client Satisfaction" color="text-emerald-600" />
          </div>
        </div>
      </section>

      {/* ✅ CONTACT MODAL (REQUIRED) */}
      <ContactModal
        open={openContact}
        onClose={() => setOpenContact(false)}
      />
    </>
  );
}

export default AboutStats;
