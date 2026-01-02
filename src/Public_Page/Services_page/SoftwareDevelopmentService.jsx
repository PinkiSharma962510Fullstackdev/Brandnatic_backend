import { motion } from "framer-motion";
import { Code2, Cpu, Layers, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Code2 size={28} />,
    title: "Custom Software Solutions",
    desc: "Tailor-made software designed to solve real business challenges."
  },
  {
    icon: <Cpu size={28} />,
    title: "Scalable Architecture",
    desc: "High-performance systems built to scale as your business grows."
  },
  {
    icon: <Layers size={28} />,
    title: "Full-Stack Development",
    desc: "Frontend, backend, APIs, and databases—all under one roof."
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Secure & Reliable Systems",
    desc: "Enterprise-grade security, performance, and data protection."
  }
];

 function SoftwareDevelopmentService() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            SOFTWARE <span className="text-cyan-400">DEVELOPMENT</span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg">
            Build powerful, scalable, and secure software solutions
            tailored to your business goals and future growth.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mt-20">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold">
              Why Choose Custom Software Development
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Off-the-shelf software limits growth. Custom software
              empowers your business with tailored features, better
              performance, and seamless integrations.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We design and develop enterprise-grade software using
              modern technologies, agile methodologies, and
              future-ready architectures to ensure long-term success.
            </p>

            <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition cursor-pointer">
              Start Your Software Project →
            </button>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-[#0b0f19] border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition cursor-pointer"
              >
                <div className="text-cyan-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default SoftwareDevelopmentService;