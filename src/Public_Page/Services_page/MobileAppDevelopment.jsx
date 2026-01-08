


import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";

import ContactModal from "../Navbar/ContactModal";




function MobileAppDevelopment() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>AI-Powered Mobile App Development | Android, iOS & Cross-Platform – Brandnatic</title>
        <meta
          name="description"
          content="Build high-performance, scalable mobile apps with Brandnatic. AI-driven development for Android, iOS, React Native, Flutter — delivering seamless UX, fast launch, and measurable business growth."
        />

        {/* Keywords – semantic + long-tail */}
        <meta
          name="keywords"
          content="AI mobile app development, android app development company, ios app development services, react native development, flutter app developer, cross-platform mobile apps, enterprise mobile solutions, custom mobile app agency"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://brandnatic.com/mobile-app-development" />

        {/* Open Graph */}
        <meta property="og:title" content="AI-Powered Mobile App Development | Brandnatic" />
        <meta
          property="og:description"
          content="From idea to app store — we build intelligent, scalable mobile apps with AI-enhanced UX, performance, and backend for modern businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandnatic.com/mobile-app-development" />
        <meta property="og:image" content="https://brandnatic.com/og-mobile-app.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Mobile App Development – Brandnatic" />
        <meta
          name="twitter:description"
          content="AI-first mobile apps: React Native, Flutter, native iOS/Android — fast, secure, and built to scale your business."
        />
        <meta name="twitter:image" content="https://brandnatic.com/og-mobile-app.jpg" />

        {/* Schema - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI-Powered Mobile App Development",
            "provider": {
              "@type": "Organization",
              "name": "Brandnatic",
              "url": "https://brandnatic.com"
            },
            "areaServed": "Worldwide",
            "description": "Custom Android, iOS, React Native & Flutter mobile apps with AI-enhanced UX, performance optimization, and scalable backend.",
            "offers": {
              "@type": "Offer",
              "name": "Mobile App Development Package",
              "priceCurrency": "USD",
              "price": "Contact for Custom Quote",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <section className="relative bg-black text-white py-20 md:py-28 px-6 overflow-hidden">
        {/* Subtle cyan glow background */}
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
              AI-Powered <span className="text-cyan-400">Mobile App Development</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              From vision to viral app — we build intelligent, high-performance mobile experiences that drive user retention, revenue, and scale.
            </p>
            <p className="mt-4 text-lg text-cyan-400 font-medium">
              Future-ready apps powered by AI-enhanced UX, performance, and backend intelligence.
            </p>
          </motion.div>

          {/* App Types – Premium Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Apps We Build with AI Precision
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
              {appTypes.map((type, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, borderColor: "#22d3ee" }}
                  className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-700 rounded-xl py-5 px-4 text-center text-gray-200 hover:text-cyan-300 transition-all duration-300 text-sm md:text-base font-medium shadow-sm hover:shadow-cyan-500/20"
                >
                  {type}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Services – Enhanced */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, borderColor: "#06b6d4", boxShadow: "0 0 30px rgba(6, 182, 212, 0.15)" }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* AI Advantage Block */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0b0f19] to-black border border-cyan-900/40 rounded-3xl p-10 md:p-14 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Why Choose Brandnatic for <span className="text-cyan-400">Mobile Excellence</span>?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div>
                <p className="text-5xl font-bold text-cyan-400 mb-2">60%</p>
                <p className="text-gray-300">Faster time-to-market with AI automation</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-cyan-400 mb-2">4.8/5</p>
                <p className="text-gray-300">Average App Store rating from our clients</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-cyan-400 mb-2">92%</p>
                <p className="text-gray-300">User retention after first 30 days</p>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Modern Tech Stack
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
              {techStack.map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, borderColor: "#22d3ee" }}
                  className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-700 rounded-xl py-5 px-4 text-center text-gray-200 hover:text-cyan-300 transition-all duration-300 text-sm md:text-base font-medium shadow-sm hover:shadow-cyan-500/20"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Development Process */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0b0f19] to-black border border-cyan-900/40 rounded-3xl p-10 md:p-14 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
              Our AI-Accelerated App Development Process
            </h2>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="relative bg-[#111827]/70 backdrop-blur-md border border-cyan-900/30 rounded-2xl p-6 md:p-8 group hover:border-cyan-500/60 transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl font-black text-cyan-400/30 mb-4">
                    0{i + 1}
                  </div>
                  <h4 className="text-xl font-bold text-cyan-300 mb-3 group-hover:text-cyan-200">
                    {step.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your <span className="text-cyan-400">Next Big App</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let Brandnatic turn your idea into a powerful, AI-enhanced mobile experience that users love and your business scales with.
            </p>
            <button
              onClick={() => setContactOpen(true)}
              className="inline-block px-10 py-5 bg-cyan-500 text-black font-bold text-lg rounded-full hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/30"
            >
              Start Your App Project Today →
            </button>
          </motion.div>
        </div>
        {/* CONTACT MODAL */}
<ContactModal
  open={contactOpen}
  onClose={() => setContactOpen(false)}
/>

      </section>
    </>
  );
}

/* DATA – Enhanced for premium feel */
const appTypes = [
  "Native Android",
  "Native iOS",
  "React Native",
  "Flutter Cross-Platform",
  "E-Commerce Apps",
  "On-Demand Services",
  "Fintech & Banking",
  "EdTech & Learning"
];

const services = [
  {
    title: "AI-Enhanced UI/UX Design",
    desc: "User-centric designs powered by AI heatmaps, behavior analysis, and predictive personalization for maximum engagement."
  },
  {
    title: "Native & Cross-Platform Development",
    desc: "High-performance native (Swift/Kotlin) and cross-platform (React Native/Flutter) apps — built for speed and scale."
  },
  {
    title: "Intelligent Backend & APIs",
    desc: "Secure, scalable cloud backends with AI-driven logic, real-time features, and seamless third-party integrations."
  },
  {
    title: "AI-Powered Testing & QA",
    desc: "Automated testing, performance profiling, and AI bug prediction for flawless app launches."
  },
  {
    title: "App Store Optimization (ASO)",
    desc: "Keyword research, visuals, and metadata optimized by AI to boost downloads and visibility."
  },
  {
    title: "Post-Launch Growth & Maintenance",
    desc: "Continuous updates, AI-driven analytics, user feedback loops, and performance scaling."
  }
];

const techStack = [
  "React Native",
  "Flutter",
  "Swift (iOS)",
  "Kotlin (Android)",
  "Node.js + Express",
  "Firebase / Supabase",
  "AWS / GCP",
  "MongoDB / PostgreSQL"
];

const process = [
  {
    title: "Discovery & AI Insights",
    desc: "Deep business & user analysis with AI-driven market & competitor intelligence."
  },
  {
    title: "UI/UX Design & Prototyping",
    desc: "AI-assisted wireframes, high-fidelity designs, and interactive prototypes."
  },
  {
    title: "Full-Stack Development",
    desc: "Agile build with AI code review, real-time features, and performance optimization."
  },
  {
    title: "Rigorous AI Testing",
    desc: "Automated + manual QA with AI bug prediction and cross-device simulation."
  },
  {
    title: "Launch, ASO & Scale",
    desc: "App store submission, AI-optimized ASO, post-launch analytics, and growth iterations."
  }
];

export default MobileAppDevelopment;