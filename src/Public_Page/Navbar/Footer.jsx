import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
  <footer
  className="relative text-gray-400 pt-20 pb-10 px-6 bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/footer_bg.jpg')",
  }}
>
      {/* OVERLAY (extra depth) */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" /> */}

      <div className="relative max-w-7xl mx-auto grid gap-12 md:grid-cols-4">

        {/* BRAND INFO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/brandnatic_logo.png"
            alt="Brandnatic"
            className="h-10 mb-4"
          />

          <p className="text-sm leading-relaxed">
            At Brandnatic Pvt. Ltd., we create impactful brand experiences through
            creativity, strategy, and innovation. We help businesses amplify
            their presence and drive measurable growth.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full bg-white/5 hover:bg-blue-500/20 text-white transition"
                aria-label="social link"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* SERVICES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4 className="text-white font-semibold mb-5">Services</h4>
          <ul className="space-y-3 text-sm">
            {[
              "E-Commerce Solutions",
              "Lead Generation",
              "Paid Ads",
              "Social Media Marketing",
              "AI-Powered SEO",
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to="/services"
                  className="flex items-center gap-1 hover:text-white transition"
                >
                  {item} <ArrowUpRight size={14} />
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-white font-semibold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Contact Us", path: "/contact" },
              { label: "Blogs", path: "/blogs" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="hover:text-white transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-white font-semibold mb-5">Get In Touch</h4>

          <p className="text-sm leading-relaxed mb-3">
            Gaur City Center, Sector-4, Greater Noida West, UP – 201306
          </p>

          <p className="text-sm mb-2">
            Email:
            <a
              href="mailto:support@brandnatic.com"
              className="text-white ml-1 hover:text-blue-400 transition"
            >
              support@brandnatic.com
            </a>
          </p>

          <p className="text-sm mb-6">
            Hours: Mon–Sat · 10:00AM – 6:00PM
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition text-white px-5 py-2 rounded-lg text-sm"
          >
            Contact Us <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-white/10 mt-16 pt-6 text-center text-xs">
        © {new Date().getFullYear()} Brandnatic Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
