import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useModalStore } from "../stores/modalStore";

const Hero: React.FC = () => {
  const openJoinModal = useModalStore((state) => state.openJoinModal);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&auto=format&fit=crop&q=80')`,
          }}
        />
        {/* Multiple overlay gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-gold/20" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-7 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-[12px] font-semibold tracking-[0.06em] uppercase mb-6"
            >
              <Globe className="w-4 h-4 inline" /> A Global Youth Movement —
              Est. Ibadan, Nigeria
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-montserrat font-extrabold text-[clamp(48px,8vw,92px)] leading-[0.95] tracking-[-0.035em] text-white mb-6"
            >
              Raising{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="font-fraunces italic font-medium text-gold"
              >
                Godly Teens
              </motion.span>{" "}
              for
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="relative inline-block"
              >
                Global Impact
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute left-0 right-0 bottom-2 h-4 bg-gold/30 -z-10 rounded-sm"
                />
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-[20px] text-white/90 max-w-[580px] mb-10 leading-[1.6]"
            >
              A worldwide ministry equipping the next generation with faith,
              purpose and community. Join thousands of teens discovering who God
              made them to be.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-[16px] font-semibold rounded-xl transition-all duration-300 border border-transparent bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-xl hover:shadow-2xl cursor-pointer"
                onClick={openJoinModal}
              >
                Join the Movement
                <motion.svg
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </motion.svg>
              </motion.button>
            </motion.div>

            {/* Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="flex flex-row items-center justify-between gap-4 pt-8 border-t border-white/20 overflow-x-auto pb-2 max-w-full"
            >
              <motion.div whileHover={{ scale: 1.05 }} className="min-w-24 text-center">
                <div className="font-fraunces text-[32px] sm:text-[36px] font-bold text-gold leading-none mb-1">
                  12K+
                </div>
                <div className="text-[12px] sm:text-[14px] text-white/80 font-medium">
                  Teens Reached
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="min-w-20 text-center">
                <div className="font-fraunces text-[32px] sm:text-[36px] font-bold text-gold leading-none mb-1">
                  28
                </div>
                <div className="text-[12px] sm:text-[14px] text-white/80 font-medium">
                  Nations
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="min-w-24 text-center">
                <div className="font-fraunces text-[32px] sm:text-[36px] font-bold text-gold leading-none mb-1">
                  400+
                </div>
                <div className="text-[12px] sm:text-[14px] text-white/80 font-medium">
                  Resources
                </div>
              </motion.div>
            </motion.div> */}
          </motion.div>

          {/* <LiveIndicator/> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
