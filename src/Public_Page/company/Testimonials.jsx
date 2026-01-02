import { motion } from "framer-motion";

 function Testimonials() {
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
            Client <span className="text-cyan-400">Testimonials</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Trusted by startups, businesses, and growing brands across India.
          </p>
        </motion.div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
            >
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                “{item.feedback}”
              </p>

              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-500 text-xs">
                  {item.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* DATA */

const testimonials = [
  {
    name: "Amit Sharma",
    company: "E-Commerce Founder",
    feedback:
      "Brandnatic helped us scale our leads and sales using performance marketing and automation. Highly recommended!",
  },
  {
    name: "Neha Verma",
    company: "Real Estate Consultant",
    feedback:
      "Their lead generation and WhatsApp automation system completely transformed our business.",
  },
  {
    name: "Rahul Mehta",
    company: "Startup Founder",
    feedback:
      "From website development to paid ads — Brandnatic delivers real results.",
  },
];


export default Testimonials;