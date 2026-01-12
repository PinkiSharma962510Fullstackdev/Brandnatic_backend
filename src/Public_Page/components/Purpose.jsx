// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef, useState } from "react";

// const ExploreOurPurpose = () => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 0.6], [120, 0]);
//   const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

//   // Form State & Logic (from your ContactModal)
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     website: "",
//     service: "",
//     customService: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const servicesList = [
//     "Real Estate Portal Development",
//     "Property Lead Generation",
//     "WhatsApp Booking Automation",
//     "AI Predictive Buyer Scoring",
//     "Custom CRM for Builders",
//     "SEO for Real Estate Websites",
//     "Paid Ads for Projects",
//     "Mobile App for Property Search",
//     "Other Real Estate Service",
//   ];

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const validate = () => {
//     const err = {};
//     if (!form.name || form.name.length < 2) err.name = "Enter your name";
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
//       err.email = "Enter valid email";
//     if (!/^\d{10}$/.test(form.phone))
//       err.phone = "Enter valid 10 digit number";
//     if (!form.service) err.service = "Select a service";
//     if (form.service === "Other Real Estate Service" && !form.customService.trim())
//       err.customService = "Specify service";
//     if (!form.message || form.message.length < 10)
//       err.message = "Minimum 10 characters required";

//     setErrors(err);
//     return Object.keys(err).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setLoading(true);

//     try {
//       const res = await fetch("https://brandnatic-backend-bac.vercel.app/api/enquiry", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: form.name.trim(),
//           email: form.email.trim(),
//           phone: form.phone.trim(),
//           company: form.website.trim(),
//           service:
//             form.service === "Other Real Estate Service"
//               ? form.customService
//               : form.service,
//           message: form.message.trim(),
//         }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message);

//       alert("Enquiry sent successfully! Our real estate expert will connect soon.");
//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         website: "",
//         service: "",
//         customService: "",
//         message: "",
//       });
//     } catch (err) {
//       alert(err.message || "Failed to send enquiry");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const inputClass =
//     "w-full rounded-xl bg-gradient-to-b from-[#1a2538] to-[#0f172a] \
//      border border-white/10 px-4 py-3 text-white \
//      placeholder:text-gray-400 \
//      shadow-inner shadow-black/40 \
//      focus:outline-none focus:ring-2 focus:ring-cyan-500";

//   return (
//     <section
//       ref={ref}
//       className="relative w-full h-screen overflow-hidden"
//     >
//       <section ref={ref} className="relative w-full h-screen">
//   {/* STICKY VIDEO */}
//   <div className="sticky top-0 h-screen w-full bg-gray-900">
//     <video
//       src="/services_cart_videos/Purpose_bg.mp4" // ← double-check this path!
//       autoPlay
//       muted
//       loop
//       playsInline
//       preload="auto"
//       className="absolute inset-0 w-full h-full object-cover"
//     />
//     <div className="absolute inset-0 bg-black/30" /> {/* softer overlay */}
//   </div>

//   {/* OVERLAY LAYER */}
//   <div className="absolute inset-0 z-10 flex">
//     <div className="hidden lg:block lg:w-2/3" />
//     <div className="w-full lg:w-1/3 h-full bg-white/90 backdrop-blur-xl overflow-y-auto">
//       <motion.div style={{ y, opacity }} className="p-8 space-y-8">
//         {/* your real estate content here - unchanged */}
//       </motion.div>
//     </div>
//   </div>
// </section>

//       {/* OVERLAY LAYER */}
//       <div className="absolute inset-0 z-10 flex">
//         <div className="hidden lg:block lg:w-2/3" />

//         {/* SCROLL CONTAINER (STATIC) */}
//         <div className="w-full lg:w-1/3 h-full bg-white/90 backdrop-blur-xl overflow-y-auto">

//           {/* ANIMATED CONTENT - High Real Estate Focus */}
//           <motion.div
//             style={{ y, opacity }}
//             className="p-8 space-y-8"
//           >
//             <div>
//               <span className="text-xs uppercase tracking-widest text-gray-500">
//                 Our Real Estate Partners
//               </span>
//               <h2 className="mt-4 text-3xl font-bold text-gray-900">
//                 AI-Powered Real Estate Domination
//               </h2>
//               <p className="mt-4 text-gray-600">
//                 We build intelligent real estate portals, automate lead nurturing, predict buyer intent, and drive high-conversion bookings — turning property listings into sold deals faster than ever.
//               </p>
//             </div>

//             <ul className="space-y-4 text-lg font-medium text-gray-800">
//               {[
//                 "Aarunya Estates",
//                 "Lodha Group",
//                 "Godrej Properties",
//                 "Prestige Group",
//                 "Sobha Limited",
//                 "Puravankara",
//                 "Brigade Group",
//               ].map((brand, i) => (
//                 <li key={i} className="border-b pb-3 flex justify-between">
//                   {brand}
//                   <span className="text-gray-400">•</span>
//                 </li>
//               ))}
//             </ul>

//             {/* Enquiry Form - Real Estate Focused */}
//             <form onSubmit={handleSubmit} className="space-y-4 pt-6">
//               <h3 className="text-xl font-semibold text-gray-900">
//                 Get Your Free Real Estate Growth Audit
//               </h3>

//               <input
//                 name="name"
//                 placeholder="Your Name"
//                 value={form.name}
//                 onChange={handleChange}
//                 className={inputClass}
//               />
//               {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

//               <input
//                 name="email"
//                 placeholder="Your Email"
//                 value={form.email}
//                 onChange={handleChange}
//                 className={inputClass}
//               />
//               {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

//               <div className="flex gap-3">
//                 <div className="px-4 py-3 rounded-xl bg-gradient-to-b from-[#1a2538] to-[#0f172a] border border-white/10 text-white shadow-inner shadow-black/40">
//                   🇮🇳 +91
//                 </div>
//                 <input
//                   name="phone"
//                   placeholder="Mobile Number"
//                   value={form.phone}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />
//               </div>
//               {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}

//               <input
//                 name="website"
//                 placeholder="Your Real Estate Business / Builder Name"
//                 value={form.website}
//                 onChange={handleChange}
//                 className={inputClass}
//               />

//          <label htmlFor="service" className="sr-only">
//   Select Real Estate Service
// </label>

// <select
//   id="service"
//   name="service"
//   value={form.service}
//   onChange={handleChange}
//   className={inputClass}
// >
//   <option value="">Select Real Estate Service</option>
//   {servicesList.map((s) => (
//     <option key={s} value={s} className="bg-[#020617]">
//       {s}
//     </option>
//   ))}
// </select>


//               {errors.service && <p className="text-red-500 text-xs">{errors.service}</p>}

//               {form.service === "Other Real Estate Service" && (
//                 <input
//                   name="customService"
//                   placeholder="Specify your real estate requirement"
//                   value={form.customService}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />
//               )}

//               <textarea
//                 name="message"
//                 placeholder="Tell us about your real estate challenges (leads, site visits, bookings, conversions...)"
//                 rows="4"
//                 value={form.message}
//                 onChange={handleChange}
//                 className={inputClass}
//               />
//               {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}

//               <button
//                 disabled={loading}
//                 className="w-full mt-6 rounded-xl bg-cyan-500 py-3 text-black font-semibold hover:bg-cyan-400 transition disabled:opacity-60 cursor-pointer"
//               >
//                 {loading ? "Sending..." : "Enquiry Now → Get Free Strategy"}
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExploreOurPurpose;



// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef, useState, useEffect } from "react";

// const ExploreOurPurpose = () => {
//   const ref = useRef(null);

//   /* ---------------- MOBILE DETECTION (MANDATORY) ---------------- */
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 768);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   /* ---------------- SCROLL ANIMATION ---------------- */
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 0.6], [120, 0]);
//   const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

//   /* ---------------- FORM STATE ---------------- */
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     website: "",
//     service: "",
//     customService: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const servicesList = [
//     "Real Estate Portal Development",
//     "Property Lead Generation",
//     "WhatsApp Booking Automation",
//     "AI Predictive Buyer Scoring",
//     "Custom CRM for Builders",
//     "SEO for Real Estate Websites",
//     "Paid Ads for Projects",
//     "Mobile App for Property Search",
//     "Other Real Estate Service",
//   ];

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const validate = () => {
//     const err = {};
//     if (!form.name || form.name.length < 2) err.name = "Enter your name";
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
//       err.email = "Enter valid email";
//     if (!/^\d{10}$/.test(form.phone))
//       err.phone = "Enter valid 10 digit number";
//     if (!form.service) err.service = "Select a service";
//     if (
//       form.service === "Other Real Estate Service" &&
//       !form.customService.trim()
//     )
//       err.customService = "Specify service";
//     if (!form.message || form.message.length < 10)
//       err.message = "Minimum 10 characters required";

//     setErrors(err);
//     return Object.keys(err).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setLoading(true);

//     try {
//       const res = await fetch(
//         "https://brandnatic-backend-bac.vercel.app/api/enquiry",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             name: form.name.trim(),
//             email: form.email.trim(),
//             phone: form.phone.trim(),
//             company: form.website.trim(),
//             service:
//               form.service === "Other Real Estate Service"
//                 ? form.customService
//                 : form.service,
//             message: form.message.trim(),
//           }),
//         }
//       );

//       if (!res.ok) throw new Error("Failed to send enquiry");

//       alert("Enquiry sent successfully!");
//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         website: "",
//         service: "",
//         customService: "",
//         message: "",
//       });
//     } catch (err) {
//       alert(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const inputClass =
//     "w-full rounded-xl bg-gradient-to-b from-[#1a2538] to-[#0f172a] border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 shadow-inner shadow-black/40 focus:outline-none focus:ring-2 focus:ring-cyan-500";

//   return (
//     <section ref={ref} className="relative w-full h-screen overflow-hidden">
//       {/* ================= STICKY BACKGROUND ================= */}
//       <div className="sticky top-0 h-screen w-full bg-gray-900">
//         {/* DESKTOP = VIDEO | MOBILE = IMAGE */}
//         {!isMobile ? (
//           <video
//             src="/services_cart_videos/Purpose_bg.mp4"
//             autoPlay
//             muted
//             loop
//             playsInline
//             preload="none"
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//         ) : (
//           <img
//             src="/images/purpose_mobile.webp"
//             alt="AI Powered Real Estate Marketing"
//             className="absolute inset-0 w-full h-full object-cover"
//             loading="lazy"
//             decoding="async"
//           />
//         )}

//         <div className="absolute inset-0 bg-black/30" />
//       </div>

//       {/* ================= CONTENT LAYER ================= */}
//       <div className="absolute inset-0 z-10 flex">
//         <div className="hidden lg:block lg:w-2/3" />

//         <div className="w-full lg:w-1/3 h-full bg-white/90 backdrop-blur-xl overflow-y-auto">
//           <motion.div
//             style={{ y, opacity }}
//             initial={isMobile ? false : undefined}
//             animate={isMobile ? false : undefined}
//             className="p-8 space-y-8"
//           >
//             <h2 className="text-3xl font-bold text-gray-900">
//               AI-Powered Real Estate Domination
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 name="name"
//                 placeholder="Your Name"
//                 value={form.name}
//                 onChange={handleChange}
//                 className={inputClass}
//               />

//               <input
//                 name="email"
//                 placeholder="Your Email"
//                 value={form.email}
//                 onChange={handleChange}
//                 className={inputClass}
//               />

//               <input
//                 name="phone"
//                 placeholder="Mobile Number"
//                 value={form.phone}
//                 onChange={handleChange}
//                 className={inputClass}
//               />

//               <input
//                 name="website"
//                 placeholder="Business / Builder Name"
//                 value={form.website}
//                 onChange={handleChange}
//                 className={inputClass}
//               />

//               <label htmlFor="service" className="sr-only">
//                 Select Real Estate Service
//               </label>

//               <select
//                 id="service"
//                 name="service"
//                 value={form.service}
//                 onChange={handleChange}
//                 className={inputClass}
//               >
//                 <option value="">Select Real Estate Service</option>
//                 {servicesList.map((s) => (
//                   <option key={s} value={s} className="bg-[#020617]">
//                     {s}
//                   </option>
//                 ))}
//               </select>

//               {form.service === "Other Real Estate Service" && (
//                 <input
//                   name="customService"
//                   placeholder="Specify your requirement"
//                   value={form.customService}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />
//               )}

//               <textarea
//                 name="message"
//                 rows="4"
//                 placeholder="Tell us your challenge"
//                 value={form.message}
//                 onChange={handleChange}
//                 className={inputClass}
//               />

//               <button
//                 disabled={loading}
//                 className="w-full rounded-xl bg-cyan-500 py-3 text-black font-semibold hover:bg-cyan-400 transition disabled:opacity-60"
//               >
//                 {loading ? "Sending..." : "Enquiry Now → Get Free Strategy"}
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExploreOurPurpose;


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

  /* ---------------- FORM STATE (unchanged) ---------------- */
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
      {/* ================= STICKY BACKGROUND – NOW IMAGE ONLY ================= */}
      <div className="sticky top-0 h-screen w-full bg-gray-900">
        <img
          src="/images/images_bg.webp"  // ← Change this path to your desired image
          alt="AI Powered Real Estate Marketing Background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"          // Fast loading (LCP friendly)
          fetchpriority="high"
          decoding="async"
        />

        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ================= CONTENT LAYER (unchanged) ================= */}
      <div className="absolute inset-0 z-10 flex">
        <div className="hidden lg:block lg:w-2/3" />

        <div className="w-full lg:w-1/3 h-full bg-white/90 backdrop-blur-xl overflow-y-auto">
          <motion.div
            style={{ y, opacity }}
            initial={isMobile ? false : undefined}
            animate={isMobile ? false : undefined}
            className="p-8 space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              AI-Powered Real Estate Domination
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />

              <input
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />

              <input
                name="phone"
                placeholder="Mobile Number"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />

              <input
                name="website"
                placeholder="Business / Builder Name"
                value={form.website}
                onChange={handleChange}
                className={inputClass}
              />

              <label htmlFor="service" className="sr-only">
                Select Real Estate Service
              </label>

              <select
                id="service"
                name="service"
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

              {form.service === "Other Real Estate Service" && (
                <input
                  name="customService"
                  placeholder="Specify your requirement"
                  value={form.customService}
                  onChange={handleChange}
                  className={inputClass}
                />
              )}

              <textarea
                name="message"
                rows="4"
                placeholder="Tell us your challenge"
                value={form.message}
                onChange={handleChange}
                className={inputClass}
              />

              <button
                disabled={loading}
                className="w-full rounded-xl bg-cyan-500 py-3 text-black font-semibold hover:bg-cyan-400 transition disabled:opacity-60"
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