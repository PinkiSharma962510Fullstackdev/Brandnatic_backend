import { motion } from "framer-motion";
import { Code2, Cpu, Layers, ShieldCheck } from "lucide-react";
import { useState } from "react";
import ContactModal from "../Navbar/ContactModal";

const features = [
  {
    icon: <Code2 size={28} />,
    title: "Custom Software Solutions",
    desc: "Tailor-made software designed to solve real business challenges."
  },
  {
    icon: <Cpu size={28} />,
    title: "Scalable Architecture",
    desc: "High-performance systems built to scale as your business grows."
  },
  {
    icon: <Layers size={28} />,
    title: "Full-Stack Development",
    desc: "Frontend, backend, APIs, and databases—all under one roof."
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Secure & Reliable Systems",
    desc: "Enterprise-grade security, performance, and data protection."
  }
];

 function SoftwareDevelopmentService() {
  const [contactOpen, setContactOpen] = useState(false);
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
            SOFTWARE <span className="text-cyan-400">DEVELOPMENT</span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg">
            Build powerful, scalable, and secure software solutions
            tailored to your business goals and future growth.
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
              Why Choose Custom Software Development
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Off-the-shelf software limits growth. Custom software
              empowers your business with tailored features, better
              performance, and seamless integrations.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We design and develop enterprise-grade software using
              modern technologies, agile methodologies, and
              future-ready architectures to ensure long-term success.
            </p>

            <button  onClick={() => setContactOpen(true)}
 className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition cursor-pointer">
              Start Your Software Project →
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
  <section className="bg-black text-white py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-b-24">

{/* WHY BRANDNATIC */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="grid md:grid-cols-2 justify-between items-center max-w-5xl "
>

  {/* LEFT – CONTENT */}
  <div>
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Why <span className="text-cyan-400">Brandnatic?</span>
    </h2>

    <div className="space-y-6 text-gray-400 text-base leading-relaxed">

      <div>
        <h3 className="text-white text-lg font-semibold mb-1">
          Proven AI-Powered Methodology
        </h3>
        <p>
          Our approach blends intelligent automation with human creativity
          to eliminate waste and multiply ROI—without complexity.
        </p>
      </div>

      <div>
        <h3 className="text-white text-lg font-semibold mb-1">
          Industry-Specific Expertise
        </h3>
        <p>
          From real estate portals to e-commerce platforms, every solution
          is built around real conversion drivers.
        </p>
      </div>

      <div>
        <h3 className="text-white text-lg font-semibold mb-1">
          Transparent Reporting & Rapid Support
        </h3>
        <p>
          Real-time dashboards, clear reporting, and a support team that
          responds in hours—not days.
        </p>
      </div>

    </div>
  </div>

  {/* RIGHT – COMPACT LOGO */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
    className="relative flex justify-center"
  >
    {/* Soft Glow */}
    <motion.div
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-64 h-64 rounded-full bg-cyan-500/15 blur-2xl"
    />

    {/* Ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="absolute w-100 h-100 rounded-full border border-cyan-400/30"
    />

    {/* Logo */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10 w-50 h-50 rounded-2xl bg-[#0b0f19] border border-white/10 flex items-center justify-center"
    >
      <img
        src="/logo/brandnatic_logo.png"
        alt="Brandnatic Logo"
        className="w-200 h-00 object-contain"
      />
    </motion.div>
  </motion.div>

</motion.div>



        {/* PROCESS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Our 4-Step Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "Discover",
                desc: "We analyse your goals, audience, and existing tech stack to identify growth opportunities."
              },
              {
                step: "Design",
                desc: "We craft intuitive, user-first interfaces backed by solid business logic."
              },
              {
                step: "Deploy",
                desc: "We build, test, and launch across web or mobile without disrupting workflows."
              },
              {
                step: "Drive Results",
                desc: "We monitor performance, refine strategies, and ensure consistent ROI improvement."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#0b0f19] border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition"
              >
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  {item.step}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SUCCESS STORY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#0b0f19] border border-white/10 rounded-3xl p-10"
        >
          <h2 className="text-3xl font-semibold mb-6">
            Success Story: <span className="text-cyan-400">Aarunya Estates, Pune</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Aarunya Estates, a mid-sized real estate agency, struggled with
            sluggish lead follow-ups and missed client bookings.
            Brandnatic built a custom lead management dashboard integrated
            with automated WhatsApp follow-ups.
          </p>

          <ul className="grid sm:grid-cols-3 gap-6 text-center mb-10">
            <li className="border border-white/10 rounded-xl p-6">
              <p className="text-3xl font-bold text-cyan-400">47%</p>
              <p className="text-gray-400 text-sm mt-2">Increase in Qualified Leads</p>
            </li>
            <li className="border border-white/10 rounded-xl p-6">
              <p className="text-3xl font-bold text-cyan-400">60%</p>
              <p className="text-gray-400 text-sm mt-2">Faster Response Time</p>
            </li>
            <li className="border border-white/10 rounded-xl p-6">
              <p className="text-3xl font-bold text-cyan-400">1</p>
              <p className="text-gray-400 text-sm mt-2">Unified Sales Dashboard</p>
            </li>
          </ul>

          {/* TESTIMONIAL */}
      
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
          src="/testimonial_img/SoftwareDevelopmentService.webp" 
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

        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Turn Your Idea Into <span className="text-cyan-400">Sales Software</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Stop losing leads to outdated tools. Let’s build something
            that actually boosts revenue.
          </p>

          <button onClick={() => setContactOpen(true)}
 className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition">
            Contact Us →
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

export default SoftwareDevelopmentService;