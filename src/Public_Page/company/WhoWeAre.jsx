import { motion } from "framer-motion";

 function WhoWeAre() {
  return (
    <section className="relative min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Who <span className="text-cyan-400">We Are</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We are Brandnatic — a performance-driven digital marketing,
            automation, and development company focused on real business growth.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Growth. Automation. Performance.
            </h2>

            <p className="text-gray-400 leading-relaxed mb-4">
              Brandnatic helps brands scale faster using AI-powered marketing,
              performance campaigns, automation systems, and modern digital
              experiences.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Our mission is simple — build systems that attract, engage, and
              convert customers while reducing manual effort.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10"
          >
            <ul className="space-y-4 text-gray-300">
              <li>✔ Performance-focused strategies</li>
              <li>✔ AI & automation-driven workflows</li>
              <li>✔ Conversion-optimized design & development</li>
              <li>✔ Transparent reporting & analytics</li>
              <li>✔ Long-term growth partnerships</li>
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default WhoWeAre;