import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
}

const dirMap: Record<string, { x: number; y: number }> = {
  up: { x: 0, y: 30 },
  down: { x: 0, y: -30 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
  none: { x: 0, y: 0 },
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  direction = "up",
  distance = 30,
  delay = 0,
  staggerDelay,
  duration = 0.4,
}) => {
  const { x, y } = dirMap[direction];
  const dx = x ? (x > 0 ? distance : -distance) : 0;
  const dy = y ? (y > 0 ? distance : -distance) : 0;

  const viewport = { once: true, amount: 0 };

  if (staggerDelay && staggerDelay > 0) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: staggerDelay, delayChildren: delay },
          },
        }}
      >
        {React.Children.map(children, (child, i) =>
          React.isValidElement(child) ? (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: dx, y: dy },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: { duration, ease: "easeOut" },
                },
              }}
            >
              {child}
            </motion.div>
          ) : (
            child
          ),
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: dx, y: dy }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewport}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
