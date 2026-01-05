import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Lead Generation",
    category: "Performance Marketing",
    image: "/images/AI_Lead_Generation.png",
  },
  {
    title: "Luxury Brand Website",
    category: "Web Experience",
    image: "/images/Luxury_Brand_Website.png",
  },
  {
    title: "E-commerce Growth",
    category: "SEO & Paid Ads",
    image: "/images/E-commerce_Growth.png",
  },
];

 function FeaturedWork() {
  return (
    <section className="relative w-full py-40 bg-[#181818] text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="text-xs uppercase tracking-widest text-white/40 mb-6">
            Selected Work
          </p>

          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Projects that speak
            <br />
            for themselves.
          </h2>
        </motion.div>

        {/* PROJECTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.4,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -14,
              }}
              className="group cursor-pointer"
            >
              {/* IMAGE */}
            <div className="relative h-[420px] w-full rounded-xl overflow-hidden bg-black">
  <motion.img
    src={project.image}
    alt={project.title}
    className="h-full w-full object-contain"
    whileHover={{ scale: 1.05 }}
    transition={{
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    }}
  />

  {/* subtle overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
</div>


              {/* TEXT */}
              <div className="mt-6">
                <h3 className="text-xl font-light tracking-tight text-[#f3ecd9]">
                  {project.title}
                </h3>
                <p className="text-sm text-white/50 mt-1">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default  FeaturedWork;