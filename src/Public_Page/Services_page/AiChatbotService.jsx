import { motion } from "framer-motion";
import { Bot, MessageSquare, Zap, BarChart } from "lucide-react";

const features = [
  {
    icon: <Bot size={28} />,
    title: "AI-Powered Conversations",
    desc: "Human-like chatbots trained to understand intent, context, and behavior."
  },
  {
    icon: <MessageSquare size={28} />,
    title: "24/7 Customer Support",
    desc: "Automated support that responds instantly—anytime, anywhere."
  },
  {
    icon: <Zap size={28} />,
    title: "Lead Capture & Automation",
    desc: "Convert visitors into qualified leads automatically."
  },
  {
    icon: <BarChart size={28} />,
    title: "Analytics & Insights",
    desc: "Track conversations, conversions, and user behavior in real-time."
  }
];

export default function AiChatbotService() {
  return (
    <>
    <section className="bg-black text-white pt-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            AI CHATBOT <span className="text-cyan-400">DEVELOPMENT</span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg">
            Build intelligent AI chatbots that engage users, automate support,
            and generate high-quality leads—without human intervention.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mt-20">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold">
              Why Your Business Needs AI Chatbots
            </h2>

            <p className="text-gray-400 leading-relaxed">
             AI chatbots are no longer optional—they are essential. From answering customer queries to qualifying leads and automating workflows, chatbots dramatically improve engagement and conversions.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Our AI chatbot solutions are custom-built for your business, integrated with CRM, WhatsApp, websites, and marketing tools to deliver measurable growth
            </p>

            <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition cursor-pointer">
              Build My AI Chatbot →
            </button>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-[#0b0f19] border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition cursor-pointer"
              >
                <div className="text-cyan-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
    <section className="bg-black text-white py- px-6 border-t border-white/10">
  <div className="max-w-7xl mx-auto space-y-20">

    {/* Why Brandnatic */}
<div className="relative max-w-7xl mx-auto">

  {/* RIGHT FLOATING LOGO (DECORATIVE) */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2"
  >
    {/* Soft Glow */}
    <motion.div
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-72 h-72 rounded-full bg-cyan-500/15 blur-3xl"
    />

    {/* Ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="absolute w-64 h-64 rounded-full border border-cyan-400/20"
    />

    {/* Logo */}
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10 w-36 h-36 rounded-2xl bg-[#0b0f19] border border-white/10 flex items-center justify-center"
    >
      <img
        src="/logo/brandnatic_logo.png"
        alt="Brandnatic Logo"
        className="w-24 h-24 object-contain"
      />
    </motion.div>
  </motion.div>

  {/* CONTENT (UNCHANGED WIDTH) */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-4xl"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Why <span className="text-cyan-400">Brandnatic?</span>
    </h2>

    <p className="text-gray-400 leading-relaxed">
      Great bots start with great questions. We analyze transcripts, funnels,
      and FAQs to uncover sales blockers, then craft intents that mirror your
      best salesperson. Machine learning ranks replies, A/B loops refine them
      weekly, and every step is documented for transparent, repeatable ROI.
    </p>

    <p className="text-gray-400 leading-relaxed mt-4">
      We build for context—real estate, e-commerce, local retail—adapting tone,
      data, and integrations to each sector. Reports arrive Mondays with revenue
      rankings, gaps, and new intents; engineers respond fast with fixes.
      Hot-patches protect momentum, health scores keep us proactive, and
      quarterly reviews turn insights into growth experiments before markets shift.
    </p>
  </motion.div>

</div>


    {/* 4 Step Process */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-12">
        Our <span className="text-cyan-400">4-Step Process</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "Discover",
            desc: "We audit your funnels and define one revenue metric, pinpointing where conversational gaps leak money every hour from data analysis."
          },
          {
            title: "Design",
            desc: "UX writers map dialogues, engineers integrate CRM, payments, WhatsApp APIs, and designers brand the interface to feel truly yours."
          },
          {
            title: "Deploy",
            desc: "We launch, A/B test greetings, monitor sentiment, and fix edge-cases before 90% of users ever notice."
          },
          {
            title: "Drive Results",
            desc: "Weekly insights fine-tune replies, segment audiences, and unlock new automations for higher lifetime value."
          }
        ].map((step, i) => (
          <div
            key={i}
            className="bg-[#0b0f19] border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">
              {step.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </motion.div>

    {/* Success Story */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-5xl"
    >
      <h2 className="text-3xl font-bold mb-6">
        Success <span className="text-cyan-400">Story</span>
      </h2>

      <p className="text-gray-400 leading-relaxed">
        <strong className="text-white">Sunrise Realty</strong>, a mid-sized Mumbai
        property developer, relied on cold calls that rarely reached busy professionals.
        Lead costs were rising and site visits were dropping.
      </p>

      <p className="text-gray-400 leading-relaxed mt-4">
        We embedded a conversational WhatsApp bot that qualified leads by budget
        and location, synced with HubSpot, and auto-scheduled site visits.
        In the first month, the bot handled 1,842 chats, booked 116 site visits,
        and pushed 38 prospects to instant virtual tours.
      </p>

      <p className="text-gray-400 leading-relaxed mt-4">
        Compared to the previous period, qualified leads increased by
        <span className="text-cyan-400 font-semibold"> 47%</span> and cost per lead
        dropped by <span className="text-cyan-400 font-semibold">32%</span>.
      </p>
    </motion.div>

    {/* Testimonial */}
    <div className="relative max-w-5xl mx-auto">

  {/* Gradient Border */}
  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/20 blur-xl" />
    <h className="py-4">TESTIMONIAL</h>
  {/* Card */}
  <div className="relative bg-[#0b0f19] border border-white/10 rounded-3xl p-10 md:p-12 flex flex-col md:flex-row gap-10 items-center">

    {/* LEFT – IMAGE */}
    <div className="shrink-0">
      <div className="w-40 h-40 rounded-full overflow-hidden border border-white/10">
        <img
          src="/testimonial_img/SoftwareDevelopmentService.jpg" 
          alt="Client"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* RIGHT – CONTENT */}
    <div className="flex-1 text-center md:text-left">

      {/* Stars */}
      <div className="flex justify-center md:justify-start gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-cyan-400 text-lg">★</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
        “Brandnatic completely transformed how we handle leads.
        The automation and dashboard clarity saved hours every day
        and directly improved our conversions.”
      </p>

      {/* Name */}
      <div className="text-gray-400">
        <p className="font-semibold text-white">
          Sandeep Yadav
        </p>
        <p className="text-sm">
          Founder, Aarunya Estates
        </p>
      </div>

      {/* Controls (Optional Slider UI) */}
      <div className="flex items-center gap-4 mt-8 justify-center md:justify-start">
        <button className="w-10 h-10 rounded-full border border-white/10 hover:border-cyan-400 transition flex items-center justify-center">
          ←
        </button>

        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
        </div>

        <button className="w-10 h-10 rounded-full border border-white/10 hover:border-cyan-400 transition flex items-center justify-center">
          →
        </button>
      </div>

    </div>
  </div>
</div>

  </div>
</section>

    </>
    
  );
}
