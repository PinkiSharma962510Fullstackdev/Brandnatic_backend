import { motion } from "framer-motion";

const SectionWrapper = ({
  id,
  children,
  className = "",
  padding = "",
  bg = "bg-black",
}) => {
  return (
    <section
      id={id}
      className={`${bg} ${padding} w-full ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
