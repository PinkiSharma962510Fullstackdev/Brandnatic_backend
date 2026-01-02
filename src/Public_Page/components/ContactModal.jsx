// import { useState } from "react";

// const servicesList = [
//   "AI Chatbot Development",
//   "Software Development",
//   "Automation",
//   "E-Commerce Solution",
//   "SEO & SMO",
//   "Paid Ads",
//   "Social Media Marketing",
//   "Lead Generation",
//   "Website Design & Development",
//   "Mobile App Development",
//   "Other",
// ];

// export default function ContactModal({ open, onClose }) {
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

//   if (!open) return null;

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   /* =======================
//      VALIDATION
//   ======================= */
//   const validate = () => {
//     const err = {};

//     if (!form.name || form.name.length < 2)
//       err.name = "Enter your full name";

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
//       err.email = "Enter valid email";

//     if (!/^\d{10}$/.test(form.phone))
//       err.phone = "Enter valid 10-digit number";

//     if (!form.service)
//       err.service = "Please select a service";

//     if (form.service === "Other" && !form.customService.trim())
//       err.customService = "Please specify the service";

//     if (!form.message || form.message.length < 10)
//       err.message = "Message must be at least 10 characters";

//     setErrors(err);
//     return Object.keys(err).length === 0;
//   };

//   /* =======================
//      SUBMIT (BACKEND API)
//   ======================= */
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setLoading(true);

//     const payload = {
//       name: form.name.trim(),
//       email: form.email.trim(),
//       phone: `+91${form.phone}`,
//       website: form.website.trim(),
//       service: form.service,
//       customService:
//         form.service === "Other" ? form.customService.trim() : "",
//       message: form.message.trim(),
//     };

//     try {
//       const res = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message);

//       alert("Enquiry sent successfully ");

//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         website: "",
//         service: "",
//         customService: "",
//         message: "",
//       });

//       onClose();
//     } catch (err) {
//       alert(err.message || "Failed to send enquiry");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[99999]">
//       <div className="bg-white w-full max-w-lg rounded-xl p-8 relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer"
//         >
//           ✕
//         </button>

//         <h2 className="text-2xl font-bold mb-4">Enquiry Form</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* NAME */}
//           <input
//             name="name"
//             placeholder="Your Name"
//             value={form.name}
//             onChange={handleChange}
//             className="w-full border px-4 py-3 rounded-md"
//           />
//           {errors.name && (
//             <p className="text-red-500 text-xs">{errors.name}</p>
//           )}

//           {/* EMAIL */}
//           <input
//             name="email"
//             placeholder="Your Email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full border px-4 py-3 rounded-md"
//           />
//           {errors.email && (
//             <p className="text-red-500 text-xs">{errors.email}</p>
//           )}

//           {/* PHONE */}
//           <div className="flex gap-2">
//             <span className="border px-3 py-3 rounded-md bg-gray-100">
//               🇮🇳 +91
//             </span>
//             <input
//               name="phone"
//               placeholder="Mobile Number"
//               value={form.phone}
//               onChange={handleChange}
//               className="w-full border px-4 py-3 rounded-md"
//             />
//           </div>
//           {errors.phone && (
//             <p className="text-red-500 text-xs">{errors.phone}</p>
//           )}

//           {/* WEBSITE */}
//           <input
//             name="website"
//             placeholder="Website (optional)"
//             value={form.website}
//             onChange={handleChange}
//             className="w-full border px-4 py-3 rounded-md"
//           />

//           {/* SERVICE */}
//           <select
//             name="service"
//             value={form.service}x
//             onChange={handleChange}
//             className="w-full border px-4 py-3 rounded-md"
//           >
//             <option value="">Select Service</option>
//             {servicesList.map((s) => (
//               <option key={s} value={s}>
//                 {s}
//               </option>
//             ))}
//           </select>
//           {errors.service && (
//             <p className="text-red-500 text-xs">{errors.service}</p>
//           )}

//           {/* OTHER */}
//           {form.service === "Other" && (
//             <input
//               name="customService"
//               placeholder="Please specify service"
//               value={form.customService}
//               onChange={handleChange}
//               className="w-full border px-4 py-3 rounded-md"
//             />
//           )}
//           {errors.customService && (
//             <p className="text-red-500 text-xs">{errors.customService}</p>
//           )}

//           {/* MESSAGE */}
//           <textarea
//             name="message"
//             placeholder="Your Enquiry Message"
//             rows="4"
//             value={form.message}
//             onChange={handleChange}
//             className="w-full border px-4 py-3 rounded-md"
//           />
//           {errors.message && (
//             <p className="text-red-500 text-xs">{errors.message}</p>
//           )}

//           <button
//             disabled={loading}
//             className="w-full bg-[#1AA9F2] text-white py-3 rounded-md font-semibold hover:bg-[#1171a1] disabled:opacity-60 cursor-pointer"
//           >
//             {loading ? "Sending..." : "Submit Enquiry"}
//           </button>
//         </form>

        
//       </div>
//     </div>
//   );
// }


