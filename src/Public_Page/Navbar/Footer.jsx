import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import ContactModal from "../Navbar/ContactModal";
import { useState } from "react";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

function Footer() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <footer 
      className="relative bg-black text-gray-300 border-t border-white/5 overflow-hidden"
     style={{
  backgroundImage: "url('/images/footer_bg.webp')",
  backgroundSize: "cover",
  backgroundPosition: "center",
}}

    >
      {/* Dark Overlay for Readability + Premium Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/30" />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <img
              src="/logo/brandnatic_logo.png"
              alt="Brandnatic Logo"
              className="h-12"
            />
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Brandnatic is an AI-powered digital marketing agency helping
              businesses grow with data-driven strategies, automation, and
              high-conversion digital experiences.
            </p>
            {/* SOCIAL LINKS */}
<div className="flex items-center gap-4 pt-2">
  {/* INSTAGRAM */}
  <a
    href="https://www.instagram.com/brandnatic.ai?igsh=N3RpcWU3a3h0NnZv"
    aria-label="Brandnatic on Instagram"
    title="Brandnatic Instagram"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-white/5 hover:bg-[#1AA9F2] transition"
  >
    <Instagram size={18} />
  </a>

  {/* LINKEDIN */}
  <a
    href="https://www.linkedin.com/company/brandnatic"
    aria-label="Brandnatic on LinkedIn"
    title="Brandnatic LinkedIn"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-white/5 hover:bg-[#1AA9F2] transition"
  >
    <Linkedin size={18} />
  </a>

  {/* FACEBOOK */}
  <a
    href="https://www.facebook.com/brandnaticdigitalmarketing"
    aria-label="Brandnatic on Facebook"
    title="Brandnatic Facebook"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-white/5 hover:bg-[#1AA9F2] transition"
  >
    <Facebook size={18} />
  </a>
</div>

  {/* <a
    href="https://twitter.com/yourprofile"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-white/5 hover:bg-[#1AA9F2] transition"
  >
    <Twitter size={18} />
  </a> */}


          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-chatbot-development" className="text-sm text-gray-400 hover:text-[#1AA9F2] transition duration-300">AI Chatbot Development</Link></li>
              <li><Link to="/software-development" className="text-sm text-gray-400 hover:text-[#1AA9F2] transition duration-300">Software Development</Link></li>
              <li><Link to="/automation" className="text-sm text-gray-400 hover:text-[#1AA9F2] transition duration-300">Automation</Link></li>
              <li><Link to="/ecommerce-solutions" className="text-sm text-gray-400 hover:text-[#1AA9F2] transition duration-300">E-Commerce Solutions</Link></li>
              <li><Link to="/seo-smo" className="text-sm text-gray-400 hover:text-[#1AA9F2] transition duration-300">SEO & SMO</Link></li>
              <li><Link to="/paid-ads" className="text-sm text-gray-400 hover:text-[#1AA9F2] transition duration-300">Paid Ads</Link></li>
              <li><Link to="/social-media-marketing" className="text-sm text-gray-400 hover:text-[#1AA9F2] transition duration-300">Social Media Marketing</Link></li>
              <li><Link to="/lead-generation" className="text-sm text-gray-400 hover:text-[#1AA9F2] transition duration-300">Lead Generation</Link></li>
              <li><Link to="/website-design-development" className="text-sm text-gray-400 hover:text-[#1AA9F2] transition duration-300">Website Design & Development</Link></li>
              <li><Link to="/mobile-app-development" className="text-sm text-gray-400 hover:text-[#1AA9F2] transition duration-300">Mobile App Development</Link></li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-gray-400 hover:text-[#1AA9F2] transition duration-300">Home</Link></li>
              <li><Link to="/portfolio" className="text-sm text-gray-400 hover:text-[#1AA9F2] transition duration-300">Portfolio</Link></li>
              <li><Link to="/blogs" className="text-sm text-gray-400 hover:text-[#1AA9F2] transition duration-300">Blog</Link></li>
              <li><Link to="/who-we-are" className="text-sm text-gray-400 hover:text-[#1AA9F2] transition duration-300">Who We Are</Link></li>
              <li><Link to="/testimonials" className="text-sm text-gray-400 hover:text-[#1AA9F2] transition duration-300">Testimonials</Link></li>
              <li><button
  onClick={() => setContactOpen(true)}
  className="text-sm text-gray-400 hover:text-[#1AA9F2] transition duration-300 text-left"
>


  Contact
</button></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white">Contact</h4>
            
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#1AA9F2]" />
                <span className="text-gray-400">Gaur City Center, Near Gaur Chowk, Sec-4, Greater Noida West, Greater Noida, Uttar Pradesh - 201318</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#1AA9F2]" />
                <a href="mailto:info@brandnatic.com" className="text-gray-400 hover:text-[#1AA9F2] transition">
                  support@brandnatic.com
                </a>
              </div>
              
            </div>

            <p className="mt-6 text-xs uppercase tracking-wider text-gray-500 font-medium">
              BRANDNATIC | AI DIGITAL MARKETING AGENCY IN NOIDA & DELHI NCR
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500"
        >
          <span>© {new Date().getFullYear()} Brandnatic. All rights reserved.</span>
          <span>Designed & Developed by Brandnatic</span>
        </motion.div>
      </div>

      {/* Subtle Premium Accents */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#1AA9F2]/5 rounded-full blur-3xl" />

      {/* CONTACT MODAL */}
<ContactModal
  open={contactOpen}
  onClose={() => setContactOpen(false)}
/>

    </footer>
  );
}

export default Footer;