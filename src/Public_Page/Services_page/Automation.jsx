import { motion } from "framer-motion";

 function Automation() {
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
            Business <span className="text-cyan-400">Automation</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We build smart automation systems that eliminate manual work,
            reduce errors, and scale your business operations automatically.
          </p>
        </motion.div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((item, index) => (
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

        {/* PROCESS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">
            Our Automation Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
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

const features = [
  {
    title: "Workflow Automation",
    desc: "Automate repetitive business tasks like lead handling, follow-ups, and reporting."
  },
  {
    title: "CRM & Tool Integration",
    desc: "Seamless integration between CRM, WhatsApp, Email, Google Sheets, and more."
  },
  {
    title: "AI-Based Automation",
    desc: "AI-powered triggers, chatbots, and smart decision-based automations."
  },
  {
    title: "Marketing Automation",
    desc: "Auto email campaigns, drip funnels, lead scoring, and nurturing systems."
  },
  {
    title: "Sales Automation",
    desc: "Automated deal tracking, reminders, pipeline updates, and conversions."
  },
  {
    title: "Custom Automation",
    desc: "Tailor-made automation solutions built specifically for your business flow."
  }
];

const process = [
  {
    title: "Analysis",
    desc: "We analyze your current workflow and identify automation opportunities."
  },
  {
    title: "Strategy",
    desc: "We design a scalable automation strategy aligned with your business goals."
  },
  {
    title: "Implementation",
    desc: "We build, integrate, and test automation systems end-to-end."
  },
  {
    title: "Optimization",
    desc: "Continuous monitoring and optimization for maximum efficiency."
  }
];

export default Automation;