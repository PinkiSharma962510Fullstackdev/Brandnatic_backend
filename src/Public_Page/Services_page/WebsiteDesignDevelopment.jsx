import { motion } from "framer-motion";

 function WebsiteDesignDevelopment() {
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
            Website Design & <span className="text-cyan-400">Development</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We create fast, scalable, and conversion-driven websites that
            represent your brand and grow your business.
          </p>
        </motion.div>

        {/* WEBSITE TYPES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Websites We Build
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {websiteTypes.map((type, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 rounded-xl py-6 text-gray-300 hover:border-cyan-400 transition"
              >
                {type}
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

        {/* TECH STACK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Technology Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 rounded-xl py-6 text-gray-300"
              >
                {tech}
              </div>
            ))}
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
            Our Website Development Process
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

const websiteTypes = [
  "Business Websites",
  "Landing Pages",
  "E-Commerce Stores",
  "Portfolio Websites",
  "SaaS Websites",
  "Corporate Websites",
  "Web Applications",
  "Custom Dashboards"
];

const services = [
  {
    title: "UI/UX Design",
    desc: "Modern, user-friendly designs focused on engagement and conversions."
  },
  {
    title: "Frontend Development",
    desc: "Fast, responsive interfaces using modern frameworks."
  },
  {
    title: "Backend Development",
    desc: "Secure, scalable backend systems with APIs and databases."
  },
  {
    title: "CMS Development",
    desc: "WordPress, Headless CMS, and custom content management systems."
  },
  {
    title: "Performance Optimization",
    desc: "Speed, SEO, and Core Web Vitals optimization."
  },
  {
    title: "Maintenance & Support",
    desc: "Ongoing updates, security, and performance monitoring."
  }
];

const techStack = [
  "HTML5",
  "Tailwind CSS",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "WordPress"
];

const process = [
  {
    title: "Discovery",
    desc: "Understanding goals, audience, and requirements."
  },
  {
    title: "Design",
    desc: "Wireframes, UI/UX, and brand-aligned layouts."
  },
  {
    title: "Development",
    desc: "Frontend & backend development."
  },
  {
    title: "Testing",
    desc: "Quality assurance, performance, and security testing."
  },
  {
    title: "Launch",
    desc: "Deployment, monitoring, and scaling."
  }
];

export default WebsiteDesignDevelopment;