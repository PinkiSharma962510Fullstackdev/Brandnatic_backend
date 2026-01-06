


import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

function WhoWeAre() {

  return (
    <>
    <Helmet>
  {/* =========================
      BASIC SEO
  ========================== */}
  <title>
    Who We Are | Brandnatic® – AI-Powered Digital Marketing Agency
  </title>

  <meta
    name="description"
    content="Discover Brandnatic — an AI-powered digital marketing agency built on data, automation, and human insight. Learn our story, mission, values, and growth philosophy."
  />

  {/* =========================
      KEYWORD TARGETING (SEMANTIC)
  ========================== */}
  <meta
    name="keywords"
    content="Brandnatic, who we are Brandnatic, AI-powered digital marketing agency, performance marketing agency, SEO automation agency, growth marketing company"
  />

  {/* =========================
      CANONICAL (CRITICAL)
  ========================== */}
  <link
    rel="canonical"
    href="https://brandnatic.com/who-we-are"
  />

  {/* =========================
      OPEN GRAPH (SOCIAL + TRUST)
  ========================== */}
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Who We Are | Brandnatic® – AI-Powered Digital Marketing Agency"
  />
  <meta
    property="og:description"
    content="Brandnatic is an AI-first digital marketing agency helping businesses grow predictably through SEO, ads, automation, and data-driven creativity."
  />
  <meta
    property="og:url"
    content="https://brandnatic.com/who-we-are"
  />
  <meta
    property="og:image"
    content="/public/og-image.jpeg"
  />

  {/* =========================
      TWITTER CARD
  ========================== */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Who We Are | Brandnatic® – AI-Powered Growth Agency"
  />
  <meta
    name="twitter:description"
    content="Meet Brandnatic — an AI-powered digital marketing agency blending automation, SEO, paid ads, and strategy to build scalable growth engines."
  />
  <meta
    name="twitter:image"
    content="/public/og-image.jpeg"
  />

  {/* =========================
      ROBOTS (SAFE DEFAULT)
  ========================== */}
  <meta name="robots" content="index, follow" />

  {/* =========================
      SCHEMA: ABOUT PAGE (VERY POWERFUL)
  ========================== */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "Who We Are - Brandnatic",
      "url": "https://brandnatic.com/who-we-are",
      "description": "Brandnatic is an AI-powered digital marketing agency focused on SEO, paid ads, automation, and scalable growth strategies.",
      "publisher": {
        "@type": "Organization",
        "name": "Brandnatic",
        "url": "https://brandnatic.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://brandnatic.com/logo.png"
        }
      }
    }
    `}
  </script>
</Helmet>

    <section className="relative bg-black text-white min-h-screen py-16 md:py-24 px-6 overflow-hidden">
      {/* Global subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/5 opacity-70 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto z-10 space-y-24 md:space-y-32">

        {/* Hero Title + Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.2] tracking-tight">
  The AI-Powered
  <span className="block text-cyan-400 mt-2 mb-2">
    Digital Marketing
  </span>
  Agency
</h1>
          <p className="mt-6 md:mt-10 text-2xl md:text-3xl lg:text-4xl font-medium text-cyan-300">
            Driving Growth with Innovation
          </p>
        </motion.div>

        {/* Hero Image with Quote Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1920&auto=format&fit=crop&q=80"
            alt="Modern creative team collaborating with laptops and energy"
            className="w-full h-[500px] md:h-[700px] lg:h-[800px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 to-transparent mix-blend-overlay z-10"></div>

          <div className="absolute inset-0 flex items-center justify-center z-20 px-8">
            <blockquote className="text-2xl md:text-4xl lg:text-5xl font-light italic text-white text-center drop-shadow-2xl max-w-5xl leading-tight">
              “Marketing is no longer about the stuff you make, but the stories you tell — and how smartly you tell them.”
            </blockquote>
          </div>
        </motion.div>

        {/* Intro + Mission */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Have you ever wondered what separates a thriving brand from one that gets lost in the digital crowd? 
            Why do some businesses consistently dominate search results, attract leads, and convert effortlessly—
            while others struggle to gain traction despite great products or services?
          </p>

          <p className="text-lg md:text-xl text-gray-400">
            At Brandnatic, we believe the answer lies in the power of <span className="text-cyan-300 font-medium">data-driven creativity</span> — 
            where artificial intelligence meets human insight. For over six years, we’ve been on a mission to transform 
            how businesses grow online, using cutting-edge digital marketing strategies, AI-powered tools, and automation 
            systems that make success not just achievable but <span className="text-cyan-400 font-semibold">predictable</span>.
          </p>
        </motion.div>

        {/* Stats - Large & Impactful */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "6+", label: "Years of Experience" },
            { number: "100+", label: "Projects Delivered" },
            { number: "5", label: "Awards" },
            { number: "50+", label: "Happy Clients" },
          ].map((stat, i) => (
            <div key={i} className="bg-gradient-to-b from-[#0b0f19]/80 to-black/60 backdrop-blur-md border border-cyan-900/40 rounded-3xl p-10 shadow-xl hover:border-cyan-500/60 transition-all duration-300">
              <p className="text-6xl md:text-7xl font-bold text-cyan-400 mb-3">{stat.number}</p>
              <p className="text-xl text-gray-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our Story: <span className="text-cyan-400">From Vision to Digital Revolution</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Every great agency begins with a spark—and ours was a belief that marketing shouldn’t just be creative, it should be intelligent.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Founded six years ago by passionate marketers and tech innovators, Brandnatic emerged with a clear goal: 
              to revolutionize traditional marketing using the power of AI. We started as a small team, driven by curiosity 
              and the determination to blend automation with creativity. Today, we’ve evolved into a trusted AI-powered 
              digital marketing agency, helping hundreds of businesses across industries achieve measurable growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-gray-900/80 to-black/70 backdrop-blur-lg border border-cyan-900/30 rounded-3xl p-12 shadow-2xl"
          >
            <p className="text-xl italic text-gray-200 text-center leading-relaxed">
              At Brandnatic, that quote isn’t just a philosophy; it’s our daily practice.
            </p>
          </motion.div>
        </div>

        {/* Why We Exist + Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center space-y-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why <span className="text-cyan-400">We Exist</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Every business deserves a predictable growth engine powered by insight, not guesswork, 
              and Brandnatic builds exactly that with ethical, search-friendly foundations.
            </p>
            <p className="mt-6 text-lg italic text-cyan-300">
              “Great marketing is clarity in motion.”
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-6">Six Years of Outcomes</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              For 6 years, Brandnatic has helped growth-focused businesses turn channels into revenue 
              through disciplined testing and AI-assisted optimization. From lead gen to retention, 
              the agency’s approach is pragmatic, fast, and relentlessly outcome-driven.
            </p>
          </div>
        </motion.div>

        {/* What Sets Us Apart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center mb-10">
            What Sets <span className="text-cyan-400">Brandnatic</span> Apart?
          </h2>

          <div className="max-w-4xl mx-auto space-y-10 mb-20">
            {[
              {
                num: "1",
                title: "AI-first orchestration",
                desc: "Across ads, content, and funnels for faster insights and better creative-market fit."
              },
              {
                num: "2",
                title: "Search-centered architecture",
                desc: "Respects Google’s fundamentals: crawlability, clarity, and usefulness."
              },
              {
                num: "3",
                title: "Automation that scales",
                desc: "Reduces operational drag and speeds response times across WhatsApp, web, and CRM."
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-cyan-600/20 border-2 border-cyan-500/50 flex items-center justify-center text-3xl font-bold text-cyan-400 shadow-lg">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-3xl font-semibold text-cyan-300 mb-3">{item.title}</h3>
                  <p className="text-xl text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <h2 className="text-5xl font-bold text-center mb-16">
            Services that <span className="text-cyan-400">Scale Results</span>
          </h2>

          <div className="overflow-x-auto pb-10 scrollbar-hide">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 min-w-[1400px] lg:min-w-full">
              {[
                {
                  title: "Meta Ads",
                  desc: "Full-funnel campaigns with creative iteration, audience refinement, and event tracking to compress CAC.",
                  img: "https://images.unsplash.com/photo-1611162617210-7a9e3d9c4d8f?w=800"
                },
                {
                  title: "Google Ads",
                  desc: "High-intent capture via SKAG-informed structures, extensions, and landing page alignment.",
                  img: "https://images.unsplash.com/photo-1556155099-490a1ba16284?w=800"
                },
                {
                  title: "SEO and Content",
                  desc: "Topic clusters, entity-rich pages, and UX improvements that compound over time.",
                  img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800"
                },
                {
                  title: "AI Chatbots",
                  desc: "Lead qualification, FAQs, appointment booking, and handoff to human teams, 24/7.",
                  img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800"
                },
                {
                  title: "Automation",
                  desc: "Triggered journeys across CRM, WhatsApp, email, and site chat to increase LTV.",
                  img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
                },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="relative bg-gradient-to-b from-[#0b0f19] to-black border border-cyan-900/40 rounded-3xl overflow-hidden group hover:border-cyan-500 transition-all duration-500 shadow-xl"
                >
                  <div className="h-64 relative">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white drop-shadow-2xl z-20">
                      {service.title}
                    </h3>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-300 leading-relaxed">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center py-20 bg-gradient-to-b from-transparent via-cyan-950/30 to-transparent rounded-3xl border border-cyan-900/30"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Let’s Grow <span className="text-cyan-400">Together</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            You had questions when you searched for us: Can a digital agency truly guarantee results? 
            Can automation replace human touch without losing quality? Here’s our answer: 
            <span className="text-cyan-300 font-semibold"> Yes — when done right.</span> The proof lies in our client success stories, 
            where automation amplified human creativity rather than replacing it.
          </p>

          <p className="text-3xl font-medium italic text-cyan-400 mb-10">
            Ready to unlock the next level for your business? At Brandnatic, your brand’s growth isn’t just another campaign — it’s a mission.
          </p>

          <p className="text-2xl text-gray-200">
            Let your business be driven by <span className="text-cyan-400 font-bold">innovation</span> — not guesswork.
          </p>
        </motion.div>
      </div>
    </section>
    </>
  );
}

export default WhoWeAre;