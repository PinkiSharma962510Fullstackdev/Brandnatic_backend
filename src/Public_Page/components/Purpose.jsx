import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ExploreOurPurpose = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animate CONTENT, not container
  const y = useTransform(scrollYProgress, [0, 0.6], [120, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* STICKY VIDEO */}
      <div className="sticky top-0 h-screen w-full">
        <video
          src="/services_cart_videos/Purpose_bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* OVERLAY LAYER */}
      <div className="absolute inset-0 z-10 flex">
        <div className="hidden lg:block lg:w-2/3" />

        {/* SCROLL CONTAINER (STATIC) */}
        <div className="w-full lg:w-1/3 h-full bg-white/90 backdrop-blur-xl overflow-y-auto">

          {/* ANIMATED CONTENT */}
          <motion.div
            style={{ y, opacity }}
            className="p-8 space-y-8"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-gray-500">
                Our Clients
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">
                AI-Powered Growth Solutions
              </h2>
              <p className="mt-4 text-gray-600">
                We convert fragmented data into intelligent, scalable growth
                systems using AI, automation, and performance marketing.
              </p>
            </div>

            <ul className="space-y-4 text-lg font-medium text-gray-800">
              {[
                "Nestlé",
                "Danone",
                "Kellogg’s",
                "Diageo",
                "Johnson & Johnson",
                "Reckitt",
                "Coca-Cola",
              ].map((brand, i) => (
                <li key={i} className="border-b pb-3 flex justify-between">
                  {brand}
                  <span className="text-gray-400">•</span>
                </li>
              ))}
            </ul>

            <form className="space-y-4 pt-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Talk to Our AI
              </h3>

              <input
                className="w-full px-4 py-3 rounded-lg border"
                placeholder="Your Name"
              />
              <input
                className="w-full px-4 py-3 rounded-lg border"
                placeholder="Email Address"
              />
              <textarea
                rows="4"
                className="w-full px-4 py-3 rounded-lg border"
                placeholder="Tell us about your project"
              />

              <button className="w-full bg-[#1AA9F2] text-white py-3 rounded-lg font-semibold cursor-pointer">
                Talk to Our AI
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ExploreOurPurpose;
