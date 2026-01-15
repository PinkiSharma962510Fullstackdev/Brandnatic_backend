import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function BlogFAQ({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-zinc-800 rounded-xl">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 text-left"
      >
        <p className="font-medium">
          {faq.question}
        </p>

        <span className="text-cyan-400">
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
