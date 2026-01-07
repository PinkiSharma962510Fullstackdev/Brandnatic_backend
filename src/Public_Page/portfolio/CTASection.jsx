import { motion } from "framer-motion";
import { useState } from "react";

import ContactModal from "../Navbar/ContactModal";
import { Link } from "react-router-dom";


const CTASection = () => {

  const [OpenEnquiry, setOpenEnquiry] = useState(false);
  return (
    <section className="relative  py-28 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/images/ctaSection.svg')", // 👈 
        }}
      />

      {/* Dark overlay */}
   + <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      {/* Glow background */}
      {/* <div className="absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[120px]" />
      </div> */}

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Let’s Build Your{" "}
          <span className="text-white">Growth Engine</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-gray-300 mt-6 max-w-2xl mx-auto"
        >
          AI-powered marketing, designed to scale brands that are ready to grow.
        </motion.p>

        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <a
            href="/contact"
            className="inline-block px-10 py-4 rounded-full border border-white/20 
                       text-white font-semibold 
                       bg-white/10 backdrop-blur 
                       hover:bg-gray-800 transition 
                       "
          >
           <button 
           onClick={()=>setopen(true)}
           >
             Book a Free Strategy Call
           </button>
          </a>
        </motion.div> */}

 {/*  CTA BUTTON */}
         <Link to="/contact">
  <motion.button
    whileHover={{ scale: 1.06 }}
    className="mt-12 px-10 py-4 rounded-full border-2 border-[#737272] text-white font-semibold"
  >
    Contact Brandnatic
  </motion.button>
</Link>


      </div>
     <ContactModal

 open={OpenEnquiry}
  onClose={() => setOpenEnquiry(false)}
/>
    </section>
  );
};  

export default CTASection;
