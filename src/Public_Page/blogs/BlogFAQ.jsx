

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function BlogFAQ({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        border border-zinc-800 rounded-xl
        transition-all duration-300
        hover:border-cyan-400/40
        hover:bg-zinc-900
      "
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full flex justify-between items-center p-4 text-left
          cursor-pointer
        "
      >
        <p className="font-medium">
          {faq.question}
        </p>

        <span
          className={`
            text-cyan-400 transition-transform duration-300
            ${open ? "rotate-180" : ""}
          `}
        >
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      {open && (
        <div className="px-4 pb-4 text-gray-400 text-sm">
          {faq.answer}
        </div>
      )}
    </div>
  );
}
