import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import MegaMenu from "./MegaMenu";

/* ✅ CORRECT MODALS (FIXED) */
import ContactModal from "./ContactModal";
import SearchModal from "./SearchModal";

/* =======================
   MENU DATA
======================= */
const servicesMenu = [
  {
    id: "ai-chatbot-development",
    title: "AI CHATBOT DEVELOPMENT",
    desc: "Smart AI chatbots for customer support, lead capture, and automation",
    image: "/services_img/ai-chatbot-development.webp",
    
    route: "/ai-chatbot-development",
  },
  {
    id: "software-development",
    title: "SOFTWARE DEVELOPMENT",
    desc: "Custom software solutions tailored to your business needs",
    image: "/services_img/software-development.webp",
    route: "/software-development",
  },
  {
    id: "automation",
    title: "AUTOMATION",
    desc: "AI-powered marketing & business automation workflows",
    image: "/services_img/automation.webp",
    route: "/automation",
  },
  {
    id: "ecommerce-solution",
    title: "E-COMMERCE SOLUTION",
    desc: "High-performance eCommerce websites that drive sales",
    image: "/services_img/ecommerce-solution.webp",
    route: "/ecommerce-solutions",
  },
  {
    id: "seo-smo",
    title: "SEO & SMO",
    desc: "Search engine optimization & social media visibility growth",
    image: "/services_img/seo-smo.webp",
    route: "/seo-smo",
  },
  {
    id: "paid-ads",
    title: "PAID ADS",
    desc: "ROI-focused Google Ads, Meta Ads & performance campaigns",
    image: "/services_img/paid-ads.webp",
    route: "/paid-ads",
  },
  {
    id: "social-media-marketing",
    title: "SOCIAL MEDIA MARKETING",
    desc: "Brand growth & engagement across all social platforms",
    image: "/services_img/automation.webp",
    route: "/social-media-marketing",
  },
  {
    id: "lead-generation",
    title: "LEAD GENERATION",
    desc: "High-quality leads through data-driven digital strategies",
    image: "/services_img/lead-generation.webp",
    route: "/lead-generation",
  },
  {
    id: "website-design-development",
    title: "WEBSITE DESIGN & DEVELOPMENT",
    desc: "Modern, fast, and high-conversion website solutions",
    image: "/services_img/website-design-development.webp",
    route: "/website-design-development",
  },
  {
    id: "mobile-app-development",
    title: "MOBILE APP DEVELOPMENT",
    desc: "Scalable Android & iOS mobile application development",
    image: "/services_img/mobile-app-development.webp",
    route: "/mobile-app-development",
  },
];

const companyMenu = [
  {
    id: "who-we-are",
    title: "Who We Are",
    desc: "Our mission & vision",
    image: "/images/whoweare.webp",
    route: "/who-we-are",
  },
  {
    id: "testimonials",
    title: "Testimonials",
    desc: "What our clients say",
    image: "/images/testimonial.webp",
    route: "/testimonials",
  },
];

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

  const [contactOpen, setContactOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className="
          fixed top-0 w-full z-[9999] bg-black
          shadow-[0_12px_40px_rgba(0,0,0,1),0_0_30px_rgba(255,255,255,0.08)]
        "
      >
        <div className="h-16 lg:h-[72px]">
          <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between text-white">

            {/* LOGO */}
            <Link
              to="/"
              onClick={() => {
                setMobileOpen(false);
                setOpenMenu(null);
              }}
            >
              <img
                src="/images/brandnatic_logo.webp"
                alt="Brandnatic Logo"
                className="h-10 w-auto"
              />
            </Link>

            {/* ================= DESKTOP MENU ================= */}
            <ul
              className="
                hidden lg:flex items-center gap-5
                px-7 py-2.5 rounded-full
                bg-black border border-[#777575]
                text-[15px] font-medium
              "
            >
              <li>
                <Link to="/" className="hover:text-blue-400">Home</Link>
              </li>

              {/* SERVICES */}
              <li
                className="relative"
                onMouseEnter={() => setOpenMenu("services")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <span className="cursor-pointer hover:text-blue-400">Services</span>
                {openMenu === "services" && (
                  <MegaMenu items={servicesMenu} closeMenu={() => setOpenMenu(null)} />
                )}
              </li>

              {/* COMPANY */}
              <li
                className="relative"
                onMouseEnter={() => setOpenMenu("company")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <span className="cursor-pointer hover:text-blue-400">Company</span>
                {openMenu === "company" && (
                  <MegaMenu items={companyMenu} closeMenu={() => setOpenMenu(null)} />
                )}
              </li>

              {/* BLOGS */}
              <li>
                <Link to="/blogs" className="hover:text-blue-400">Blog</Link>
              </li>

                {/* Portfolio */}
              <li>
                <Link to="/portfolio" className="hover:text-blue-400">Portfolio</Link>
              </li>

              {/* CONTACT */}
              <li
                onClick={() => setContactOpen(true)}
                className="cursor-pointer px-4 py-1.5 bg-[#1AA9F2] rounded-full text-sm hover:bg-[#0a6999]"
              >
                Contact Us
              </li>

              {/* SEARCH */}
              <Search
                className="w-5 h-5 cursor-pointer hover:text-blue-400"
                onClick={() => setOpenSearch(true)}
              />
            </ul>

            {/* ================= MOBILE TOGGLE ================= */}
            <button
              onClick={() => {
                setMobileOpen(!mobileOpen);
                setActiveMobileSubmenu(null);
              }}
              className="lg:hidden"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileOpen && (
  <div className="lg:hidden fixed inset-0 z-50 bg-black text-white overflow-y-auto">

    {/* HEADER */}
    <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
      <span className="text-xl font-bold">Brandnatic</span>
      <button onClick={() => setMobileOpen(false)}>✕</button>
    </div>

    {/* MENU */}
    <div className="flex flex-col px-6 py-8 space-y-6 text-lg">
      {/* 🔍 MOBILE SEARCH BAR */}
<div className="relative">
  <input
    type="text"
    placeholder="Search..."
    onFocus={() => setOpenSearch(true)}
    className="
      w-full rounded-full
      bg-zinc-900 border border-white/20
      px-5 py-3 text-sm text-white
      placeholder:text-gray-400
      focus:outline-none focus:ring-2 focus:ring-[#1AA9F2]
    "
  />
</div>


      <Link to="/" onClick={() => setMobileOpen(false)}>
        Home
      </Link>

      {/* SERVICES */}
      <div>
        <button
          className="flex justify-between w-full items-center"
          onClick={() =>
            setActiveMobileSubmenu(
              activeMobileSubmenu === "services" ? null : "services"
            )
          }
        >
          <span>Services</span>
          <span>{activeMobileSubmenu === "services" ? "−" : "+"}</span>
        </button>

        {activeMobileSubmenu === "services" && (
          <div className="ml-4 mt-4 space-y-3 text-sm text-zinc-300">
            {servicesMenu.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  navigate(item.route);
                  setMobileOpen(false);
                }}
                className="cursor-pointer hover:text-blue-400"
              >
                {item.title}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* COMPANY */}
      <div>
        <button
          className="flex justify-between w-full items-center"
          onClick={() =>
            setActiveMobileSubmenu(
              activeMobileSubmenu === "company" ? null : "company"
            )
          }
        >
          <span>Company</span>
          <span>{activeMobileSubmenu === "company" ? "−" : "+"}</span>
        </button>

        {activeMobileSubmenu === "company" && (
          <div className="ml-4 mt-4 space-y-3 text-sm text-zinc-300">
            {companyMenu.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  navigate(item.route);
                  setMobileOpen(false);
                }}
                className="cursor-pointer hover:text-blue-400"
              >
                {item.title}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ✅ PORTFOLIO (ADDED) */}
      <Link to="/portfolio" onClick={() => setMobileOpen(false)}>
        Portfolio
      </Link>

      {/* BLOG */}
      <Link to="/blogs" onClick={() => setMobileOpen(false)}>
        Blog
      </Link>

      {/* CONTACT CTA */}
      <button
        onClick={() => {
          setContactOpen(true);
          setMobileOpen(false);
        }}
        className="mt-4 w-full border border-white rounded-md py-3 text-center"
      >
        Contact
      </button>

    </div>
  </div>
)}

      </header>

      {/* ================= MODALS ================= */}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <SearchModal open={openSearch} onClose={() => setOpenSearch(false)} />
    </>
  );
}

export default Navbar;

