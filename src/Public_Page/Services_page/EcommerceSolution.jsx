import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

 function EcommerceSolution() {
  return (
    <>
    <Helmet>
  <title>E-Commerce Solutions | High-Converting Online Stores</title>

  <meta
    name="description"
    content="Custom e-commerce solutions including Shopify, WooCommerce, payment gateway integration, CRO, and automation to scale online sales."
  />

  <meta
    name="keywords"
    content="ecommerce solutions, shopify development, woocommerce store, ecommerce website design, online store development"
  />

  {/* Open Graph (for social sharing) */}
  <meta property="og:title" content="E-Commerce Solutions for Scalable Online Stores" />
  <meta
    property="og:description"
    content="We build fast, secure, and conversion-focused e-commerce platforms that turn visitors into loyal customers."
  />
  <meta property="og:type" content="website" />

  {/* SEO Best Practice */}
  <link rel="canonical" href="https://yourdomain.com/ecommerce-solutions" />
</Helmet>

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
      {/* SOCIAL MEDIA COMMUNI */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mt-24"
>
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      SOCIAL MEDIA <span className="text-cyan-400">COMMUNI</span>
    </h2>
    <p className="text-gray-400 max-w-3xl mx-auto text-lg">
      Great user experience design lets users focus on the task they have to
      complete & evokes emotion without distracting them. Bonus points for when
      it also looks & feels aesthetically pleasing!
    </p>
  </div>
  

  <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-400 transition">
      <h3 className="text-xl font-semibold mb-3">
        Content That Connects
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Platform-specific content designed to stop scrolling, spark engagement,
        and communicate your brand message clearly across all channels.
      </p>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-400 transition">
      <h3 className="text-xl font-semibold mb-3">
        Community Engagement
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Proactive replies, comment moderation, and audience interaction that
        build trust, loyalty, and long-term brand relationships.
      </p>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-400 transition">
      <h3 className="text-xl font-semibold mb-3">
        Performance Tracking
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Clear insights on reach, engagement, and conversions so you always know
        what’s working—and what to scale next.
      </p>
    </div>
  </div>
</motion.div>
{/* ===============================
   SUCCESS STORY + TESTIMONIAL
================================ */}

<div className="flex justify-center px-6  ">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="bg-[#0b0f19] border border-white/10 rounded-3xl p-10 max-w-6xl w-full"
  >
    <h2 className="text-3xl font-semibold mb-6 text-center">
      Success Story:{" "}
      <span className="text-cyan-400"> LuxeCart (D2C Fashion Brand)</span>
    </h2>

    <p className="text-gray-400 text-lg leading-relaxed mb-8 text-center">
      LuxeCart was struggling with low conversion rates, abandoned carts, and
inefficient order tracking. Despite strong traffic, sales were inconsistent.
Brandnatic rebuilt their Shopify store with conversion-focused UI, optimized
checkout flow, integrated automated abandoned cart recovery, and implemented
performance tracking across Meta and Google Ads.
    </p>

    <ul className="grid sm:grid-cols-3 gap-6 text-center mb-12">
      <li className="border border-white/10 rounded-xl p-6">
        <p className="text-3xl font-bold text-cyan-400">62%</p>
        <p className="text-gray-400 text-sm mt-2">
           Increase in Conversion Rate
        </p>
      </li>
      <li className="border border-white/10 rounded-xl p-6">
        <p className="text-3xl font-bold text-cyan-400">41%</p>
        <p className="text-gray-400 text-sm mt-2">
          Reduction in Cart Abandonment
        </p>
      </li>
      <li className="border border-white/10 rounded-xl p-6">
        <p className="text-3xl font-bold text-cyan-400">₹2.1</p>
        <p className="text-gray-400 text-sm mt-2">
          Revenue Growth in 90 Days
        </p>
      </li>
    </ul>

    {/* ===============================
       TESTIMONIAL
    ================================ */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative max-w-5xl mx-auto"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/20 blur-xl" />

      <div className="relative bg-[#0b0f19] border border-white/10 rounded-3xl p-10 md:p-12 flex flex-col md:flex-row gap-10 items-center">
        <div className="w-36 h-36 rounded-full overflow-hidden border border-white/10 shrink-0">
          <img
            src="/testimonial_img/Automation.webp"
            alt="Client testimonial"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="flex justify-center md:justify-start gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-cyan-400 text-lg">★</span>
            ))}
          </div>

          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
            “Brandnatic completely transformed our e-commerce business.
From store design to automation and performance marketing,
everything now works seamlessly. Our checkout is faster,
conversions are higher, and revenue growth is finally predictable.”
          </p>

          <div className="text-gray-400">
            <p className="font-semibold text-white">
              Founder & CEO, LuxeCart
            </p>
            <p className="text-sm">Amit Verma</p>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
</div>



    </section>
    </>
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