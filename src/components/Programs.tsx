import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Programs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const controls = useScrollAnimation(sectionRef as React.RefObject<Element>);

  const programs = [
    {
      id: 1,
      title: "Teen Fire Nights",
      category: "Discipleship",
      frequency: "Weekly",
      duration: "90 mins",
      description:
        "A weekly worship and teaching gathering for teens to encounter God, study Scripture and build lasting friendships.",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=80",
      gradient: "from-green-600 to-green-800",
      icon: "🔥",
      attendees: 3,
    },
    {
      id: 2,
      title: "Emerging Leaders Academy",
      category: "Leadership",
      frequency: "Monthly",
      duration: "Half-day",
      description:
        "A six-month cohort developing young leaders in character, public speaking, business and civic engagement.",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&auto=format&fit=crop&q=80",
      gradient: "from-gold-soft to-gold-dark",
      icon: "👑",
      attendees: 3,
    },
    {
      id: 3,
      title: "Creatives & Arts Lab",
      category: "Creative",
      frequency: "Termly",
      duration: "3 weeks",
      description:
        "Music, film, writing and design workshops where young creatives develop their craft as an act of worship.",
      image:
        "https://images.unsplash.com/photo-1460661411084-0fd96b3c4bf3?w=600&auto=format&fit=crop&q=80",
      gradient: "from-purple-500 to-purple-700",
      icon: "🎨",
      attendees: 3,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-white py-[110px] overflow-hidden"
      id="programs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-7">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16"
        >
          <div className="flex-1">
            <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-gold">
              What we do
            </span>
            <h2 className="font-montserrat font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.025em] max-w-[550px]">
              Programs built for{" "}
              <em className="font-fraunces italic font-medium text-gold-dark">
                real teenage life.
              </em>
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap md:flex-nowrap">
            {["All", "Discipleship", "Leadership", "Creative"].map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 text-[13px] font-semibold rounded-full transition-all ${
                  filter === "All"
                    ? "bg-green-800 text-white"
                    : "text-ink-60 bg-transparent border border-line hover:border-green-800"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.article
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: index * 0.2 },
                },
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white/95 border-0 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm"
            >
              {/* Image with overlay */}
              <div className="relative h-[280px] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-80`}
                />

                {/* Category badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={controls}
                  variants={{
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, delay: 0.3 + index * 0.1 },
                    },
                  }}
                  className="absolute top-4 left-4"
                >
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[12px] font-bold text-white bg-black/30 backdrop-blur-sm rounded-full border border-white/20">
                    <span className="text-lg">{program.icon}</span>
                    {program.category}
                  </span>
                </motion.div>

                {/* Hover overlay with more info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    className="text-center text-white p-4"
                  >
                    <div className="text-4xl mb-2">{program.icon}</div>
                    <div className="text-sm font-semibold">
                      Click to learn more
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: 0.4 + index * 0.1 },
                    },
                  }}
                  className="flex gap-4 mb-4 pb-4 border-b border-line"
                >
                  <span className="text-[13px] font-medium text-ink-60 flex items-center gap-1">
                    📅 {program.frequency}
                  </span>
                  <span className="text-[13px] font-medium text-ink-60 flex items-center gap-1">
                    ⏱ {program.duration}
                  </span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: 0.5 + index * 0.1 },
                    },
                  }}
                  className="font-fraunces font-bold text-[22px] mb-3 text-ink group-hover:text-green-800 transition-colors"
                >
                  {program.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: 0.6 + index * 0.1 },
                    },
                  }}
                  className="text-[14px] text-ink-60 mb-6 leading-relaxed"
                >
                  {program.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: 0.7 + index * 0.1 },
                    },
                  }}
                  className="flex items-center justify-between pt-4 border-t border-line"
                >
                  <div className="flex -space-x-2">
                    {Array.from({ length: program.attendees }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={controls}
                        variants={{
                          visible: {
                            scale: 1,
                            transition: {
                              duration: 0.3,
                              delay: 0.8 + index * 0.1 + i * 0.1,
                            },
                          },
                        }}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white shadow-sm"
                      />
                    ))}
                  </div>
                  <motion.a
                    whileHover={{ x: 3 }}
                    href="#"
                    className="inline-flex items-center gap-2 text-[13px] font-semibold text-green-800 hover:text-green-900 transition-colors group"
                  >
                    Learn more
                    <motion.svg
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </motion.svg>
                  </motion.a>
                </motion.div>
              </div>

              {/* Floating elements for visual interest */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 2,
                }}
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-lg">{program.icon}</span>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
