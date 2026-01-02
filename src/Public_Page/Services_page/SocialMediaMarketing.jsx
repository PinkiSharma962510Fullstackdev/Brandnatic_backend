import { motion } from "framer-motion";

 function SocialMediaMarketing() {
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
            Social Media <span className="text-cyan-400">Marketing</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Build a powerful social presence, engage your audience, and turn
            followers into loyal customers with strategic social media marketing.
          </p>
        </motion.div>

        {/* PLATFORMS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Platforms We Manage
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {platforms.map((platform, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 rounded-xl py-6 text-gray-300 hover:border-cyan-400 transition"
              >
                {platform}
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

        {/* PROCESS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">
            Our Social Growth Process
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

const platforms = [
  "Instagram",
  "Facebook",
  "LinkedIn",
  "YouTube",
  "Twitter (X)",
  "Pinterest",
  "Snapchat",
  "Threads"
];

const services = [
  {
    title: "Profile Optimization",
    desc: "Professional bio, highlights, branding, and call-to-action optimization."
  },
  {
    title: "Content Creation",
    desc: "High-quality posts, reels, stories, and short-form videos."
  },
  {
    title: "Content Calendar",
    desc: "Strategic monthly planning for consistent posting and engagement."
  },
  {
    title: "Community Management",
    desc: "DM handling, comment replies, and audience engagement."
  },
  {
    title: "Influencer Marketing",
    desc: "Collaborations with relevant influencers to boost reach and trust."
  },
  {
    title: "Analytics & Reporting",
    desc: "Growth insights, engagement metrics, and performance reports."
  }
];

const process = [
  {
    title: "Audit",
    desc: "Analyze current social presence and competitors."
  },
  {
    title: "Strategy",
    desc: "Define content pillars, tone, and growth roadmap."
  },
  {
    title: "Execution",
    desc: "Design, publish, and manage content consistently."
  },
  {
    title: "Scale",
    desc: "Optimize content and scale reach & engagement."
  }
];

export default SocialMediaMarketing;