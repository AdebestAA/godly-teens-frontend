import { motion } from "framer-motion";
import { Circle } from "lucide-react";

const LiveIndicator = () => {
  return (
    <>
      {/* Right side - Featured content card */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative"
      >
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl"
        >
          {/* Live indicator */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-3 -left-3 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
          >
            <div className="w-2 h-2 bg-white rounded-full" />
          </motion.div>

          <div className="text-center mb-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="inline-block px-3 py-1 bg-red-500/20 text-red-300 text-xs font-bold rounded-full mb-4"
            >
              <Circle className="w-3 h-3 fill-red-500 text-red-500 inline" />{" "}
              LIVE NOW
            </motion.span>
            <h3 className="font-fraunces font-bold text-2xl text-white mb-2">
              Teen Worship Night
            </h3>
            <p className="text-white/80 text-sm">
              Join us for an evening of worship, prayer, and fellowship
            </p>
          </div>

          {/* Mini player */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/30 rounded-xl p-4 flex items-center justify-center cursor-pointer group"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white"
                className="ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Event stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-6 grid grid-cols-3 gap-4 text-center"
          >
            <div>
              <div className="text-2xl font-bold text-gold">247</div>
              <div className="text-xs text-white/70">Watching</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gold">42</div>
              <div className="text-xs text-white/70">Days Left</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gold">6K+</div>
              <div className="text-xs text-white/70">Expected</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default LiveIndicator;
