import { useState } from "react";

export default function FAQEnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const services = [
    "SEO & Content Marketing",
    "Google Ads / PPC",
    "Meta Ads",
    "Social Media Marketing",
    "Website Design & Development",
    "AI Chatbot Development",
    "Marketing Automation",
    "Lead Generation",
    "Other",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPhone = (phone) => /^[6-9]\d{9}$/.test(phone); // Indian 10-digit

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Please enter your full name";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!isValidEmail(form.email))
      newErrors.email = "Enter a valid email address";

    if (!form.phone.trim()) newErrors.phone = "Mobile number is required";
    else if (!isValidPhone(form.phone))
      newErrors.phone = "Enter a valid 10-digit mobile number";

    if (!form.service) newErrors.service = "Please select a service";

    if (!form.message.trim()) newErrors.message = "Please write your message";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    // Your fetch / API call code here...
    // await fetch(...)
    // setLoading(false);
  };

  const inputClass =
    "w-full rounded-lg bg-[#0b1220] border border-cyan-500/20 px-4 py-3 \
    text-white placeholder:text-gray-400 \
    focus:outline-none focus:ring-2 focus:ring-cyan-400/60";

  return (
    <section className="relative w-full py-32 bg-gradient-to-r from-[#05080f] via-[#070b14] to-[#05080f] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* LEFT - INFO */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-10">
            Have any project in mind?
            <br />
            <span className="text-cyan-400">
              Feel free to contact us or say hello
            </span>
          </h2>

          <div className="space-y-8 text-white/80">
            <div className="flex gap-4">
              <span className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                📍
              </span>
              <p>
                Gaur City Center, Sector-4
                <br />
                Greater Noida, UP – 201306
              </p>
            </div>

            <div className="flex gap-4">
              <span className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                ✉️
              </span>
              <p>info@brandnatic.com</p>
            </div>

            <div className="flex gap-4">
              <span className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                📞
              </span>
              <p>+91 84334 99574</p>
            </div>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <div className="bg-[#070b14] border border-white/10 rounded-2xl shadow-2xl p-10">
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">
            Send us a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                name="name"
                placeholder="Full Name *"
                value={form.name}
                onChange={handleChange}
                className={`${inputClass} ${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                name="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={handleChange}
                className={`${inputClass} ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                name="phone"
                placeholder="Mobile Number *"
                value={form.phone}
                onChange={handleChange}
                className={`${inputClass} ${errors.phone ? "border-red-500" : ""}`}
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <input
                name="website"
                placeholder="Website (optional)"
                value={form.website}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={`${inputClass} ${errors.service ? "border-red-500" : ""}`}
              >
                <option value="">Select Service *</option>
                {services.map((service, i) => (
                  <option key={i} value={service} className="bg-[#0b1220] text-white">
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-red-400 text-sm mt-1">{errors.service}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                rows={4}
                placeholder="Write your message *"
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} ${errors.message ? "border-red-500" : ""}`}
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              disabled={loading}
              className="
                w-full mt-6 py-3 rounded-lg font-semibold text-black
                bg-gradient-to-r from-cyan-400 to-cyan-500
                hover:from-cyan-300 hover:to-cyan-400
                transition-all duration-300
                disabled:opacity-60
              "
            >
              {loading ? "Sending..." : "Enquiry Now – Get Free Strategy"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}