// src/components/Navbar/MegaMenu.jsx
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { scrollToSection } from "../../admin/utils/scrollToSection";
import MegaMenuCard from "./MegaMenuCard";

function MegaMenu({ items, page, closeMenu }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleItemClick = (item) => {
    // 👉 ROUTE BASED SERVICE
    
    if (item.route) {
      navigate(item.route);
      closeMenu();
      return;
    }

    // 👉 SCROLL BASED
    if (location.pathname === page) {
      scrollToSection(item.id);
    } else {
      navigate(page);
      setTimeout(() => scrollToSection(item.id), 120);
    }

    closeMenu();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        absolute top-full left-1/2 -translate-x-1/2
        w-full lg:w-[900px] bg-white text-black
        shadow-2xl rounded-2xl
        p-6 lg:p-8
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
        z-50
      "
    >
      {items.map((item) => (
        <MegaMenuCard
          key={item.id}
          {...item}
          onMouseDown={() => handleItemClick(item)}
        />
      ))}
    </motion.div>
  );
}

export default MegaMenu;
