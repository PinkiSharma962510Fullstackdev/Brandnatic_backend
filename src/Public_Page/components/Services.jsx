



// import { motion } from "framer-motion";

// const services = [
//   {
//     title: "Social Media Optimization",
//     desc:  `Our team will focus on the optimization process of social media to reach advanced buyers of the property and obtain the strong brand confidence. All profiles, posts as well as messages are strategically positioned to promote visibility, interest and attract qualified inquiries. The social media will be turned into a trusted source of generating leads to real-estate developers and brokers through the development of AI-based analysis and usage of data-driven insights`,
//     video: "/services_cart_videos/cart8.mp4",
//     poster: "/images/poster.jpg",
    
//   },
//   {
//     title: "Lead Generation",
//     desc: `"Our group generates lead generating systems with a focus on quality but not quantity. It uses AI-based advertising, much more careful audience selection, and automated follow-ups to do so and reach serious buyers of the offered property and investors. This is a logical method of converting interest into webpages access, bookings, and sales- which means that real-estate developers and brokers have a steady stream of customers.`
//         ,
//     video: "/services_cart_videos/cart3.mp4",
//     poster: "/images/poster.jpg",
//   },
//   {
//     title: "Automation",
//     desc: `Our team comes up with smart automation systems which make sure that no property query is ignored or postponed. Whether it is instant lead response and follow-ups or routine reminders and CRM connection, every procedure is designed with the goal of funnelling the prospects through site visits and reservation. Automation transforms raw inquiries into sales-ready opportunities through AI-based workflows and optimal timing to offer unstructured close-ends of raw inquiries to real-estate developers and brokers.`,
//     video: "/services_cart_videos/cart6.mp4",
//     poster: "/images/poster.jpg",
//   },
//   {
//     title: "SEO",
//     desc: `Our company offers real estate developer and broker SEO tactics to guarantee organic sustainable visibility and well-motivated realies exploration. Based on the keyword research, on-page optimization and technical and local search can be listed among other factors, all of them are dedicated to bringing out the buyers who actively search the properties. Having a long time, data forward method, SEO is a dependable source of qualified leads, not only rankings.
// `,
//     video: "/services_cart_videos/cart5.mp4",
//     poster: "/images/poster.jpg",
//   },
//   {
//     title: "E-Commerce Solutions",
//     desc: `Our team offers AI-based solutions in the field of e-commerce which are meant to raise the rate of conversions, enhance customer experiences as well as boost online purchases. Optimized product pages, performance based advertisements, automated follow-ups and smart remarketing are just but a few ways of each system being designed to turn visitors into paid customers. Through machine learning and knowledgeable automation, e-commerce brands can grow predictably instead of sales that are hard to forecast.`,
//     video: "/services_cart_videos/cart2.mp4",
//     poster: "/images/poster.jpg",
//   },
//   {
//     title: "Paid Ads & Growth Campaigns",
//     desc: ` Our team carefully schedules and administers high-performance advertisement programs to directly target real-estate developers and brokers. All campaigns incorporate the use of AI-driven targeting, intent analysis of the audience, and constant optimization to reach out to those with serious consideration of owning a property instead of casual shoppers.
// Paying an extreme attention to the quality of leads, visits to the site and booking, paid advertising becomes a scalable promotion system that brings the same quality results all the time.`,
//     video: "/services_cart_videos/Seo_cart.mp4",
//     poster: "/images/poster.jpg",
//   },
//   {
//     title: "Marketing Automation",
//     desc: `We are commissioned to create marketing automation systems through which real-estate developers and brokers will be able to act more rapidly, make a follow-up in a more intelligent way, and ensure the lead conversion rates. Starting with the immediate capture of leads, launching messenger automatic WhatsApp or email templates, and overseeing CRM data and implementing reminder processes, every action is planned to reduce the potential amount of manual labour and increase the number of conversions. Our AI experience-based marketing automation platform develops the prospects until they are ready to visit the site and make a booking.`,
//     video: "/services_cart_videos/cart7.mp4",
//     poster: "/images/poster.jpg",
//   },
//   {
//     title: "Custom Web development",
//     desc: `Our team collaborates to create custom web sites designed to convert visitors to the property into viable leads. All layouts, page flow, and call-to-actions are well thought out and created to present projects, build buyer trust, and create inquiries. These websites can be a great base of continuous lead and sales increases of real-estate developers and brokers with its fast work, mobile-first design, and the additional benefits of seamlessly working with advertising and automation systems.`,
//     video: "/services_cart_videos/cart8.mp4",
//     poster: "/images/poster.jpg",
//   },
//   {
//     title: "App development",
//     desc: `Our group creates custom mobile applications that are supposed to assist in the sale of real-estate, lead management, and customer relationship.
// In every application it is designed in such a way that it eases search of property, piquing of interest among buyers and making worry free communication between the brokers and potential buyers.
// These applications are supporting the entire lead and sales system by providing a user friendly experience though smart integrations and performance focused design.`,
//     video: "/services_cart_videos/cart2.mp4",
//     poster: "/images/poster.jpg",
//   },
//   {
//     title: " CRM-Integrated Web Development",
//     desc: `We are also the team of developing high-performing real-estate websites which are installed and consistently linked with CRM systems to enable the management of leads efficiently. All of the enquiry, forms and calls activities are captured, trailed and automatically assigned so that the response is prompt and no leads are lost. These websites act as proactive sales tools, powered by AI, based on conversion-oriented design and architecture, which facilitates site visits, follow-ups and booking process by the developers and brokers.`,
//     video: "/services_cart_videos/Seo_cart.mp4",
//     poster: "/images/poster.jpg",
//   },
// ];

// function Service_Section() {
//   return (
//     <section className="md:py-24 bg-gradient-to-b from-[#0a0e17] via-[#05080f] to-[#0a0e17] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* SECTION HEADER - Larger heading + white text */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-14 text-center"
//         >
//           <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
//             Our <span className="text-[#1AA9F2]">AI-Powered Services</span>
//           </h2>
//           <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
//             Brandnatic's AI-powered services are created just for real estate developers and brokers who want a consistent supply of high-quality property leads. We use AI-driven ads, smart targeting, and automated follow-ups to get serious buyers, not people who just want to waste our time. Our systems are made to turn interest into visits to your site, bookings, and sales. In this manner, your marketing works like a reliable lead and sales engine instead of an experiment.
//           </p>
//         </motion.div>

//         {/* HORIZONTAL SCROLL */}
//         <div className="relative">
//           <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">

//             {services.map((service, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: i * 0.05 }}
//                 whileHover={{ y: -12 }}
//                 className="
//                   group
//                   relative
//                   min-w-[300px] md:min-w-[340px] lg:min-w-[380px]
//                   h-[500px]
//                   rounded-3xl
//                   overflow-hidden
//                   shadow-2xl
//                   snap-start
//                   bg-black
//                   cursor-pointer
//                 "
//               >
//                 {/* VIDEO */}
//                 <motion.video
//                   src={service.video}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   className="absolute inset-0 w-full h-full object-cover"
//                   whileHover={{ scale: 1.12 }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                 />

//                 {/* OVERLAY */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

//                 {/* CONTENT - All text white */}
//                 <div className="absolute bottom-0 p-6 z-10 w-full">
//                   {/* BADGE */}
//                   {service.coming && (
//                     <span className="inline-block mb-2 text-xs uppercase tracking-wider text-white/80">
//                       Coming Soon
//                     </span>
//                   )}

//                   {/* TITLE — White & larger */}
//                   <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
//                     {service.title}
//                   </h3>

//                   {/* DESCRIPTION — White */}
//                   <p
//                     className="
//                       mt-3 text-base md:text-lg text-white/90 leading-relaxed
//                       opacity-0 translate-y-4 max-h-0
//                       group-hover:opacity-100
//                       group-hover:translate-y-0
//                       group-hover:max-h-[220px]
//                       transition-all duration-500 ease-out
//                     "
//                   >
//                     {service.desc}
//                   </p>
//                 </div>

//                 {/* GLOW BORDER */}
//                 <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-[#1AA9F2]/40 transition-all duration-500" />
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
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // You'll need lucide-react installed

const services = [
  {
    title: "Social Media Optimization",
    desc: `Our team will focus on the optimization process of social media to reach advanced buyers of the property and obtain the strong brand confidence. All profiles, posts as well as messages are strategically positioned to promote visibility, interest and attract qualified inquiries. The social media will be turned into a trusted source of generating leads to real-estate developers and brokers through the development of AI-based analysis and usage of data-driven insights`,
    video: "/services_cart_videos/cart8.mp4",
    poster: "/images/poster.jpg",
  },
  {
    title: "Lead Generation",
    desc: `Our group generates lead generating systems with a focus on quality but not quantity. It uses AI-based advertising, much more careful audience selection, and automated follow-ups to do so and reach serious buyers of the offered property and investors. This is a logical method of converting interest into webpages access, bookings, and sales- which means that real-estate developers and brokers have a steady stream of customers.`,
    video: "/services_cart_videos/cart3.mp4",
    poster: "/images/poster.jpg",
  },
  {
    title: "Automation",
    desc: `Our team comes up with smart automation systems which make sure that no property query is ignored or postponed. Whether it is instant lead response and follow-ups or routine reminders and CRM connection, every procedure is designed with the goal of funnelling the prospects through site visits and reservation. Automation transforms raw inquiries into sales-ready opportunities through AI-based workflows and optimal timing to offer unstructured close-ends of raw inquiries to real-estate developers and brokers.`,
    video: "/services_cart_videos/cart6.mp4",
    poster: "/images/poster.jpg",
  },
  {
    title: "SEO",
    desc: `Our company offers real estate developer and broker SEO tactics to guarantee organic sustainable visibility and well-motivated realies exploration. Based on the keyword research, on-page optimization and technical and local search can be listed among other factors, all of them are dedicated to bringing out the buyers who actively search the properties. Having a long time, data forward method, SEO is a dependable source of qualified leads, not only rankings.`,
    video: "/services_cart_videos/cart5.mp4",
    poster: "/images/poster.jpg",
  },
  {
    title: "E-Commerce Solutions",
    desc: `Our team offers AI-based solutions in the field of e-commerce which are meant to raise the rate of conversions, enhance customer experiences as well as boost online purchases. Optimized product pages, performance based advertisements, automated follow-ups and smart remarketing are just but a few ways of each system being designed to turn visitors into paid customers. Through machine learning and knowledgeable automation, e-commerce brands can grow predictably instead of sales that are hard to forecast.`,
    video: "/services_cart_videos/cart2.mp4",
    poster: "/images/poster.jpg",
  },
  {
    title: "Paid Ads & Growth Campaigns",
    desc: `Our team carefully schedules and administers high-performance advertisement programs to directly target real-estate developers and brokers. All campaigns incorporate the use of AI-driven targeting, intent analysis of the audience, and constant optimization to reach out to those with serious consideration of owning a property instead of casual shoppers. Paying an extreme attention to the quality of leads, visits to the site and booking, paid advertising becomes a scalable promotion system that brings the same quality results all the time.`,
    video: "/services_cart_videos/Seo_cart.mp4",
    poster: "/images/poster.jpg",
  },
  {
    title: "Marketing Automation",
    desc: `We are commissioned to create marketing automation systems through which real-estate developers and brokers will be able to act more rapidly, make a follow-up in a more intelligent way, and ensure the lead conversion rates. Starting with the immediate capture of leads, launching messenger automatic WhatsApp or email templates, and overseeing CRM data and implementing reminder processes, every action is planned to reduce the potential amount of manual labour and increase the number of conversions. Our AI experience-based marketing automation platform develops the prospects until they are ready to visit the site and make a booking.`,
    video: "/services_cart_videos/cart7.mp4",
    poster: "/images/poster.jpg",
  },
  {
    title: "Custom Web development",
    desc: `Our team collaborates to create custom web sites designed to convert visitors to the property into viable leads. All layouts, page flow, and call-to-actions are well thought out and created to present projects, build buyer trust, and create inquiries. These websites can be a great base of continuous lead and sales increases of real-estate developers and brokers with its fast work, mobile-first design, and the additional benefits of seamlessly working with advertising and automation systems.`,
    video: "/services_cart_videos/cart8.mp4",
    poster: "/images/poster.jpg",
  },
  {
    title: "App development",
    desc: `Our group creates custom mobile applications that are supposed to assist in the sale of real-estate, lead management, and customer relationship. In every application it is designed in such a way that it eases search of property, piquing of interest among buyers and making worry free communication between the brokers and potential buyers. These applications are supporting the entire lead and sales system by providing a user friendly experience though smart integrations and performance focused design.`,
    video: "/services_cart_videos/cart2.mp4",
    poster: "/images/poster.jpg",
  },
  {
    title: "CRM-Integrated Web Development",
    desc: `We are also the team of developing high-performing real-estate websites which are installed and consistently linked with CRM systems to enable the management of leads efficiently. All of the enquiry, forms and calls activities are captured, trailed and automatically assigned so that the response is prompt and no leads are lost. These websites act as proactive sales tools, powered by AI, based on conversion-oriented design and architecture, which facilitates site visits, follow-ups and booking process by the developers and brokers.`,
    video: "/services_cart_videos/Seo_cart.mp4",
    poster: "/images/poster.jpg",
  },
];

function Service_Section() {
  const scrollContainerRef = useRef(null);

  // Auto-scroll every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = container.children[0]?.offsetWidth || 400;
        const gap = 32; // gap-8 = 32px
        const scrollAmount = cardWidth + gap;

        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 50) {
          // Reached end → loop to start
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Manual scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.offsetWidth || 400;
      const gap = 32;
      container.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.offsetWidth || 400;
      const gap = 32;
      container.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
    }
  };

  return (
    <section className="md:pb-30 bg-gradient-to-b from-[#0a0e17] via-[#05080f] to-[#0a0e17] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
            Our <span className="text-[#1AA9F2]">AI-Powered Services</span>
          </h2>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Brandnatic's AI-powered services are created just for real estate developers and brokers who want a consistent supply of high-quality property leads. We use AI-driven ads, smart targeting, and automated follow-ups to get serious buyers, not people who just want to waste our time. Our systems are made to turn interest into visits to your site, bookings, and sales. In this manner, your marketing works like a reliable lead and sales engine instead of an experiment.
          </p>
        </motion.div>

      {/* CAROUSEL WITH ARROWS */}
<div className="relative">

  {/* Left Arrow - Bahar, card se overlap nahi */}
  <button
    onClick={scrollLeft}
    className="absolute left-[-30px] md:left-[-50px] top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#1AA9F2]/80 hover:border-[#1AA9F2] hover:scale-110 transition-all duration-300 shadow-2xl"
    aria-label="Previous service"
  >
    <ChevronLeft size={28} strokeWidth={2} />
  </button>

  {/* Right Arrow - Bahar, card se overlap nahi */}
  <button
    onClick={scrollRight}
    className="absolute right-[-30px] md:right-[-50px] top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#1AA9F2]/80 hover:border-[#1AA9F2] hover:scale-110 transition-all duration-300 shadow-2xl"
    aria-label="Next service"
  >
    <ChevronRight size={28} strokeWidth={2} />
  </button>

  {/* Horizontal Scroll Container */}
  <div
    ref={scrollContainerRef}
    className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
  >
   {services.map((service, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: i * 0.05 }}
    whileHover={{ y: -12 }}
    className="
      group relative min-w-[300px] md:min-w-[340px] lg:min-w-[380px]
      h-[500px] rounded-3xl overflow-hidden shadow-2xl snap-start bg-black cursor-pointer
      flex flex-col justify-end
    "
  >
    {/* Video Background */}
    <motion.video
      src={service.video}
      poster={service.poster}
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      whileHover={{ scale: 1.12 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

    {/* Content Area */}
    <div className="relative z-10 p-6 pt-20 pb-8">
      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
        {service.title}
      </h3>

      {/* Expandable Description */}
      <div className="
        text-base md:text-lg text-white/90 leading-relaxed
        max-h-0 opacity-0 overflow-hidden
        group-hover:max-h-64 group-hover:opacity-100
        group-hover:pb-4
        transition-all duration-500 ease-out
        overflow-y-auto scrollbar-hide
      ">
        <p>{service.desc}</p>
      </div>
    </div>

    {/* Glow Border */}
    <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-[#1AA9F2]/40 transition-all duration-500 pointer-events-none" />
  </motion.div>
))}
  </div>
</div>
      </div>
    </section>
  );
}

export default Service_Section;