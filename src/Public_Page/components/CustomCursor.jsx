import { motion } from "framer-motion";
import { useEffect, useState } from "react";

 function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* DOT */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full z-[99999] pointer-events-none"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: "spring", stiffness: 1000, damping: 40 }}
      />

      {/* RING */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-cyan-400/60 rounded-full z-[9998] pointer-events-none"
        animate={{ x: pos.x - 20, y: pos.y - 20 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      />
    </>
  );
}

export default CustomCursor;