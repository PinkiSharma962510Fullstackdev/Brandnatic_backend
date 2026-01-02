import { motion } from "framer-motion";

 function EcommerceSolution() {
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
            E-Commerce <span className="text-cyan-400">Solutions</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We design, develop, and scale high-performance e-commerce platforms
            that convert visitors into loyal customers.
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

        {/* PLATFORM SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Platforms We Work With
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {platforms.map((platform, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 rounded-xl py-6 text-gray-300"
              >
                {platform}
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
            Our E-Commerce Process
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
    title: "Custom Store Development",
    desc: "High-converting custom e-commerce stores built for performance and scalability."
  },
  {
    title: "Shopify & WooCommerce",
    desc: "Expert development, customization, and optimization for Shopify & WooCommerce."
  },
  {
    title: "Payment Gateway Integration",
    desc: "Secure payment integrations including Razorpay, Stripe, PayPal, and more."
  },
  {
    title: "Product & Inventory Management",
    desc: "Smart product catalog, inventory sync, and order management systems."
  },
  {
    title: "Conversion Optimization",
    desc: "UX-focused layouts, fast checkout, and CRO strategies to boost sales."
  },
  {
    title: "Marketing & Automation",
    desc: "Email, WhatsApp, abandoned cart, and retargeting automation integrations."
  }
];

const platforms = [
  "Shopify",
  "WooCommerce",
  "Magento",
  "Custom MERN Store",
  "Headless Commerce",
  "BigCommerce",
  "Webflow Commerce",
  "OpenCart"
];

const process = [
  {
    title: "Planning",
    desc: "Understanding your business, audience, and product strategy."
  },
  {
    title: "Design",
    desc: "Modern UI/UX design focused on conversions and brand identity."
  },
  {
    title: "Development",
    desc: "Secure, fast, and scalable development with best practices."
  },
  {
    title: "Launch & Scale",
    desc: "Testing, deployment, and continuous optimization for growth."
  }
];


export default EcommerceSolution;