import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Phone, X, Cpu, Users } from "lucide-react";

/**
 * false = the modal opens on every visit to the landing page.
 * true  = it opens once per browser session, then stays dismissed.
 */
const SHOW_ONCE_PER_SESSION = false;

const SEEN_KEY = "gt-summer-coaching-seen";
/** Delay before it opens, so the page paints first. */
const OPEN_DELAY_MS = 700;

const HIGHLIGHTS = [
  { icon: Cpu, label: "IT & AI Training" },
  { icon: Users, label: "Soft Skills Development" },
  // { icon: Plane, label: "Holiday Excursion" },
  // { icon: Star, label: "Be Part of the Legacy" },
];

const PHONES = ["08080407207", "09067383924"];

const SummerCoachingModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    if (!SHOW_ONCE_PER_SESSION) return;
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* private mode: just close */
    }
  }, []);

  useEffect(() => {
    if (SHOW_ONCE_PER_SESSION) {
      let seen = false;
      try {
        seen = sessionStorage.getItem(SEEN_KEY) === "1";
      } catch {
        /* storage unavailable: still show once */
      }
      if (seen) return;
    }
    const t = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
          className="fixed inset-0 z-[300] bg-green-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="summer-coaching-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Gold accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 z-20" />

            {/* Close */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-3.5 right-3.5 z-30 w-9 h-9 rounded-full bg-white/90 backdrop-blur text-ink-60 hover:text-green-800 shadow-md flex items-center justify-center transition-colors"
            >
              <X className="w-4.5 h-4.5" />
            </button>

            <div className="grid md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] overflow-y-auto">
              {/* Flyer */}
              <div className="relative bg-green-900 flex items-center justify-center p-4 md:p-5">
                <img
                  src="/twenty-ann.jpeg"
                  alt="Godly Teens 20th Anniversary Summer Coaching flyer"
                  className="w-full h-auto max-h-[34vh] md:max-h-[80vh] object-contain rounded-lg shadow-lg"
                />
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8 pt-7 flex flex-col justify-center">
                <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-gold-dark mb-3">
                  20<sup>th</sup> Anniversary
                </span>

                <h2
                  id="summer-coaching-title"
                  className="font-montserrat font-extrabold text-[26px] sm:text-[32px] leading-[1.1] tracking-[-0.02em] text-ink mb-2"
                >
                  Summer{" "}
                  <em className="font-fraunces italic font-medium text-gold-dark">
                    Coaching
                  </em>
                </h2>

                <p className="text-[14px] font-semibold text-green-800 uppercase tracking-[0.08em] mb-5">
                  IT &amp; AI Training for Teens
                </p>

                {/* Highlights */}
                <ul className="grid grid-cols-2 gap-2.5 mb-6">
                  {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl border-2 border-green-100 bg-green-50/50"
                    >
                      <span className="shrink-0 w-7 h-7 rounded-lg bg-linear-to-br from-green-500 to-green-700 text-white flex items-center justify-center shadow-sm">
                        <Icon className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-[12px] font-semibold text-ink leading-snug pt-0.5">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Date + venue */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-green-800 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[13px] font-bold text-ink">
                        August 17 to September 18
                      </strong>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-green-800 shrink-0 mt-0.5" />
                    <span className="text-[13px] text-ink-60 leading-relaxed">
                      Godly Teens Office, Adeoyo Ring Road, Opposite Bovas
                      Petrol Station
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-green-800 shrink-0 mt-0.5" />
                    <span className="text-[13px] text-ink-60">
                      {PHONES.map((p, i) => (
                        <React.Fragment key={p}>
                          {i > 0 && ", "}
                          <a
                            href={`tel:+234${p.slice(1)}`}
                            className="font-semibold text-ink hover:text-green-800 transition-colors"
                          >
                            {p}
                          </a>
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={`tel:+234${PHONES[0].slice(1)}`}
                    className="inline-flex flex-1 items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-semibold text-white bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Register Now
                  </a>
                  <button
                    onClick={close}
                    className="px-6 py-3.5 text-[14px] font-semibold text-ink-60 border-2 border-green-100 rounded-xl hover:border-green-800 hover:text-green-800 transition-all"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SummerCoachingModal;
