import { motion } from "framer-motion";

 function PaidAds() {
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
            Paid <span className="text-cyan-400">Ads</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            ROI-focused paid advertising campaigns built to drive traffic,
            leads, and sales at scale.
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
            Advertising Platforms
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
            Our Performance Marketing Process
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
  "Google Ads",
  "Meta Ads (Facebook & Instagram)",
  "YouTube Ads",
  "LinkedIn Ads",
  "Twitter (X) Ads",
  "Snapchat Ads",
  "Amazon Ads",
  "Performance Max"
];

const services = [
  {
    title: "Search Ads",
    desc: "High-intent keyword-based campaigns for instant leads and conversions."
  },
  {
    title: "Display & Remarketing",
    desc: "Brand visibility and retargeting campaigns to re-engage users."
  },
  {
    title: "Social Media Ads",
    desc: "Highly targeted ads on Facebook, Instagram, and LinkedIn."
  },
  {
    title: "E-Commerce Ads",
    desc: "Product-based campaigns optimized for ROAS and sales."
  },
  {
    title: "Lead Generation Ads",
    desc: "Form-based and landing page campaigns for qualified leads."
  },
  {
    title: "Analytics & CRO",
    desc: "Conversion tracking, A/B testing, and ROI optimization."
  }
];

const process = [
  {
    title: "Research",
    desc: "Audience research, competitor analysis, and budget planning."
  },
  {
    title: "Campaign Setup",
    desc: "Ad structure, creatives, copywriting, and tracking setup."
  },
  {
    title: "Optimization",
    desc: "Daily monitoring, bid optimization, and performance scaling."
  },
  {
    title: "Scaling",
    desc: "Increase budgets on winning campaigns for maximum ROI."
  }
];

export default PaidAds;