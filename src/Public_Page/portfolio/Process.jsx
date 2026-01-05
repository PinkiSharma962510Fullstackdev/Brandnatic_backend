import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discover", desc: "Understanding your brand, audience and growth goals." },
  { number: "02", title: "Strategize", desc: "Building a clear roadmap driven by data and creativity." },
  { number: "03", title: "Execute", desc: "Designing, launching and optimizing across channels." },
  { number: "04", title: "Scale", desc: "Measuring results and scaling what performs best." },
];

 function Process() {
  return (
    <section className="relative w-full py-40 overflow-hidden text-white">

      {/* 🔥 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/process.jpg')",
        }}
      />

      {/* GRADIENT OVERLAY (RECOMMENDED) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-28">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-widest text-[#939393] mb-6">
            How We Work
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight">
            A focused process
            <br />
            built for growth.
          </h2>
        </motion.div>

        {/* RIGHT */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.4,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              whileHover={{ x: 14 }}
              className="group cursor-default"
            >
              <div className="flex items-start gap-6">
                <span className="text-sm text-[#ffff] font-medium">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-2xl font-light text-[#f3ecd9]">
                    {step.title}
                  </h3>
                  <p className="text-white/60 mt-2 max-w-md">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default  Process;