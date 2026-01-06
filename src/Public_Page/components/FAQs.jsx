import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "1. So what does an AI-based lead and sales system mean?",
    a:`It does not only involve the placement of ads. The system evaluates the intent of the buyer, the budget bracket, the location of the buyer, and the purchase schedule to ensure that only buyers who are serious and sales-capable remain in the funnel.`,
  },
  {
    q: "2.  What is the difference between that and a digital marketing agency?",
    a: `Digital marketing agencies are dedicated to generating leads. This system focuses on visiting the location, reservations, and income by eliminating leads that are not serious and focusing on actual purchasers.`,
  },
  {
    q: "3, Will this bring about bookings or leads only?",
    a: `The goal is not merely restricted to lead. The system will be constructed in a way that it transfers the prospects through the first click to the qualified site visits and real bookings.`,
  },
  {
    q: "4. Are the leads real, or are they form submissions?",
    a: `Leads are intent‑qualified. AI will sort out users in terms of behaviour, engagement, and purchasing cues; that is, sales teams will only communicate with actual buyers of property, but not those who have simple enquiries.`,
  },
  {
    q: "5. What is the most appropriate person to use this system?",
    a: "It fits well into the real-estate developers, builders, channel partners and brokers, either introducing a new project or selling the ready-to-move inventory.",
  },
    {
    q: "6. What is the benefit of AI in the marketing of real estate?",
    a:`AI adds to real estate marketing through targeting the right buyers, filtering off poorly qualified leads, automated follow-ups, and optimized ads through real conversions- resulting in better ROI and a predictable growth.`,
  },
    {
    q: "7. Do you handle only advertisements or all the sales pipeline?",
    a: `Advertisements are only the beginning. The entire system will consist of landing pages, WhatsApp automation, CRM, lead nurturing, and conversion-based performance tracking.`,
  },
    {
    q: "8. Is this able to lower the wastage of ad money and the workload of sales personnel?",
    a: `Yes. Removing the junk leads and automating the follow-ups, sales teams concentrate on the high-intent buyers only, which saves time and also increases the cost per booking.`,
  },
    {
    q: "9. What is the rate at which results can be anticipated?",
    a: "The real estate businesses see significant changes in the quality of leads and customer intention within two to four weeks of the launch.",
  },
    {
    q: "10. Is all the projects the same in terms of strategy?",
    a: `No. Prices, location advantages, and buyer psychology of each project are unique. Each approach is not pre-made but is entirely tailor-made.`,
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
