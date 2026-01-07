import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "SEO Services",
    "Performance Marketing",
    "Automation",
    "Real Estate",
    "E-Commerce",
  ];

  const testimonials = [
    {
      name: "Amit Sharma",
      company: "Founder, D2C E-Commerce Brand",
      feedback:
        "Brandnatic didn’t just run campaigns — they built a scalable growth system. From performance ads to automation and reporting, everything was data-driven and ROI focused.",
      categories: ["Performance Marketing", "Automation", "E-Commerce"],
      avatar: "https://as2.ftcdn.net/jpg/05/33/76/59/1000_F_533765939_Mo2vFoFWkbSQdfddZMYsaiZs2rue30EJ.jpg",
    },
    {
      name: "Neha Verma",
      company: "Director, Real Estate Consulting Firm",
      feedback:
        "Their understanding of buyer intent and lead qualification is exceptional. Automation and CRM workflows helped us close faster with far less manual effort.",
      categories: ["Automation", "Real Estate"],
      avatar: "https://media.istockphoto.com/id/1158915109/photo/smiling-indian-young-businesswoman-wear-white-suit-looking-at-camera-isolated-on-grey-studio.jpg?s=612x612&w=0&k=20&c=nv5xjmM_lRohFw_Cjb46dLnKCiBBmPFqX7thiefRl_o=",
    },
    {
      name: "Rahul Mehta",
      company: "Co-Founder, SaaS Startup",
      feedback:
        "Brandnatic works like a true growth partner. Clear strategy, clean execution, and transparent reporting. We finally saw predictable growth across channels.",
      categories: ["Performance Marketing", "SEO Services"],
      avatar: "https://media.istockphoto.com/id/1418691370/photo/happy-young-indian-business-man-wearing-suit-and-glasses-headshot-portrait.jpg?s=1024x1024&w=is&k=20&c=-qgLVFi0MnoCHCCHF8Hky-xLBdqk9ouA5dAloRbfHL8=",
    },
    {
      name: "Priya Singh",
      company: "CMO, Luxury Real Estate Developer",
      feedback:
        "The SEO strategies delivered by Brandnatic transformed our online visibility. Organic traffic surged by 180% in just 6 months, bringing high-quality leads consistently.",
      categories: ["SEO Services", "Real Estate"],
      avatar: "https://img.freepik.com/premium-photo/professional-headshot-indian-woman-business-suit_943281-26035.jpg",
    },
    {
      name: "Vikram Patel",
      company: "CEO, Fashion E-Commerce Platform",
      feedback:
        "Their performance marketing expertise scaled our ad spend efficiently, achieving a 4.2x ROAS while automating the entire funnel for seamless operations.",
      categories: ["Performance Marketing", "E-Commerce", "Automation"],
      avatar: "https://as2.ftcdn.net/jpg/04/32/89/63/1000_F_432896398_99o08tTgBYj8YP2eatvF4zaJu3AdF40E.jpg",
    },
    {
      name: "Arjun Kapoor",
      company: "Founder, EdTech Startup",
      feedback:
        "Brandnatic's AI-powered SEO and content automation brought us from zero to dominating search results. User acquisition costs dropped by 65% within the first quarter.",
      categories: ["SEO Services", "Automation"],
      avatar: "https://as2.ftcdn.net/jpg/04/22/82/39/1000_F_422823992_ZtyrE96o6wGTJcyZolZ6pLRUGHBRCH9c.jpg",
    },
    {
      name: "Sanya Gupta",
      company: "Marketing Head, Premium Real Estate Group",
      feedback:
        "The targeted performance campaigns and smart automation turned cold leads into high-value bookings. We've never seen such precise ROI tracking before.",
      categories: ["Performance Marketing", "Real Estate", "Automation"],
      avatar: "https://as1.ftcdn.net/jpg/03/48/39/40/1000_F_348394011_e1kTyJJHDSKd5BZE6S3VXizesSgH4n1Y.jpg",
    },
    {
      name: "Rohan Desai",
      company: "Co-Founder, Health & Wellness D2C Brand",
      feedback:
        "From funnel automation to hyper-targeted ads, Brandnatic delivered explosive growth. Our customer acquisition scaled 5x while maintaining healthy margins.",
      categories: ["E-Commerce", "Performance Marketing", "Automation"],
      avatar: "https://thumbs.dreamstime.com/b/portrait-confident-young-indian-business-executive-looking-camera-man-hands-folded-chest-professional-headshot-413369494.jpg",
    },
    {
      name: "Ananya Rao",
      company: "Director of Growth, FinTech Company",
      feedback:
        "Their deep SEO expertise combined with performance marketing mastery helped us rank #1 for competitive keywords and convert traffic at record rates.",
      categories: ["SEO Services", "Performance Marketing"],
      avatar: "https://img.freepik.com/premium-photo/professional-headshot-indian-woman-business-suit_943281-26051.jpg",
    },
    {
      name: "Karan Malhotra",
      company: "CEO, Luxury Home Developer",
      feedback:
        "Brandnatic revolutionized our lead generation. Automated workflows and precision targeting brought in qualified buyers like never before.",
      categories: ["Real Estate", "Automation"],
      avatar: "https://as1.ftcdn.net/jpg/04/23/60/18/1000_F_423601876_uOXQNLmnqXcOUUhV0RrrnyWEkq1LaYlL.jpg",
    },
  ];

  const filteredTestimonials =
    selectedCategory === "All"
      ? testimonials
      : testimonials.filter((item) =>
          item.categories.includes(selectedCategory)
        );

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Client Testimonials | Brandnatic – AI-Powered Digital Marketing Agency
        </title>

        <meta
          name="description"
          content="Read real client testimonials and success stories from brands that partnered with Brandnatic for AI-powered digital marketing, SEO, automation, and performance growth."
        />

        <link rel="canonical" href="https://brandnatic.com/testimonials" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Client Testimonials | Brandnatic"
        />
        <meta
          property="og:description"
          content="Discover how Brandnatic helped startups, real estate brands, and businesses scale with AI-powered digital marketing."
        />
        <meta
          property="og:url"
          content="https://brandnatic.com/testimonials"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Client Testimonials | Brandnatic"
        />
        <meta
          name="twitter:description"
          content="Real results from brands that trusted Brandnatic for performance marketing and automation."
        />
      </Helmet>

      {/* ================= PAGE ================= */}
      <section className="relative min-h-screen bg-black text-white px-6 py-32 overflow-hidden">
        {/* Enhanced background glow for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-900/10 via-transparent to-cyan-900/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mb-32 text-center mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Client Reviews & <span className="text-cyan-400">Testimonials</span>
            </h1>

            <p className="text-gray-300 text-xl leading-relaxed max-w-4xl mx-auto">
              Our clients’ success is our success. From startups to fast-growing businesses, these testimonials reflect the trust,
              strategy, and measurable results we deliver through AI-powered digital marketing and performance systems.
            </p>
          </motion.div>

          {/* FILTER BAR */}
          <div className="flex flex-wrap justify-center gap-4 mb-24">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/50"
                    : "bg-white/5 border border-white/15 text-white/70 hover:bg-white/10 hover:border-cyan-400 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* TESTIMONIAL GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredTestimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-b from-[#0f1625] to-[#0b0f19] border border-white/10 rounded-3xl p-10 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-500 overflow-hidden"
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Large quote icon */}
                <div className="text-cyan-400 text-6xl mb-6 opacity-30">“</div>

                {/* Feedback */}
                <p className="text-gray-200 text-lg leading-relaxed mb-10 relative z-10">
                  {item.feedback}
                </p>

                {/* Gradient divider */}
                <div className="w-24 h-[2px] bg-gradient-to-r from-cyan-400 via-cyan-300 to-transparent mb-8" />

                {/* Client info with avatar */}
                <div className="flex items-center gap-5 relative z-10">
                  <div className="relative">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400/50 shadow-lg"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div>
                    <h4 className="font-bold text-xl text-white">{item.name}</h4>
                    <p className="text-sm text-gray-400 mt-1">{item.company}</p>
                  </div>
                </div>

                {/* 5-star rating */}
                <div className="flex mt-8 text-cyan-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty state */}
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">
                No testimonials found for this category yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Testimonials;