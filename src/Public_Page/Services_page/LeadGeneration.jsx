import { motion } from "framer-motion";

 function LeadGeneration() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Lead <span className="text-cyan-400">Generation</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We help businesses generate high-quality, sales-ready leads using
            performance marketing, funnels, and automation.
          </p>
        </motion.div>

        {/* LEAD CHANNELS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Lead Generation Channels
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {channels.map((channel, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 rounded-xl py-6 text-gray-300 hover:border-cyan-400 transition"
              >
                {channel}
              </div>
            ))}
          </div>
        </motion.div>

        {/* SERVICES */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FUNNEL PROCESS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">
            Our Lead Funnel Process
          </h2>

          <div className="grid md:grid-cols-5 gap-6 text-center">
            {process.map((step, i) => (
              <div key={i}>
                <div className="text-cyan-400 text-2xl font-bold mb-2">
                  0{i + 1}
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* DATA */

const channels = [
  "Google Lead Ads",
  "Meta Lead Forms",
  "Landing Pages",
  "WhatsApp Automation",
  "Email Campaigns",
  "LinkedIn Lead Ads",
  "CRM Integration",
  "Retargeting Funnels"
];

const services = [
  {
    title: "Paid Lead Campaigns",
    desc: "High-intent Google & Meta lead ads optimized for low CPL."
  },
  {
    title: "Landing Page Funnels",
    desc: "Conversion-focused landing pages designed to capture quality leads."
  },
  {
    title: "WhatsApp Automation",
    desc: "Instant lead follow-ups using WhatsApp bots and workflows."
  },
  {
    title: "CRM & Lead Management",
    desc: "Lead tracking, scoring, and pipeline management."
  },
  {
    title: "Retargeting Campaigns",
    desc: "Re-engage warm audiences and improve conversion rates."
  },
  {
    title: "Analytics & Optimization",
    desc: "Track CPL, lead quality, and ROI with continuous optimization."
  }
];

const process = [
  {
    title: "Audience Research",
    desc: "Identify buyer intent and targeting segments."
  },
  {
    title: "Funnel Design",
    desc: "Design high-conversion lead funnels."
  },
  {
    title: "Campaign Setup",
    desc: "Launch ads with tracking and integrations."
  },
  {
    title: "Automation",
    desc: "Auto follow-ups via WhatsApp & Email."
  },
  {
    title: "Scale",
    desc: "Optimize and scale winning campaigns."
  }
];

export default LeadGeneration;