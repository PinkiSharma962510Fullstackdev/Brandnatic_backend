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
    <section className="bg-black text-white py-24 px-6">
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
              AI chatbots are no longer optional—they are essential.
              From answering customer queries to qualifying leads and
              automating workflows, chatbots dramatically improve
              engagement and conversions.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Our AI chatbot solutions are custom-built for your business,
              integrated with CRM, WhatsApp, websites, and marketing tools
              to deliver measurable growth.
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
  );
}
