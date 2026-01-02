// src/components/Navbar/MegaMenuCard.jsx
import { motion } from "framer-motion";

function MegaMenuCard({ title, desc, image, onMouseDown }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="cursor-pointer group"
      onMouseDown={onMouseDown}
    >
      <div className="h-32 rounded-xl overflow-hidden mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
        {title}
      </h4>
      <p className="text-sm text-gray-500 mt-1">{desc}</p>
    </motion.div>
  );
}

export default MegaMenuCard;
