import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What makes Brandnatic different from other digital marketing agencies?",
    a:`Brandnatic is designed with the future of digital expansion in mind. With a strategic partnership with Meta, Brandnatic is an AI-powered digital marketing agency that delivers intelligent, performance-driven results that go well beyond traditional marketing execution. While many agencies rely on antiquated strategies and manual optimization, Brandnatic uses cutting-edge AI to analyze data, comprehend audience behavior, and optimize campaigns in real time, guaranteeing that every choice is accurate, scalable, and significant.`,
  },
  {
    q: "Do you work with startups or only established brands?",
    a: `Our AI-powered strategy at Brandnatic is made to adjust to various phases of company expansion. We assist startups in creating solid digital foundations, including demand creation, brand positioning, economical campaigns, and scalable growth systems that provide early traction without squandering money. Using cutting-edge AI insights and data-driven tactics, we concentrate on optimization, automation, performance scaling, and market expansion for well-known brands.`,
  },
  {
    q: "What is an AI-powered digital marketing agency?",
    a: `Marketing campaigns are planned, carried out, and optimized by an AI-powered digital marketing agency using data analytics and artificial intelligence. Compared to conventional marketing strategies, this enables more intelligent targeting, real-time optimization, improved audience insights, and a higher return on investment.`,
  },
  {
    q: "How does Brandnatic use AI in digital marketing?",
    a: `AI is used by Brandnatic to analyze user behavior, forecast performance trends, automate lead nurturing, optimize ad campaigns, personalize content, and enhance conversion funnels—all of which guarantee data-driven choices at every marketing stage.`,
  },
  {
    q: "Can you handle both marketing and development?",
    a: "Absolutely. We provide end-to-end solutions including marketing, automation, web development, and AI-powered systems.",
  },
    {
    q: "Is Brandnatic suitable for startups or only established businesses?",
    a:`Both new and well-known brands are served by Brandnatic. While established companies use AI and automation to scale more quickly and maximize performance, startups profit from cost-effective growth strategies.`,
  },
    {
    q: "Do you offer customized digital marketing strategies?",
    a: `Sure. Since every company is different, Brandnatic develops unique AI-driven strategies based on your objectives, target market, industry, and financial constraints—no one-size-fits-all solutions.`,
  },
    {
    q: "What industries do you serve from your Noida office?",
    a: `Real estate, e-commerce, healthcare, education, SaaS, local companies, and service-based brands are just a few of the many industries we serve in India and around the world.`,
  },
    {
    q: "Can you handle both marketing and development?",
    a: "Absolutely. We provide end-to-end solutions including marketing, automation, web development, and AI-powered systems.",
  },
    {
    q: " What services does Brandnatic provide?",
    a: `SEO, AI-powered performance marketing, lead generation, social media marketing, automation, AI chatbots, CRM integration, website development, and conversion optimization are some of the services we offer.`,
  },

      {
    q: " How is Brandnatic different from other digital marketing agencies in Noida?",
    a: `AI intelligence, automation, human creativity, and a performance-first mentality are all combined in Brandnatic. We operate as a long-term growth partner and concentrate on actual business growth rather than vanity metrics.`,
  },

      {
    q: "Is AI marketing expensive for small businesses?",
    a: `No. By enhancing targeting and optimizing campaigns, AI actually helps cut down on wasteful spending, making it extremely affordable even for small and medium-sized businesses.`,
  },
];

export default function FAQs() {
  const [active, setActive] = useState(null);

  return (
    <section className="w-full bg-black py-24">
      <div className="md:px-35 mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Frequently Asked <span className="text-[#1AA9F2]">Questions</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Everything you need to know about working with Brandnatic.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((item, i) => {
            const isOpen = active === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-[#5e5d5b] rounded-2xl px-3 bg-white/5 backdrop-blur-sm"
              >
                {/* Question */}
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full flex justify-between items-center px-2 py-2 text-left cursor-pointer"
                >
                  <span className="text-lg font-medium text-white">
                    {item.q}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-[#1AA9F2] text-2xl leading-none cursor-pointer"
                  >
                    +
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
