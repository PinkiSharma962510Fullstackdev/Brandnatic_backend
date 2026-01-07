// export default function IntroBrandnatic() {
//   return (
//     <section className="relative w-full py-32 overflow-hidden">

//       {/* BACKGROUND IMAGE */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/images/intro3.png')",
//         }}
//       />

//       {/* DARK OVERLAY */}
//       {/* <div className="absolute inset-0 bg-black/70" /> */}

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-start text-white">

//         {/* LEFT: Powerful Sentence */}
//         <h2 className="sr-only">About Brandnatic</h2>
//         <h2
//           className="
//             text-4xl md:text-6xl
//             font-light
//             leading-tight
//             tracking-tight
//           "
//         >
//           We design brands that grow,
//           <br />
//           scale and convert.
//         </h2>

//         {/* RIGHT: Short Lines */}
//         <p
//           className="
//             text-base md:text-lg
//             text-white/70
//             leading-relaxed
//             max-w-md
//           "
//         >
//           Brandnatic is a creative digital agency focused on strategy,
//           design and performance marketing.
//           <br /><br />
//           We blend creativity with data to build meaningful
//           digital experiences.
//         </p>

//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function IntroBrandnatic() {
  return (
    <section className="relative w-full py-32 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/intro3.jpg')" }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-start text-white">

        {/* SEO */}
        <h2 className="sr-only">About Brandnatic</h2>

        {/* LEFT TEXT */}
        <motion.h2
          initial={{ opacity: 0, x: -120, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1], // smoother than before
          }}
          viewport={{ once: true }}
          whileHover={{
            x: 12,
            textShadow: "0px 0px 24px rgba(243,236,217,0.7)",
          }}
          className="
            text-4xl md:text-6xl
            font-light
            leading-tight
            tracking-tight
            cursor-default
          "
        >
          We design brands that grow,
          <br />
          scale and convert.
        </motion.h2>

        {/* RIGHT TEXT */}
        <motion.p
  initial={{ opacity: 0, x: 120, scale: 0.96 }}
  whileInView={{ opacity: 1, x: 0, scale: 1 }}
  transition={{
    duration: 1.8,
    delay: 0.25,
    ease: [0.16, 1, 0.3, 1],
  }}
  viewport={{ once: true }}
  className="text-base md:text-lg text-white/70 leading-relaxed max-w-md"
>
  Brandnatic is a creative digital agency focused on strategy,
  design and performance marketing. We help brands scale through{" "}
  <Link to="/services/seo" className="underline hover:text-white">
    SEO services
  </Link>
  ,{" "}
  <Link
    to="/services/performance-marketing"
    className="underline hover:text-white"
  >
    performance marketing
  </Link>{" "}
  and conversion-focused digital experiences.
  <br /><br />
  Ready to grow?{" "}
  <Link to="/contact" className="underline hover:text-white">
    Contact Brandnatic
  </Link>
  to start your growth journey.
</motion.p>


      </div>
    </section>
  );
}

export default  IntroBrandnatic;
