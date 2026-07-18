import React from "react";
import { motion } from "framer-motion";

/**
 * The verse, split into segments so the accented phrase keeps its own styling
 * while every word still animates in individually.
 */
const SEGMENTS: { text: string; accent?: boolean }[] = [
  { text: "Don't let anyone look down on you because you are young, but" },
  { text: "set an example", accent: true },
  {
    text: "for the believers in speech, in conduct, in love, in faith and in purity.",
  },
];

const WORDS = SEGMENTS.flatMap((segment) =>
  segment.text.split(" ").map((word) => ({ word, accent: segment.accent })),
);

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.15 } },
};

const wordVariant = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Scripture: React.FC = () => {
  return (
    <section className="relative bg-linear-to-br from-green-700 via-green-600 to-green-800 py-[90px] sm:py-[110px] overflow-hidden">
      {/* Soft radial glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-green-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 w-[460px] h-[460px] rounded-full bg-gold/10 blur-3xl" />

      {/* Watermark quote glyph */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 font-fraunces text-[220px] sm:text-[300px] leading-none text-white/[0.06] select-none"
      >
        &ldquo;
      </span>

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-7 text-center">
        <motion.blockquote
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="font-montserrat font-bold text-[clamp(22px,3vw,46px)] text-white leading-[1.25] tracking-[-0.01em] max-w-[920px] mx-auto text-balance"
        >
          {/* A real space is rendered between each word span so the verse stays
              selectable, copyable and readable by screen readers. */}
          {WORDS.map(({ word, accent }, i) => (
            <React.Fragment key={i}>
              <motion.span
                variants={wordVariant}
                className={`inline-block ${
                  accent ? "font-fraunces italic font-medium text-gold-soft" : ""
                }`}
              >
                {word}
              </motion.span>{" "}
            </React.Fragment>
          ))}
        </motion.blockquote>

        <motion.cite
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: WORDS.length * 0.045 + 0.2 }}
          className="mt-8 inline-block font-inter text-[12px] sm:text-[13px] font-semibold text-gold-soft not-italic tracking-[0.22em] uppercase"
        >
          1 Timothy 4:12
        </motion.cite>
      </div>
    </section>
  );
};

export default Scripture;