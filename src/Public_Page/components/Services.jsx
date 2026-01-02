// import { motion } from "framer-motion";
// // import seo_img from "..//../public/services_cart_videos/Seo_cart.mp4"

// const services = [
//   {
//     title: "AI Media Interactive Dashboard",
//      video: "/services_cart_videos/cart8.mp4",
//   },
//   {
//     title: "Lead generation",
//     video: "/services_cart_videos/cart3.mp4",
//   },
//   {
//     title: "Automation",
//     video: "/services_cart_videos/cart6.mp4",
//     coming: true,
//   },
//   {
//     title: "SEO",
//     video: "/services_cart_videos/cart5.mp4",
//   },
//   {
//     title: "E-Commerce Solutions",
//     video: "/services_cart_videos/cart2.mp4",
//   },
//   {
//     title: "Paid Ads & Growth Campaigns",
//     video: "/services_cart_videos/Seo_cart.mp4",
//   },
//   {
//     title: "Marketing Automation",
//     video: "/services_cart_videos/cart7.mp4",
//   },
//   {
//     title: "AI Chatbots & CRM",
//     video: "/services_cart_videos/cart8.mp4",
//   },
//   {
//     title: "Brand Strategy & Design",
//     video: "/services_cart_videos/cart2.mp4",
//   },
//   {
//     title: "Analytics & Conversion Optimization",
//     video: "/services_cart_videos/Seo_cart.mp4",
//   },
// ];


//  function Service_Section() {
//   return (
//     <section className="py-24 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* 🔹 SECTION HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-14"
//         >
//           <h2 className="text-4xl font-extrabold text-gray-900">
//             Our <span className="text-[#1AA9F2]">AI-Powered Services</span>
//           </h2>
//           <p className="mt-4 text-gray-600 max-w-2xl">
//            At Brandnatic, we create smart growth systems in addition to marketing brands.
// Our AI-powered services help businesses attract the right audience, convert more quickly, and scale sustainably by combining data, automation, and creativity.

// Every solution, from strategy to execution, is intended to produce quantifiable ROI rather than vanity metrics.
//           </p>
//         </motion.div>

//         {/* 🔹 HORIZONTAL SCROLL */}
//         <div className="relative">
//           <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">

//             {services.map((service, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: i * 0.05 }}
//                 whileHover={{ y: -10 }}
//                 className="
//                   relative
//                   min-w-[300px] md:min-w-[340px] lg:min-w-[380px]
//                   h-[480px]
//                   rounded-3xl
//                   overflow-hidden
//                   shadow-xl
//                   snap-start
//                   bg-gray-200
//                   cursor-pointer
//                 "
//               >
//               {service.video && (
//   <motion.video
//     src={service.video}
//     autoPlay
//     muted
//     loop
//     playsInline
//     className="absolute inset-0 w-full h-full object-cover"
//     whileHover={{ scale: 1.08 }}
//     transition={{ duration: 0.6 }}
//   />
// )}


//                 {/* DARK OVERLAY */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

//                 {/* CONTENT */}
//                 <div className="absolute bottom-0 p-6 z-10">
//                   {service.coming && (
//                     <span className="inline-block mb-2 text-sm italic text-white/80">
//                       Coming soon
//                     </span>
//                   )}

//                   <h3 className="text-2xl font-bold text-white leading-tight">
//                     {service.title}
//                   </h3>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Service_Section;

import { motion } from "framer-motion";
const services = [
  {
    title: "Social Media Optimization",
    desc:  `Our social media optimization services at Brandnatic are made to boost your brand's visibility, increase interaction, and promote steady organic growth on all social media channels. To make sure your brand reaches the right audience, we use data insights and AI-driven analysis to optimize your profiles, content strategy, hashtags, and posting schedules. Our SMO tactics foster long-term brand awareness and trust by increasing visibility, credibility, and interaction.`,
    video: "/services_cart_videos/cart8.mp4",
    poster: "/images/poster.jpg",
    
  },
  {
    title: "Lead Generation",
    desc: `At Brandnatic, we believe in qualified, high-intent prospects driven by AI 
    and data rather than haphazard leads. Our AI-powered lead generation techniques are
     made to draw in the appropriate audience, identify their intent, and turn them into
      leads that are ready for sale for your company To create dependable lead pipelines
       that grow with your business, we integrate automation, conversion optimization,
        performance marketing, and advanced AI targeting.`
        ,
    video: "/services_cart_videos/cart3.mp4",
    poster: "/images/poster.jpg",
  },
  {
    title: "Automation",
    desc: `Our AI-powered automation solutions at Brandnatic are designed to do away with manual labor, cut expenses, and spur company expansion. We create intelligent automation systems that link your operations, sales, and marketing so that your company can function smoothly, effectively, and reliably without continual human intervention.

          We develop intelligent, automated workflows that react to user behavior in real time and smoothly move prospects from interest to conversion in place of dispersed tools and manual follow-ups.`,
    video: "/services_cart_videos/cart6.mp4",
    poster: "/images/poster.jpg",
  },
  {
    title: "SEO",
    desc: `We at Brandnatic use AI-driven SEO tactics that go beyond rankings. We concentrate on search visibility, user intent, and conversions to help the right people find your brand at the right time. We transform organic traffic into reliable, high-quality leads by fusing artificial intelligence, data insights, and tried-and-true SEO techniques.
`,
    video: "/services_cart_videos/cart5.mp4",
    poster: "/images/poster.jpg",
  },
  {
    title: "E-Commerce Solutions",
    desc: `Our AI-powered e-commerce solutions at Brandnatic are made to help brands scale more quickly, sell more intelligently, and provide seamless shopping experiences. We develop conversion-focused, data-driven e-commerce ecosystems that maximize lifetime value and convert visitors into devoted customers. We do more than just build online stores.

          We manage the complete e-commerce growth journey, from strategy and development to marketing and automation.`,
    video: "/services_cart_videos/cart2.mp4",
    poster: "/images/poster.jpg",
  },
  {
    title: "Paid Ads & Growth Campaigns",
    desc: `Our growth campaigns and paid advertisements at Brandnatic are designed to produce quantifiable outcomes, not just traffic. To reach high-intent audiences on Google, Meta, LinkedIn, and other platforms, we employ AI-driven targeting, data-backed creatives, and performance-focused strategies. We maximize ROI, lower cost per acquisition, and scale campaigns that generate steady leads, sales, and long-term business growth by continuously optimizing bids, audiences, and funnels.`,
    video: "/services_cart_videos/Seo_cart.mp4",
    poster: "/images/poster.jpg",
  },
  {
    title: "Marketing Automation",
    desc: `Our marketing automation solutions at Brandnatic are made to simplify your marketing procedures, get rid of manual labor, and promote steady growth. We create clever, AI-driven workflows that nurture prospects through various channels, automatically collect leads, and customize communications. We guarantee quicker responses, increased engagement, and higher conversions by integrating automation with your CRM, ads, and analytics. This enables your company to grow effectively while providing a flawless customer experience.`,
    video: "/services_cart_videos/cart7.mp4",
    poster: "/images/poster.jpg",
  },
  {
    title: "Custom Web development",
    desc: `Our custom web development services at Brandnatic are designed to precisely match your company's objectives, target audience, and expansion strategies. We create secure, scalable, and high-performing websites that are customized to your specific needs by fusing cutting-edge technologies, a smooth user interface, and seamless user experience. Our specially designed solutions, which range from complex web platforms to conversion-focused landing pages, are optimized for speed, SEO, and integrations, guaranteeing that your website not only looks fantastic but also functions as a potent growth engine.`,
    video: "/services_cart_videos/cart8.mp4",
    poster: "/images/poster.jpg",
  },
  {
    title: "App development",
    desc: `The goal of Brandnatic's app development services is to create robust, scalable, and user-friendly mobile apps that add significant business value. We create high-performing Android, iOS, and cross-platform applications with a user-friendly interface, smooth user experience, and reliable functionality. We develop apps that engage users, promote business growth, and seamlessly integrate with your digital ecosystem by fusing cutting-edge technologies, secure architecture, and data-driven insights.`,
    video: "/services_cart_videos/cart2.mp4",
    poster: "/images/poster.jpg",
  },
  {
    title: " CRM-Integrated Web Development",
    desc: `In order to help you manage leads, customers, and data more efficiently, we at Brandnatic create intelligent websites that are powered by smooth CRM integration. Our CRM-integrated web development solutions ensure that every interaction is monitored, automated, and optimized by connecting your website with sales, marketing, and support systems. We develop data-driven web platforms that boost productivity, improve user experience, and facilitate scalable business growth. These platforms range from lead capture and automated follow-ups to real-time analytics and customer insights.`,
    video: "/services_cart_videos/Seo_cart.mp4",
    poster: "/images/poster.jpg",
  },
];




function Service_Section() {
  return (
    <section className="md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our <span className="text-[#1AA9F2]">AI-Powered Services</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl">
            At Brandnatic, we build intelligent growth systems using AI, automation,
            and performance marketing — focused on measurable ROI, not vanity metrics.
          </p>
        </motion.div>

        {/* HORIZONTAL SCROLL */}
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">

            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                whileHover={{ y: -12 }}
                className="
                  group
                  relative
                  min-w-[300px] md:min-w-[340px] lg:min-w-[380px]
                  h-[500px]
                  rounded-3xl
                  overflow-hidden
                  shadow-2xl
                  snap-start
                  bg-black
                  cursor-pointer
                "
              >
                {/* VIDEO */}
                <motion.video
                  src={service.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                {/* CONTENT */}
                <div className="absolute bottom-0 p-6 z-10 w-full">

                  {/* BADGE */}
                  {service.coming && (
                    <span className="inline-block mb-2 text-xs uppercase tracking-wider text-white/70">
                      Coming Soon
                    </span>
                  )}

                  {/* TITLE — ALWAYS VISIBLE */}
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION — ONLY ON HOVER */}
                  <p
                    className="
                      mt-3 text-sm text-white/80 leading-relaxed
                      opacity-0 translate-y-4 max-h-0
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      group-hover:max-h-[200px]
                      transition-all duration-500 ease-out
                    "
                  >
                    {service.desc}
                  </p>

                </div>

                {/* GLOW BORDER */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-[#1AA9F2]/40 transition-all duration-500" />
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Service_Section;

