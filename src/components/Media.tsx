import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Curated selection of optimized event photos (public/images/optimized).
const OPTIMIZED = [
  "IMG-20260715-WA0004",
  "IMG-20260715-WA0006",
  "IMG-20260715-WA0009",
  "IMG-20260715-WA0012",
  "IMG-20260715-WA0015",
  "IMG-20260715-WA0018",
  "IMG-20260715-WA0021",
  "IMG-20260715-WA0024",
  "IMG-20260715-WA0027",
  "IMG-20260715-WA0030",
  "IMG-20260715-WA0033",
  "IMG-20260715-WA0037",
  "IMG-20260715-WA0040",
  "IMG-20260715-WA0044",
  "IMG-20260715-WA0048",
  "IMG-20260715-WA0052",
  "IMG-20260715-WA0056",
  "IMG-20260715-WA0060",
].map((name) => `/images/optimized/${name}.webp`);

// Original Cloudinary photos that used to live in this section.
const CLOUDINARY = [
  // "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155928/photo-two-2022_puhj2p.jpg",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155934/photo-three-2022_cw9jb1.jpg",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155925/photo-four-2022_do9btl.jpg",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155927/photo-one-2022_tlolou.jpg",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155910/photo-five-2022_kclhlc.jpg",
];

// Interleave the Cloudinary shots into the grid so they don't clump together.
const IMAGES = [
  CLOUDINARY[0],
  ...OPTIMIZED.slice(0, 3),
  ...OPTIMIZED.slice(3, 6),
  CLOUDINARY[1],
  ...OPTIMIZED.slice(6, 9),
  CLOUDINARY[2],
  ...OPTIMIZED.slice(9, 12),
  CLOUDINARY[3],
  ...OPTIMIZED.slice(12, 15),
  CLOUDINARY[4],
  ...OPTIMIZED.slice(15),
];

// Bento span pattern: feature / tall / wide / small tiles. grid-flow-dense
// backfills gaps so there are no holes.
const VISIBLE_COUNT = 8;
const previewImages = IMAGES.slice(0, VISIBLE_COUNT);
const SPANS = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
];

const Media: React.FC = () => {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () =>
      setIndex((i) =>
        i === null ? i : (i - 1 + IMAGES.length) % IMAGES.length,
      ),
    [],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % IMAGES.length)),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  return (
    <section className="bg-white py-[110px] overflow-hidden" id="media">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-7">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[140px] sm:auto-rows-[170px] lg:auto-rows-[200px] grid-flow-dense">
          {previewImages.map((src, i) => (
            <motion.button
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
              onClick={() => setIndex(i)}
              className={`${SPANS[i % SPANS.length]} block relative group rounded-[14px] overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-green-800 focus-visible:ring-offset-2`}
            >
              <img
                src={src}
                alt="Godly Teens gathering"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.2"
                >
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setIndex(0)}
            className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold text-green-800 border border-line rounded-[10px] hover:border-green-800 hover:bg-green-50 transition-all"
          >
            See all {IMAGES.length} photos
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/92 flex items-center justify-center p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 sm:left-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={IMAGES[index]}
                alt="Godly Teens gathering"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-white/50 text-[12px] mt-4">
                {index + 1} / {IMAGES.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Media;
