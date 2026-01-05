import { motion } from "framer-motion";

const services = [
  "Brand Strategy",
  "Creative Branding",
  "SEO & Growth",
  "Paid Advertising",
  "Web Experience",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
    clipPath: "inset(0 0 100% 0)",
  },
  show: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

 function ServicesPreview() {
  return (
    <section className="relative w-full py-44 overflow-hidden text-white">

      {/* 🔥 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/serviceimg.png')",
        }}
      />

      {/* OPTIONAL DARK OVERLAY (recommended) */}
      <div className="absolute inset-0 bg-black/10" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-28 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-widest text-white/40 mb-6">
            What We Do
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight">
            Capabilities crafted
            <br />
            for modern brands.
          </h2>
        </motion.div>

        {/* RIGHT – SERVICES */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {services.map((service) => (
            <motion.div
              key={service}
              variants={item}
              whileHover={{
                x: 22,
                textShadow: "0 0 28px rgba(243,236,217,0.75)",
                transition: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              className="
                text-3xl md:text-4xl
                font-light
                tracking-tight
                cursor-default
                text-[#f3ecd9]
              "
            >
              {/* BREATHING GLOW */}
              <motion.span
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {service}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default ServicesPreview;