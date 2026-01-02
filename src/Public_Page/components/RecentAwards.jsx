import { motion } from "framer-motion";

const awards = [
 
  {
    title: "SEO Services in Noida for Long-Term Growth",
    desc: `Our Noida SEO services combine technical SEO, intent-focused content strategies, and AI-driven keyword research to increase search visibility, traffic quality, and long-term rankings.`,
    logo: "/images/SEO Services.svg",
  },
  {
    title: "Performance Marketing & Growth Strategy",
    desc: `We create performance marketing plans with a focus on scalable growth, cost effectiveness, and conversions. Our strategy is designed for brands and startups seeking tangible business results rather than flimsy metrics.`,
    logo: "/images/Performance Marketing.svg",
  },
  {
    title: "Meta Ads Agency for High-Quality Leads",
    desc: `We oversee Facebook and Instagram ad campaigns using audience targeting, AI optimization, and creative testing as a results-driven Meta Ads company to produce high-intent leads and sales.`,
    logo: "/images/Meta Ads.svg",
  },
  {
    title: "Google Ads & Search Marketing Experts",
    desc: "We manage search marketing campaigns and high-intent Google Ads with an emphasis on ROI, cost effectiveness, and conversions. We assist brands and startups in attracting ready-to-convert consumers and achieving quantifiable, scalable search growth through data-driven targeting, intelligent bidding, and ongoing optimization.",
    logo: "/images/Google Ads.svg",
  },
   {
    title: "AI-Powered Digital Marketing Agency in Noida",
    desc: `Data-driven tactics, high-quality leads, and quantifiable return on investment are the main priorities of Brandnatic, an AI-powered digital marketing firm in Noida. We use performance marketing, automation, and conversion optimization to support the expansion of startups and brands.`,
    logo: "/images/AI-Powered.svg",
  },
  {
    title: "Custom Website & Web App Development",
    desc: `Using cutting-edge technologies, we create scalable, secure, and quick websites with an early emphasis on performance, user experience, and SEO readiness.`,
    logo: "/images/Custom Website.svg",
  },
   {
    title: "CMS & WordPress Development Services",
    desc: `With scalable, secure, and SEO-friendly platforms like WordPress and headless CMS solutions, our CMS development services assist companies in managing content with ease.`,
    logo: "/images/CMS & WordPress.svg",
  },
   {
    title: "Marketing Automation & CRM Integration",
    desc:  `Our marketing automation solutions use AI, CRM, and WhatsApp/email automation to optimize lead nurturing, follow-ups, and customer journeys.`,
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
            Providing development, automation, and performance-driven digital marketing solutions for new and expanding companies in Noida and throughout India.
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

