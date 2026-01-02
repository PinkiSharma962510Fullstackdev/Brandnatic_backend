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

export default function ContactModal({ open, onClose }) {
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

  if (!open) return null;

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
    if (form.service === "Other" && !form.customService.trim())
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
      const res = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          company: form.website.trim(),
          service:
            form.service === "Other"
              ? form.customService
              : form.service,
          message: form.message.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      alert("Enquiry sent successfully");
      onClose();

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
      alert(err.message || "Failed to send enquiry");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
  "w-full rounded-xl bg-gradient-to-b from-[#1a2538] to-[#0f172a] \
   border border-white/10 px-4 py-3 text-white \
   placeholder:text-gray-400 \
   shadow-inner shadow-black/40 \
   focus:outline-none focus:ring-2 focus:ring-cyan-500";


  return (
    <div
      className="fixed inset-0 z-[99999] bg-black/60 
                 flex justify-center items-start sm:items-center
                 px-4 py-10 overflow-y-auto"
    >
      <div
        className="w-full max-w-md bg-[#0b1220] rounded-2xl 
                   p-6 relative shadow-2xl my-auto"
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-white mb-6">
          Enquiry Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* NAME */}
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.name && (
            <p className="text-red-400 text-xs">{errors.name}</p>
          )}

          {/* EMAIL */}
          <input
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.email && (
            <p className="text-red-400 text-xs">{errors.email}</p>
          )}

          {/* PHONE */}
          <div className="flex gap-3">
            <div className="px-4 py-3 rounded-xl 
                bg-gradient-to-b from-[#1a2538] to-[#0f172a]
                border border-white/10 text-white
                shadow-inner shadow-black/40">
  🇮🇳 +91
</div>

            <input
              name="phone"
              placeholder="Mobile Number"
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          {errors.phone && (
            <p className="text-red-400 text-xs">{errors.phone}</p>
          )}

          {/* WEBSITE */}
          <input
            name="website"
            placeholder="Company / Website (optional)"
            value={form.website}
            onChange={handleChange}
            className={inputClass}
          />

          {/* SERVICE */}
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select Service</option>
            {servicesList.map((s) => (
              <option key={s} value={s} className="bg-[#020617]">
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-red-400 text-xs">{errors.service}</p>
          )}

          {/* OTHER */}
          {form.service === "Other" && (
            <input
              name="customService"
              placeholder="Specify service"
              value={form.customService}
              onChange={handleChange}
              className={inputClass}
            />
          )}

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Your message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.message && (
            <p className="text-red-400 text-xs">{errors.message}</p>
          )}

          {/* SUBMIT */}
          <button
            disabled={loading}
            className="w-full mt-6 rounded-xl bg-cyan-500 py-3 
                       text-black font-semibold
                       hover:bg-cyan-400 transition
                       disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Sending..." : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}
