


import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const ExploreOurPurpose = () => {
  const ref = useRef(null);

  /* ---------------- MOBILE DETECTION ---------------- */
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ---------------- SCROLL ANIMATION ---------------- */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.6], [120, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  /* ---------------- REAL ESTATE CLIENTS ---------------- */
  const realEstateClients = [
    { name: "Cyberthum", link: "https://www.bhutanigroup.com/cyberthum/" },
    { name: "ACE Group", link: "https://acegroupindia.com/#" },
    { name: "Mahagun Group", link: "https://www.mahagunindia.com/" },
    { name: "Gaurs Group", link: "https://www.gaursonsindia.com/" },
    { name: "Saya Group", link: "https://sayahomes.com/saya-southX" },
    { name: "Eternia Residences", link: "https://www.eterniaresidences.com/" },
    { name: "M3M", link: "https://m3mindia.com/" },
    { name: "Dholera", link: "https://dholera.gujarat.gov.in/" },
  ];

  /* ---------------- FORM STATE ---------------- */
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    service: "",
    customService: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const servicesList = [
    "Real Estate Portal Development",
    "Property Lead Generation",
    "WhatsApp Booking Automation",
    "AI Predictive Buyer Scoring",
    "Custom CRM for Builders",
    "SEO for Real Estate Websites",
    "Paid Ads for Projects",
    "Mobile App for Property Search",
    "Other Real Estate Service",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const err = {};
    if (!form.name || form.name.length < 2) err.name = "Enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Enter valid email";
    if (!/^\d{10}$/.test(form.phone))
      err.phone = "Enter valid 10 digit number";
    if (!form.service) err.service = "Select a service";
    if (
      form.service === "Other Real Estate Service" &&
      !form.customService.trim()
    )
      err.customService = "Specify service";
    if (!form.message || form.message.length < 10)
      err.message = "Minimum 10 characters required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch(
        "https://brandnatic-backend-bac.vercel.app/api/enquiry",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            company: form.website.trim(),
            service:
              form.service === "Other Real Estate Service"
                ? form.customService
                : form.service,
            message: form.message.trim(),
          }),
        }
      );

      if (!res.ok) throw new Error("Failed to send enquiry");

      alert("Enquiry sent successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        website: "",
        service: "",
        customService: "",
        message: "",
      });
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl bg-gradient-to-b from-[#1a2538] to-[#0f172a] border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 shadow-inner shadow-black/40 focus:outline-none focus:ring-2 focus:ring-cyan-500";

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden">
      {/* ================= STICKY BACKGROUND ================= */}
      <div className="sticky top-0 h-screen w-full bg-gray-900">
        <img
          src="/images/images_bg.webp"
          alt="AI Powered Real Estate Marketing Background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="absolute inset-0 z-10 flex">
        <div className="hidden lg:block lg:w-2/3" />

        <div className="w-full lg:w-1/3 h-full bg-white/90 backdrop-blur-xl overflow-y-auto">
          <motion.div
            style={{ y, opacity }}
            initial={isMobile ? false : undefined}
            animate={isMobile ? false : undefined}
            className="p-8 space-y-8"
          >
            {/* ===== REAL ESTATE CLIENTS ===== */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">
                Trusted by Leading Real Estate Brands
              </h3>

              <p className="text-sm text-gray-600">
                We are highly focused on Real Estate Digital Marketing, working
                with premium developers and property brands.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {realEstateClients.map((client, i) => (
                  <a
                    key={i}
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-center text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-cyan-500 hover:text-black"
                  >
                    {client.name}
                  </a>
                ))}
              </div>
            </div>

            {/* ===== EXISTING CONTENT ===== */}
            <h2 className="text-3xl font-bold text-gray-900">
              AI-Powered Real Estate Domination
            </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

  {/* NAME */}
  <label htmlFor="name" className="sr-only">Your Name</label>
  <input
    id="name"
    name="name"
    type="text"
    required
    placeholder="Your Name"
    value={form.name}
    onChange={handleChange}
    className={inputClass}
  />

  {/* EMAIL */}
  <label htmlFor="email" className="sr-only">Your Email</label>
  <input
    id="email"
    name="email"
    type="email"
    required
    placeholder="Your Email"
    value={form.email}
    onChange={handleChange}
    className={inputClass}
  />

  {/* PHONE */}
  <label htmlFor="phone" className="sr-only">Mobile Number</label>
  <input
    id="phone"
    name="phone"
    type="tel"
    required
    pattern="[0-9]{10}"
    placeholder="Mobile Number"
    value={form.phone}
    onChange={handleChange}
    className={inputClass}
  />

  {/* WEBSITE */}
  <label htmlFor="website" className="sr-only">Business / Builder Name</label>
  <input
    id="website"
    name="website"
    type="text"
    required
    placeholder="Business / Builder Name"
    value={form.website}
    onChange={handleChange}
    className={inputClass}
  />

  {/* SERVICE */}
  <label htmlFor="service" className="sr-only">
    Select Real Estate Service
  </label>
  <select
    id="service"
    name="service"
    required
    value={form.service}
    onChange={handleChange}
    className={inputClass}
  >
    <option value="">Select Real Estate Service</option>
    {servicesList.map((s) => (
      <option key={s} value={s} className="bg-[#020617]">
        {s}
      </option>
    ))}
  </select>

  {/* OTHER SERVICE */}
  {form.service === "Other Real Estate Service" && (
    <>
      <label htmlFor="customService" className="sr-only">
        Specify your requirement
      </label>
      <input
        id="customService"
        name="customService"
        type="text"
        required
        placeholder="Specify your requirement"
        value={form.customService}
        onChange={handleChange}
        className={inputClass}
      />
    </>
  )}

  {/* MESSAGE */}
  <label htmlFor="message" className="sr-only">
    Tell us your challenge
  </label>
  <textarea
    id="message"
    name="message"
    rows="4"
    required
    minLength={10}
    placeholder="Tell us your challenge"
    value={form.message}
    onChange={handleChange}
    className={inputClass}
  />

  {/* SUBMIT */}
  <button
    type="submit"
    disabled={loading}
    aria-busy={loading}
    className="
      w-full rounded-xl bg-cyan-500 py-3
      text-black font-semibold
      hover:bg-cyan-400 transition
      disabled:opacity-60
    "
  >
    {loading ? "Sending..." : "Enquiry Now → Get Free Strategy"}
  </button>

</form>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExploreOurPurpose;
