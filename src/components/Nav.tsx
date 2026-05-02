import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useModalStore } from "../stores/modalStore";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openJoinModal = useModalStore((state) => state.openJoinModal);

  return (
    <nav className="sticky top-0 z-[100] bg-paper/92 backdrop-blur-[14px] border-b border-line">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-7 flex items-center justify-between py-[18px]">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="flex items-center gap-3 font-montserrat font-extrabold text-[17px] tracking-[-0.01em]"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 bg-green-800 rounded-[10px] grid place-items-center text-gold font-fraunces font-bold text-[20px] relative"
            >
              G
              <div className="absolute inset-1 border border-gold/35 rounded-[7px]"></div>
            </motion.div>
            <div className="leading-[1.1]">
              Godly Teens
              <small className="block font-medium text-[10px] tracking-[0.14em] uppercase text-green-800 mt-1">
                International Ministry
              </small>
            </div>
          </Link>
        </motion.div>
        <div className="hidden md:flex gap-8">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/programs", label: "Programs" },
            { to: "/events", label: "Events" },
            { to: "/media", label: "Media" },
            { to: "/membership", label: "Membership" },
            { to: "/contact", label: "Contact" },
          ].map((link, index) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={link.to}
                className="text-[14px] font-medium text-ink-60 transition-colors duration-200 hover:text-green-800 relative"
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.span>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-800 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          <div className="hidden sm:flex items-center gap-2.5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-[22px] py-3 text-[14px] font-semibold rounded-[10px] transition-all duration-220 border border-transparent bg-green-800 text-white hover:bg-green-900 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgba(11,107,58,0.5)] cursor-pointer"
              onClick={openJoinModal}
            >
              Join Now
            </motion.button>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-11 h-11 rounded-xl bg-white/95 shadow-sm border border-line flex items-center justify-center transition-all duration-200 hover:bg-white"
            aria-label="Menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-ink"
            >
              {isMenuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-line bg-paper/95 backdrop-blur-[14px] overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/programs", label: "Programs" },
                { to: "/events", label: "Events" },
                { to: "/media", label: "Media" },
                { to: "/membership", label: "Membership" },
                { to: "/contact", label: "Contact" },
              ].map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    className="block text-[14px] font-medium text-ink-60 transition-colors duration-200 hover:text-green-800 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="pt-4 border-t border-line"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-5.5 py-3 text-[14px] font-semibold rounded-[10px] transition-all duration-220 border border-transparent bg-green-800 text-white hover:bg-green-900 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgba(11,107,58,0.5)] cursor-pointer"
                  onClick={() => {
                    openJoinModal();
                    setIsMenuOpen(false);
                  }}
                >
                  Join Now
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
