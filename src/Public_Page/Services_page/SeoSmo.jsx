import { motion } from "framer-motion";

 function SeoSmo() {
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
            SEO & <span className="text-cyan-400">SMO</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Data-driven SEO and powerful Social Media Optimization strategies
            designed to increase visibility, traffic, and qualified leads.
          </p>
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

        {/* SEO VS SMO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 mb-20"
        >
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">
              SEO (Search Engine Optimization)
            </h2>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>✔ Keyword research & competitor analysis</li>
              <li>✔ On-page & technical SEO</li>
              <li>✔ Content optimization & blogging</li>
              <li>✔ Backlink building & authority growth</li>
              <li>✔ Local SEO & Google My Business</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">
              SMO (Social Media Optimization)
            </h2>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>✔ Profile optimization & branding</li>
              <li>✔ Content calendar & creatives</li>
              <li>✔ Organic reach & engagement growth</li>
              <li>✔ Hashtag & trend strategy</li>
              <li>✔ Analytics & performance tracking</li>
            </ul>
          </div>
        </motion.div>

        {/* PROCESS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">
            Our Growth Process
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

const services = [
  {
    title: "Technical SEO",
    desc: "Site speed, indexing, schema, and technical fixes for search engine compliance."
  },
  {
    title: "On-Page & Content SEO",
    desc: "Keyword-optimized content that ranks and converts users."
  },
  {
    title: "Local SEO",
    desc: "Dominate local searches with Google Maps & location-based optimization."
  },
  {
    title: "Social Media Optimization",
    desc: "Optimized profiles, consistent branding, and organic growth strategies."
  },
  {
    title: "Content Strategy",
    desc: "High-quality posts, reels, and creatives aligned with your brand voice."
  },
  {
    title: "Analytics & Reporting",
    desc: "Transparent reports with traffic, rankings, and engagement insights."
  }
];

const process = [
  {
    title: "Audit",
    desc: "Complete SEO & social media audit to find gaps and opportunities."
  },
  {
    title: "Strategy",
    desc: "Custom growth roadmap based on goals and competition."
  },
  {
    title: "Execution",
    desc: "SEO implementation and consistent SMO execution."
  },
  {
    title: "Scale",
    desc: "Optimize, track results, and scale traffic & engagement."
  }
];


export default SeoSmo;