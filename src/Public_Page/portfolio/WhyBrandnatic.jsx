import { motion } from "framer-motion";
import { Brain, TrendingUp, ShieldCheck, Rocket } from "lucide-react";

 function WhyBrandnatic() {
  const features = [
    {
      icon: <Brain size={36} />,
      title: "AI-Driven Strategy",
      desc: "Smart data-backed marketing strategies powered by AI insights."
    },
    {
      icon: <TrendingUp size={36} />,
      title: "Growth Focused",
      desc: "We don’t chase clicks — we build scalable growth systems."
    },
    {
      icon: <ShieldCheck size={36} />,
      title: "Trusted Execution",
      desc: "Clean execution, transparent reporting & measurable results."
    },
    {
      icon: <Rocket size={36} />,
      title: "Fast Performance",
      desc: "Optimized campaigns that move fast and convert better."
    }
  ];

  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Why <span className="text-[#f3ecec]">Brandnatic</span>?
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We combine AI, creativity, and performance marketing to build brands that scale.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#bab8b8] transition"
            >
              <div className="text-[#bab8b8] mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyBrandnatic;