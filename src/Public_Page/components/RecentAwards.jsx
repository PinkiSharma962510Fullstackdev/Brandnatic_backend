import { motion } from "framer-motion";

const awards = [
 
  {
    title: "SEO Services in Noida for Long-Term Growth",
    desc: `Our team focuses on the search engine optimization techniques that will enable real-estate developers and brokers in Noida to attain long term search visibility. SEO is a strong tool of qualified traffic and genuine queries, as it aims at high-intent property keywords and content optimization.`,
    logo: "/images/SEO Services.svg",
  },
  {
    title: "Performance Marketing & Growth Strategy",
    desc: `Our group believes in performance-based marketing concepts that bring quantifiable growth. The optimization of the campaigns is done on the basis of using AI-driven insights to appeal to the sophisticated property acquirers and gain the highest possible returns on investment. The result will be stable lead generation, high conversion rate and predictable growth of real-estate businesses.`,
    logo: "/images/Performance Marketing.svg",
  },
  {
    title: "Meta Ads Agency for High-Quality Leads",
    desc: `Our team has high-performance Meta advertising campaigns that seek to get serious property buyers. These advertisements provide high-quality leads, which, when translated into real inquiries, will yield tangible outcomes due to the application of AI-based targeting and optimization.`,
    logo: "/images/Meta Ads.svg",
  },
  {
    title: "Google Ads & Search Marketing Experts",
    desc: "Our team pursues the property leads that are highly ambitious with the help of Google Ads and search strategies that are precision-oriented. Every campaign is streamlined in order to convert buyer searches into qualified queries, as opposed to wasted clicks.",
    logo: "/images/Google Ads.svg",
  },
   {
    title: "AI-Powered Digital Marketing Agency in Noida",
    desc: `Our team will provide AI-based digital marketing solutions to real-estate developers/brokers in Noida. This is done through the application of targeted advertising, automation, and data-driven strategies to produce high-quality property leads on a consistent basis.`,
    logo: "/images/AI-Powered.svg",
  },
  {
    title: "Custom Website & Web App Development",
    desc: `Our team develops high-performing websites and web applications that are aimed to turn visitors of the property into high-quality leads. All platforms are quite fast, focus on the customer experience, and are focused on inquiries, visiting the site, and bookings.`,
    logo: "/images/Custom Website.svg",
  },
   {
    title: "CMS & WordPress Development Services",
    desc: `Our group creates fast, secure, and maintainable CMS and WordPress websites to generate leads and be scaleable.
Both sites are designed in such a way that they allow AI-based advertisements, automation and a user-friendly experience.
It is about performance, flexibility, and conversions to the real-estate developers and brokers.`,
    logo: "/images/CMS & WordPress.svg",
  },
   {
    title: "Marketing Automation & CRM Integration",
    desc:  `Our team connects marketing automation with CRM systems to manage every property lead seamlessly.
This ensures faster follow-ups, better visibility, and higher conversions from inquiry to sale.`,
    logo: "/images/Marketing Automation.svg",
  },
];

 export default  function RecentAwards() {
  return (
    <section className="bg-black md:py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Recognized Expertise in AI-Powered <span className="text-blue-400">Digital Marketing</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Our company is an intersection between real estate, data, and AI-based marketing systems. We have years of hands-on experience in buyer intent, automation and performance marketing and this has guided our approach to be predictive-based as opposed to guesses. This knowledge will enable the real-estate developers and brokers to create steady leads on properties, improve conversion rates, and build scalable sales pipelines without fear.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="
                relative rounded-2xl p-6
                bg-white/5 backdrop-blur
                border border-white/10
                hover:border-blue-400/40
                transition-all duration-300
                group
                flex flex-col items-center text-center
                
              "
            >
              {/* GLOW */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

              <h3 className="relative text-xl font-semibold text-white mb-3">
                {award.title}
              </h3>

              <p className="relative text-gray-400 text-sm leading-relaxed mb-6">
                {award.desc}
              </p>

              {award.logo && (
                <img
                  src={award.logo}
                  alt={award.title}
                  className="relative h-50 opacity-80 group-hover:opacity-100 transition"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

