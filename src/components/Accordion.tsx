import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="border border-line rounded-[12px] overflow-hidden"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-paper/50 transition-colors duration-200"
          >
            <h4 className="font-semibold text-ink pr-4">{item.question}</h4>
            <motion.div
              animate={{ rotate: openItems.has(item.id) ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-green-800"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </motion.div>
          </button>
          <AnimatePresence>
            {openItems.has(item.id) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-ink-60 text-[14px] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default Accordion;
