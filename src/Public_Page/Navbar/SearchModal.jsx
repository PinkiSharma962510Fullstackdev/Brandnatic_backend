import { X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalSearch } from "../context/GlobalSearchContext";

function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState("");
  const { data = [] } = useGlobalSearch(); // ✅ safe default

  if (!open) return null;

  const keyword = query.trim().toLowerCase();

  const results = data.filter(
    (item) =>
      keyword &&
      (item?.title?.toLowerCase().includes(keyword) ||
        item?.content?.toLowerCase().includes(keyword))
  );

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-start justify-center pt-28"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="
            w-full max-w-3xl mx-6
            bg-black border border-zinc-800
            rounded-2xl shadow-2xl p-5
          "
        >
          {/* ================= SEARCH INPUT ================= */}
          <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
            <Search className="text-gray-400" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search blogs, services, pages..."
              className="
                w-full bg-transparent text-white text-lg
                placeholder:text-gray-500
                focus:outline-none
              "
            />
            <button onClick={onClose}>
              <X className="text-gray-400 hover:text-white cursor-pointer" />
            </button>
          </div>

          {/* ================= RESULTS ================= */}
          <div className="max-h-[420px] overflow-y-auto mt-6 space-y-4">
            {results.length === 0 && query && (
              <p className="text-sm text-gray-500 text-center">
                No results found
              </p>
            )}

            {results.map((item, i) => (
              <Link
                key={i}
                to={item.slug}
                onClick={onClose}
                className="
                  group block rounded-2xl p-5
                  bg-gradient-to-br from-zinc-900 to-zinc-950
                  border border-zinc-800
                  hover:border-blue-500/50
                  hover:shadow-[0_0_0_1px_rgba(59,130,246,0.4),0_10px_30px_rgba(0,0,0,0.6)]
                  transition-all duration-300
                "
              >
                {/* TITLE + TYPE */}
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-base font-semibold text-white leading-snug group-hover:text-blue-400 transition">
                    {item.title}
                  </h4>

                  <span
                    className="
                      text-[11px] px-2.5 py-1 rounded-full
                      bg-blue-500/10 text-blue-400
                      whitespace-nowrap
                    "
                  >
                    {item.type}
                  </span>
                </div>

                {/* CONTENT */}
                {item.content && (
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed line-clamp-2">
                    {item.content}
                  </p>
                )}

                {/* FOOTER */}
                <div className="mt-3 text-xs text-gray-500">
                  Click to open →
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SearchModal;
