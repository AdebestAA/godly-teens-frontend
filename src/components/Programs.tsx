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
      className="bg-white py-27.5 overflow-hidden"
      id="programs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-7">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-gold">
            Our Programmes
          </span>
          <h2 className="font-montserrat font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-tight max-w-4xl mx-auto mb-8">
            Impactful and Engaging Programmes for{" "}
            <em className="font-fraunces italic font-medium text-gold-dark">
              Spiritual Growth & Development
            </em>
          </h2>
          <p className="text-xl text-ink-60 max-w-3xl mx-auto leading-relaxed">
            At Godly Teens International Ministry, we run impactful and engaging
            programmes designed to nurture teenagers and young adults
            spiritually, intellectually, and socially. Our activities are
            structured to build a strong foundation in faith while equipping
            participants with practical life and leadership skills.
          </p>
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
              <div className="relative h-70 overflow-hidden">
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
                  className={`absolute inset-0 bg-linear-to-t ${program.gradient} opacity-80`}
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
                        className="w-8 h-8 rounded-full bg-linear-to-br from-green-400 to-green-600 border-2 border-white shadow-sm"
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

        {/* Our Programmes Overview Section */}
        <div className="mt-24">
          <div className="mb-12">
            <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-gold">
              What We Offer
            </span>
            <h2 className="font-fraunces text-[32px] font-semibold text-green-800 mb-6">
              Our Programmes
            </h2>

            <p className="text-ink-60 leading-relaxed font-medium max-w-3xl">
              At Godly Teens International Ministry, we run impactful and
              engaging programmes designed to nurture teenagers and young adults
              spiritually, intellectually, and socially. Our activities are
              structured to build a strong foundation in faith while equipping
              participants with practical life and leadership skills.
            </p>
          </div>

          {/* Programme Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Programme 1 */}
            <div className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="relative w-12 h-12 rounded-xl bg-linear-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-green-800 text-base mb-2">
                Biweekly Bible Study
              </h3>
              <p className="text-ink-60 text-sm leading-relaxed">
                Held every first and third Saturday of the month, our Bible
                Study sessions provide a platform for teenagers to grow in their
                understanding of God's Word, ask questions, and build a deeper
                relationship with Christ in an interactive and supportive
                environment.
              </p>
            </div>

            {/* Programme 2 */}
            <div className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="relative w-12 h-12 rounded-xl bg-linear-to-br from-purple-400 to-purple-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                  <polyline points="17 21 17 13 7 13 7 21"></polyline>
                  <polyline points="7 5 7 13 17 13 17 5"></polyline>
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-green-800 text-base mb-2">
                Retreats
              </h3>
              <p className="text-ink-60 text-sm leading-relaxed">
                Our retreats offer opportunities for spiritual renewal through
                intensive teaching, worship, reflection, and personal encounters
                with God.
              </p>
            </div>

            {/* Programme 3 */}
            <div className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="relative w-12 h-12 rounded-xl bg-linear-to-br from-rose-400 to-rose-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <path d="M12 1v6"></path>
                  <path d="M12 17v6"></path>
                  <path d="M4.22 4.22l4.24 4.24"></path>
                  <path d="M15.54 15.54l4.24 4.24"></path>
                  <path d="M1 12h6"></path>
                  <path d="M17 12h6"></path>
                  <path d="M4.22 19.78l4.24-4.24"></path>
                  <path d="M15.54 8.46l4.24-4.24"></path>
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-green-800 text-base mb-2">
                Fasting & Prayer Programmes
              </h3>
              <p className="text-ink-60 text-sm leading-relaxed">
                These programmes help teenagers develop spiritual discipline,
                deepen their prayer life, and strengthen their dependence on
                God.
              </p>
            </div>

            {/* Programme 4 */}
            <div className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="relative w-12 h-12 rounded-xl bg-linear-to-br from-orange-400 to-orange-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-green-800 text-base mb-2">
                Special Skill Training
              </h3>
              <p className="text-ink-60 text-sm leading-relaxed">
                We equip participants with practical and relevant skills for
                life, academics, and future careers, including leadership,
                communication, and personal development.
              </p>
            </div>

            {/* Programme 5 */}
            <div className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="relative w-12 h-12 rounded-xl bg-linear-to-br from-green-400 to-green-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-green-800 text-base mb-2">
                School Outreach (Mathematics Classes)
              </h3>
              <p className="text-ink-60 text-sm leading-relaxed">
                As part of our community impact initiative, we conduct early
                morning Mathematics classes (7:00 AM) in selected secondary
                schools, promoting academic excellence and confidence in
                students.
              </p>
            </div>

            {/* Programme 6 */}
            <div className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="relative w-12 h-12 rounded-xl bg-linear-to-br from-pink-400 to-pink-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9h12M6 9c0-1 1-2 2-2h8c1 0 2 1 2 2"></path>
                  <path d="M9 9v8c0 1-1 2-2 2H7c-1 0-2-1-2-2v-8"></path>
                  <path d="M15 9v8c0 1 1 2 2 2h2c1 0 2-1 2-2v-8"></path>
                  <path d="M8 18h8v2c0 1-1 2-2 2h-4c-1 0-2-1-2-2v-2z"></path>
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-green-800 text-base mb-2">
                Special Events
              </h3>
              <p className="text-ink-60 text-sm leading-relaxed">
                We host exciting and spiritually enriching events that combine
                learning with engagement and fellowship, including:
              </p>
              <ul className="text-ink-60 text-sm leading-relaxed mt-2 space-y-1">
                <li>
                  • <strong>Palooza</strong> – a vibrant gathering featuring
                  worship, teachings, and engaging activities.
                </li>
                <li>
                  • <strong>Bible and Bagels</strong> – a relaxed and
                  interactive session combining fellowship, Bible discussions,
                  and light refreshments.
                </li>
              </ul>
            </div>
          </div>

          {/* Royal Elites Section */}
          <div className="bg-linear-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-linear-to-br from-emerald-500 to-green-600 text-white flex items-center justify-center shrink-0 shadow-lg">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9h12"></path>
                  <path d="M6 9c0-1 1-2 2-2h8c1 0 2 1 2 2"></path>
                  <path d="M9 9v10c0 1-1 2-2 2H5c-1 0-2-1-2-2V9"></path>
                  <path d="M15 9v10c0 1 1 2 2 2h4c1 0 2-1 2-2V9"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-fraunces text-2xl font-semibold text-green-800">
                  Royal Elites (Campus Arm)
                </h3>
              </div>
            </div>

            <p className="text-ink-60 mb-6 leading-relaxed">
              Royal Elites is the campus expression of Godly Teens International
              Ministry, focused on students in higher institutions. The body is
              registered as a Bible Club across higher institutions in Ibadan,
              providing a structured platform for spiritual growth and
              leadership development among undergraduates.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-gold text-green-900 flex items-center justify-center font-bold text-sm">
                  •
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-1">
                    Weekly Bible Club Meetings
                  </h4>
                  <p className="text-ink-60 text-sm">
                    Regular on-campus fellowship meetings where students gather
                    for Bible study, worship, prayer, and discussions tailored
                    to campus life and challenges.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-gold text-green-900 flex items-center justify-center font-bold text-sm">
                  •
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-1">
                    "Go, Make and Teach" Dinner
                  </h4>
                  <p className="text-ink-60 text-sm">
                    A special gathering designed to inspire and commission
                    students toward evangelism, discipleship, and purposeful
                    living. It combines fellowship, teaching, and networking in
                    a refreshing and impactful atmosphere.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-ink-80 font-semibold mt-6 pt-6 border-t border-green-300">
              Through Royal Elites, the ministry continues its mission beyond
              teenage years, raising spiritually grounded students who will
              influence their campuses and society with godly values and
              leadership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
