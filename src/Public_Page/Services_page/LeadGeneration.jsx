// import { Helmet } from "react-helmet-async";
// import { motion } from "framer-motion";

//  function LeadGeneration() {
//   return (
     
//       <>
//   <Helmet>
//     <title>Lead Generation Services | High-Quality Sales Leads</title>

//     <meta
//       name="description"
//       content="Performance-driven lead generation services using Google Ads, Meta Lead Forms, landing pages, WhatsApp automation, and CRM funnels."
//     />

//     <meta
//       name="keywords"
//       content="lead generation services, google lead ads, meta lead forms, landing page funnels, whatsapp lead automation, b2b lead generation"
//     />

//     {/* Open Graph */}
//     <meta property="og:title" content="Lead Generation Services That Convert" />
//     <meta
//       property="og:description"
//       content="Generate sales-ready leads with performance marketing, conversion funnels, and automation."
//     />
//     <meta property="og:type" content="website" />

//     {/* Canonical */}
//     <link rel="canonical" href="https://yourdomain.com/lead-generation" />
//   </Helmet>

//   <section className="min-h-screen bg-black text-white px-6 py-20">
//     {/* existing content */}
//   </section>


//     <section className="min-h-screen bg-black text-white px-6 py-20">
//       <div className="max-w-7xl mx-auto">

//         {/* HERO */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             Lead <span className="text-cyan-400">Generation</span>
//           </h1>

//           <p className="text-gray-400 max-w-3xl mx-auto text-lg">
//             We help businesses generate high-quality, sales-ready leads using
//             performance marketing, funnels, and automation.
//           </p>
//         </motion.div>

//         {/* LEAD CHANNELS */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mb-20"
//         >
//           <h2 className="text-3xl font-bold text-center mb-10">
//             Lead Generation Channels
//           </h2>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//             {channels.map((channel, i) => (
//               <div
//                 key={i}
//                 className="bg-zinc-900 border border-zinc-800 rounded-xl py-6 text-gray-300 hover:border-cyan-400 transition"
//               >
//                 {channel}
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* SERVICES */}
//         <div className="grid md:grid-cols-3 gap-8 mb-20">
//           {services.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-400 transition"
//             >
//               <h3 className="text-xl font-semibold mb-4">
//                 {item.title}
//               </h3>
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* FUNNEL PROCESS */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10"
//         >
//           <h2 className="text-3xl font-bold mb-10 text-center">
//             Our Lead Funnel Process
//           </h2>

//           <div className="grid md:grid-cols-5 gap-6 text-center">
//             {process.map((step, i) => (
//               <div key={i}>
//                 <div className="text-cyan-400 text-2xl font-bold mb-2">
//                   0{i + 1}
//                 </div>
//                 <h4 className="font-semibold mb-2">{step.title}</h4>
//                 <p className="text-gray-400 text-sm">
//                   {step.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//       </div>
//     </section>
//     </>
//   );
// }

// /* DATA */

// const channels = [
//   "Google Lead Ads",
//   "Meta Lead Forms",
//   "Landing Pages",
//   "WhatsApp Automation",
//   "Email Campaigns",
//   "LinkedIn Lead Ads",
//   "CRM Integration",
//   "Retargeting Funnels"
// ];

// const services = [
//   {
//     title: "Paid Lead Campaigns",
//     desc: "High-intent Google & Meta lead ads optimized for low CPL."
//   },
//   {
//     title: "Landing Page Funnels",
//     desc: "Conversion-focused landing pages designed to capture quality leads."
//   },
//   {
//     title: "WhatsApp Automation",
//     desc: "Instant lead follow-ups using WhatsApp bots and workflows."
//   },
//   {
//     title: "CRM & Lead Management",
//     desc: "Lead tracking, scoring, and pipeline management."
//   },
//   {
//     title: "Retargeting Campaigns",
//     desc: "Re-engage warm audiences and improve conversion rates."
//   },
//   {
//     title: "Analytics & Optimization",
//     desc: "Track CPL, lead quality, and ROI with continuous optimization."
//   }
// ];

// const process = [
//   {
//     title: "Audience Research",
//     desc: "Identify buyer intent and targeting segments."
//   },
//   {
//     title: "Funnel Design",
//     desc: "Design high-conversion lead funnels."
//   },
//   {
//     title: "Campaign Setup",
//     desc: "Launch ads with tracking and integrations."
//   },
//   {
//     title: "Automation",
//     desc: "Auto follow-ups via WhatsApp & Email."
//   },
//   {
//     title: "Scale",
//     desc: "Optimize and scale winning campaigns."
//   }
// ];

// export default LeadGeneration;



import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

function LeadGeneration() {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>AI-Powered Lead Generation Services | High-Quality Sales Leads – Brandnatic</title>
        <meta
          name="description"
          content="Generate high-intent, sales-ready leads with Brandnatic's AI-powered lead generation services. Google Ads, Meta Lead Forms, smart landing pages, WhatsApp automation, predictive lead scoring & CRM funnels — all optimized by AI for maximum ROI."
        />

        {/* Keywords (semantic + long-tail) */}
        <meta
          name="keywords"
          content="AI lead generation, lead generation services, Google lead ads, Meta lead forms, WhatsApp lead automation, B2B lead generation agency, predictive lead scoring, high quality sales leads, performance lead gen"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://brandnatic.com/lead-generation" />

        {/* Open Graph */}
        <meta property="og:title" content="AI-Powered Lead Generation | Brandnatic – Convert More Leads" />
        <meta
          property="og:description"
          content="Stop wasting budget on cold traffic. Brandnatic uses AI to find, qualify, and nurture high-intent leads through smart ads, automation, and funnels."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandnatic.com/lead-generation" />
        <meta property="og:image" content="https://brandnatic.com/og-lead-generation.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Lead Generation Services – Brandnatic" />
        <meta
          name="twitter:description"
          content="High-conversion lead gen powered by AI: predictive targeting, WhatsApp bots, CRM automation & performance ads."
        />
        <meta name="twitter:image" content="https://brandnatic.com/og-lead-generation.jpg" />

        {/* Schema - Service Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI-Powered Lead Generation",
            "provider": {
              "@type": "Organization",
              "name": "Brandnatic",
              "url": "https://brandnatic.com"
            },
            "areaServed": "Worldwide",
            "description": "Performance-driven lead generation using AI predictive targeting, Google & Meta Ads, smart funnels, WhatsApp automation, and CRM integration.",
            "offers": {
              "@type": "Offer",
              "name": "AI Lead Generation Package",
              "priceCurrency": "USD",
              "price": "Contact for Custom Quote",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <section className="relative bg-black text-white py-20 md:py-28 px-6 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-blue-900/5 opacity-70 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto z-10 space-y-20 md:space-y-28">

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              AI-Powered <span className="text-cyan-400">Lead Generation</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Stop chasing leads. Let AI find, qualify, and deliver high-intent, sales-ready prospects — automatically.
            </p>
            <p className="mt-4 text-lg text-cyan-400 font-medium">
              Predictable pipeline growth through smart targeting + relentless automation.
            </p>
          </motion.div>

          {/* Key Channels */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our AI-Optimized Lead Channels
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
              {channels.map((channel, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, borderColor: "#22d3ee" }}
                  className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-700 rounded-xl py-5 px-4 text-center text-gray-200 hover:text-cyan-300 transition-all duration-300 text-sm md:text-base font-medium"
                >
                  {channel}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Services */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, borderColor: "#06b6d4" }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:shadow-xl hover:shadow-cyan-900/20 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* AI Advantage Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0b0f19] to-black border border-cyan-900/40 rounded-3xl p-10 md:p-14 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why AI Makes Our Lead Generation <span className="text-cyan-400">Unbeatable</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div>
                <p className="text-5xl font-bold text-cyan-400 mb-2">42%</p>
                <p className="text-gray-300">Average reduction in cost per lead</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-cyan-400 mb-2">3.8×</p>
                <p className="text-gray-300">Higher lead-to-sale conversion</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-cyan-400 mb-2">78%</p>
                <p className="text-gray-300">Leads qualify faster with AI scoring</p>
              </div>
            </div>
          </motion.div>

          {/* Funnel Process */}
         
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true }}
  className="relative bg-gradient-to-br from-[#0b0f19] to-black border border-cyan-900/40 rounded-3xl p-3 md:p-14 shadow-2xl overflow-hidden"
>
  {/* Subtle glow accent */}
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-transparent to-cyan-600/10 blur-3xl pointer-events-none"></div>

  <div className="relative z-10">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-12 md:mb-16 tracking-tight">
      Our Proven <span className="text-cyan-400">AI-Powered Lead Funnel</span>
    </h2>

    <div className="grid md:grid-cols-3 gap-8 md:gap-10">
      {process.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i * 0.15 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, y: -8 }}
          className="relative bg-[#111827]/70 backdrop-blur-md border border-cyan-900/30 rounded-2xl p-6 md:p-8 text-center group hover:border-cyan-500/60 transition-all duration-300"
        >
          {/* Step Number - Big & Glowing */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center text-3xl md:text-4xl font-black text-white shadow-lg shadow-cyan-500/50 border-4 border-black/80 z-10">
            {i + 1}
          </div>

          {/* Title */}
          <h4 className="text-xl md:text-2xl font-bold text-cyan-300 mt-10 mb-4 group-hover:text-cyan-200 transition-colors">
            {step.title}
          </h4>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {step.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center "
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Predictable, <span className="text-cyan-400">High-Volume Leads</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let Brandnatic’s AI engine turn your marketing budget into a consistent flow of qualified sales opportunities.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-5 bg-cyan-500 text-black font-bold text-lg rounded-full hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/30"
            >
              Get Your Free Lead Strategy Audit →
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* DATA (kept same + minor enhancements) */
const channels = [
  "Google Lead Ads",
  "Meta Lead Forms",
  "Smart Landing Pages",
  "WhatsApp AI Automation",
  "Predictive Email Flows",
  "LinkedIn Lead Gen",
  "CRM Lead Scoring",
  "Retargeting + Lookalikes"
];

const services = [
  {
    title: "AI-Powered Paid Campaigns",
    desc: "Google & Meta ads with predictive audience targeting and real-time creative optimization for lowest CPL and highest lead quality."
  },
  {
    title: "Conversion-First Landing Pages",
    desc: "High-speed, mobile-optimized pages built with AI-driven heatmaps and A/B insights to maximize form submissions."
  },
  {
    title: "Intelligent WhatsApp Automation",
    desc: "24/7 lead qualification, instant replies, appointment booking, and smart handoff to sales — powered by AI conversation flows."
  },
  {
    title: "Predictive Lead Scoring & CRM",
    desc: "AI automatically scores leads in real-time, enriches data, and routes hot prospects directly to your best reps."
  },
  {
    title: "Retargeting & Lookalike Scaling",
    desc: "Re-engage warm traffic with dynamic ads and expand reach using AI-generated lookalike audiences."
  },
  {
    title: "Continuous Analytics & Optimization",
    desc: "Real-time dashboards, CPL tracking, lead quality scoring, and weekly AI-driven recommendations."
  }
];

const process = [
  {
    title: "Deep Audience Intelligence",
    desc: "AI analyzes intent signals, competitors & behavior to build hyper-targeted segments."
  },
  {
    title: "Smart Funnel Architecture",
    desc: "Multi-step conversion paths designed for maximum capture and qualification."
  },
  {
    title: "Launch & Track",
    desc: "Campaigns go live with pixel-perfect tracking across platforms and CRM."
  },
  {
    title: "AI Automation Layer",
    desc: "WhatsApp bots, email sequences, and lead scoring run 24/7 with zero manual effort."
  },
  {
    title: "Scale & Refine",
    desc: "AI identifies winners, kills losers, and scales budget to winning segments."
  }
];

export default LeadGeneration;