import { useState } from "react";

const servicesList = [
  "AI Chatbot Development",
  "Software Development",
  "Automation",
  "E-Commerce Solution",
  "SEO & SMO",
  "Paid Ads",
  "Social Media Marketing",
  "Lead Generation",
  "Website Design & Development",
  "Mobile App Development",
  "Other",
];

export default function PopupModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const err = {};
    if (!form.name) err.name = "Name required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Valid email required";
    if (!/^\d{10}$/.test(form.phone))
      err.phone = "10 digit mobile required";
    if (!form.service) err.service = "Select service";
    if (!form.message || form.message.length < 10)
      err.message = "Minimum 10 characters";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await fetch("https://brandnatic-backend-bac.vercel.app/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      });

      alert("Enquiry submitted");
      onClose();
    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-sm">
      {/* CLOSE */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl z-50"
      >
        ✕
      </button>

      {/* HERO PANEL */}
      <div className="h-full w-full flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Grow Faster With  
              <span className="text-cyan-400"> AI-Powered Marketing</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl">
              Get high-quality leads, automation, and performance marketing
              tailored for your business. Talk to our experts today.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>✔ AI-Driven Lead Generation</li>
              <li>✔ Automation & CRM Integration</li>
              <li>✔ High-Conversion Funnels</li>
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-[#0b1220] rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Book Free Strategy Call
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#020617] text-white border border-white/10"
              />
              {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}

              <input
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#020617] text-white border border-white/10"
              />
              {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}

              <input
                name="phone"
                placeholder="Mobile Number"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#020617] text-white border border-white/10"
              />
              {errors.phone && <p className="text-red-400 text-xs">{errors.phone}</p>}

             <label htmlFor="service" className="sr-only">
  Select Service
</label>

<select
  id="service"
  name="service"
  onChange={handleChange}
  className="w-full px-4 py-3 rounded-xl bg-[#020617] text-white border border-white/10"
>

                <option value="">Select Service</option>
                {servicesList.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.service && <p className="text-red-400 text-xs">{errors.service}</p>}

              <textarea
                name="message"
                rows="3"
                placeholder="Tell us about your requirement"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#020617] text-white border border-white/10"
              />

              <button
                disabled={loading}
                className="w-full mt-4 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
              >
                {loading ? "Submitting..." : "Get Free Consultation"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
