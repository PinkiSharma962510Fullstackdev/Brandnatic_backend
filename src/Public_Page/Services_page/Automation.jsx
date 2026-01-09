import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";

import ContactModal from "../Navbar/ContactModal";

 function Automation() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
    <Helmet>
  {/* Primary SEO */}
  <title>Business Automation Services | AI Workflow Automation – Brandnatic</title>

  <meta
    name="description"
    content="Brandnatic provides business automation services to automate leads, sales, CRM, WhatsApp, email, and workflows. Reduce manual work and scale operations with AI-powered automation."
  />

  <meta
    name="keywords"
    content="business automation services, workflow automation, AI automation, CRM automation, WhatsApp automation, marketing automation, sales automation"
  />

  <meta name="author" content="Brandnatic" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:title" content="Business Automation Services | Brandnatic" />
  <meta
    property="og:description"
    content="Automate leads, follow-ups, CRM, and marketing with Brandnatic’s AI-powered business automation solutions."
  />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://brandnatic.com/og-automation.jpg" />
</Helmet>

    <section className="min-h-screen bg-black text-white px-6 pt-20">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
  Business <span className="text-cyan-400">Automation Services</span>
</h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We build smart automation systems that eliminate manual work,
            reduce errors, and scale your business operations automatically.
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

        {/* PROCESS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">
            Our Automation Process
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
    {/* =====================================
   WHY BRANDNATIC – AUTOMATION DEEP DIVE
===================================== */}
<section className="bg-black text-white px-6 py-24 border-t border-white/10">
  <div className="max-w-7xl mx-auto ">

    {/* WHY BRANDNATIC */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="max-w-4xl"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Why <span className="text-cyan-400">Brandnatic?</span>
      </h2>

      <p className="text-gray-400 leading-relaxed">
        Our automation framework, refined through 6 years of marketing and
        hundreds of Indian campaigns, unites behavioural triggers,
        predictive analytics, and orchestration into one repeatable system.
        In weeks, scattered tools evolve into a self-optimising revenue engine.
      </p>

      <p className="text-gray-400 leading-relaxed mt-4">
        Every automation is version-controlled, tested, and documented to
        ensure scalable growth. Our data scientists update scoring models
        quarterly to match shifting buyer patterns across real estate,
        e-commerce, and retail.
      </p>

      <p className="text-gray-400 leading-relaxed mt-4">
        We map realty cycles, broker reminders, and paperwork nudges; build
        Shopify integrations for seamless data sync; and power geofenced
        messages that engage walk-in customers instantly—crafted for your
        business, not templates.
      </p>
    </motion.div>

    {/* AI CHATBOT */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="max-w-4xl"
    >
      <h2 className="text-3xl font-bold mb-6">
        AI <span className="text-cyan-400">Chatbots</span>
      </h2>

      <p className="text-gray-400 leading-relaxed">
        Struggling with missed leads from endless calls, emails, and DMs?
        Brandnatic’s scalable AI chatbots greet every visitor, qualify intent,
        and push hot leads directly to your CRM—no code required.
      </p>

      <p className="text-gray-400 leading-relaxed mt-4">
        Focus on growth without the cost of extra staff or complex technology.
      </p>

      <button  onClick={() => setContactOpen(true)}
 className="my-6 inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition">
        Let’s Talk →
      </button>
    </motion.div>

    {/* WHAT WE AUTOMATE */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-10">
        What We <span className="text-cyan-400">Automate</span>
      </h2>

      <ul className="grid md:grid-cols-2 gap-6 text-gray-400">
        {[
          "Lead capture and scoring across forms, ads, chat, and QR codes",
          "Drip email, SMS, and WhatsApp nurturing tied to real-time behaviour",
          "Appointment scheduling with auto-reminders and calendar sync",
          "Sales pipeline updates inside HubSpot, Zoho, or Google Sheets",
          "Dynamic retargeting audiences from CRM milestones",
          "Post-sale review requests and referral prompts"
        ].map((item, i) => (
          <li
            key={i}
            className="bg-[#0b0f19] border border-white/10 rounded-xl p-5 hover:border-cyan-400 transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>

   {/* ===============================
   SUCCESS STORY – AUTOMATION
================================ */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="bg-[#0b0f19] border border-white/10 rounded-3xl p-10 max-w-6xl"
>
  <h2 className="text-3xl font-semibold mb-6">
    Success Story: <span className="text-cyan-400">Zaveri Homes, Pune</span>
  </h2>

  <p className="text-gray-400 text-lg leading-relaxed mb-8">
    Zaveri Homes was drowning in manual follow-ups. Sales teams chased cold
    leads while serious buyers slipped away. Brandnatic integrated Facebook
    lead ads with Instagram chatbots and built an email–SMS–WhatsApp
    automation sequence triggered by site-visit intent.
  </p>

  <ul className="grid sm:grid-cols-3 gap-6 text-center mb-10">
    <li className="border border-white/10 rounded-xl p-6">
      <p className="text-3xl font-bold text-cyan-400">47%</p>
      <p className="text-gray-400 text-sm mt-2">Increase in Qualified Leads</p>
    </li>
    <li className="border border-white/10 rounded-xl p-6">
      <p className="text-3xl font-bold text-cyan-400">38%</p>
      <p className="text-gray-400 text-sm mt-2">Shorter Sales Cycle</p>
    </li>
    <li className="border border-white/10 rounded-xl p-6">
      <p className="text-3xl font-bold text-cyan-400">₹1.3 Cr</p>
      <p className="text-gray-400 text-sm mt-2">Revenue Growth in 1 Quarter</p>
    </li>
  </ul>
  {/* ===============================
   TESTIMONIAL – AUTOMATION
================================ */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative max-w-5xl mx-auto"
>
  {/* Glow */}
  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/20 blur-xl" />

  <div className="relative bg-[#0b0f19] border border-white/10 rounded-3xl p-10 md:p-12 flex flex-col md:flex-row gap-10 items-center">
    {/* IMAGE */}
    <div className="shrink-0">
      <div className="w-36 h-36 rounded-full overflow-hidden border border-white/10">
        <img
          src="/testimonial_img/Automation.webp"
          alt="Client"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* CONTENT */}
    <div className="flex-1 text-center md:text-left">
      <div className="flex justify-center md:justify-start gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-cyan-400 text-lg">★</span>
        ))}
      </div>

      <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
        “Brandnatic’s automation changed how we work. Leads are followed up
        instantly, site visits are booked automatically, and my sales team
        finally focuses on closing—not chasing.Brandnatic’s automation completely transformed our sales workflow. Leads are followed up instantly, site visits are booked automatically, and our sales team now focuses on closing deals instead of chasing prospects.”
      </p>

      <div className="text-gray-400">
        <p className="font-semibold text-white">
          Sales Director, Shree Shyam Realty
        </p>
        <p className="text-sm">
          Rahul Mehta
        </p>
      </div>
    </div>
  </div>
</motion.div>
</motion.div>
<p className="sr-only">
  Brandnatic is a business automation company helping Indian businesses
  automate lead capture, CRM workflows, WhatsApp messaging, email nurturing,
  and sales pipelines using AI-driven automation systems.
</p>



{/* ===============================
   FINAL CTA – AUTOMATION
================================ */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-center"
>
  <h2 className="text-3xl md:text-4xl font-bold mb-6">
    Let’s Turn Your <span className="text-cyan-400">Manual Work</span> Into
    Automated Revenue
  </h2>

  <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto">
    Stop losing time and leads to spreadsheets, reminders, and follow-ups.
    Let’s build an automation system that runs your business—even when
    you’re offline.
  </p>

  <button  onClick={() => setContactOpen(true)}
 className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition">
    Start Automation →
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

/* DATA */

const features = [
  {
    title: "Workflow Automation",
    desc: "Automate repetitive business tasks like lead handling, follow-ups, and reporting."
  },
  {
    title: "CRM & Tool Integration",
    desc: "Seamless integration between CRM, WhatsApp, Email, Google Sheets, and more."
  },
  {
    title: "AI-Based Automation",
    desc: "AI-powered triggers, chatbots, and smart decision-based automations."
  },
  {
    title: "Marketing Automation",
    desc: "Auto email campaigns, drip funnels, lead scoring, and nurturing systems."
  },
  {
    title: "Sales Automation",
    desc: "Automated deal tracking, reminders, pipeline updates, and conversions."
  },
  {
    title: "Custom Automation",
    desc: "Tailor-made automation solutions built specifically for your business flow."
  }
];

const process = [
  {
    title: "Analysis",
    desc: "We analyze your current workflow and identify automation opportunities."
  },
  {
    title: "Strategy",
    desc: "We design a scalable automation strategy aligned with your business goals."
  },
  {
    title: "Implementation",
    desc: "We build, integrate, and test automation systems end-to-end."
  },
  {
    title: "Optimization",
    desc: "Continuous monitoring and optimization for maximum efficiency."
  }
];

export default Automation;