import React from "react";
import { motion } from "framer-motion";
const About: React.FC = () => {
  return (
    <section
      className="bg-white border-t border-line border-b border-line py-27.5"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-7">
        <div className="mb-16">
          <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-gold">
            About Us
          </span>
          <h1 className="font-montserrat font-extrabold text-[clamp(32px,3.5vw,48px)] leading-[1.05] tracking-tight mb-8">
            About Godly Teens{" "}
            <em className="font-fraunces italic font-medium text-green-800">
              International Ministry
            </em>
          </h1>

          <div className="space-y-6 text-ink-60 mb-12">
            <p>
              Godly Teens International Ministry (GTIM) is a dynamic,
              faith-based organization dedicated to nurturing the spiritual
              growth and development of teenagers worldwide. Founded with a
              divine mandate to raise godly teenagers who will impact their
              generation positively, GTIM has been at the forefront of youth
              ministry for over a decade.
            </p>

            <p>
              Established in 2013, GTIM began as a small fellowship group in
              Lagos, Nigeria, with a vision to address the spiritual and moral
              challenges facing teenagers in contemporary society. What started
              as a local initiative has grown into an international movement,
              touching lives across continents and inspiring countless young
              people to embrace godly living.
            </p>

            <p>
              Through the years, GTIM has evolved from organizing small prayer
              meetings and Bible study sessions to hosting large-scale
              conferences, leadership training programs, and community outreach
              initiatives. Our ministry has expanded its reach through strategic
              partnerships with churches, schools, and community organizations,
              creating a network of support for teenagers seeking spiritual
              guidance and mentorship.
            </p>

            <p>
              Today, GTIM stands as a beacon of hope and transformation,
              equipping teenagers with the tools they need to navigate life's
              challenges with faith, wisdom, and purpose. Our commitment remains
              unwavering: to raise a generation of godly teenagers who will be
              positive influencers in their communities and leaders in their
              respective fields.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Our Vision Card */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 border-2 border-green-200 rounded-2xl bg-white group-hover:border-gold transition-all duration-500 shadow-md group-hover:shadow-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-emerald-400 to-green-500 text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
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
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-fraunces text-2xl font-semibold text-green-800">
                      Our Vision
                    </h2>
                  </div>
                </div>

                <p className="text-ink-60 leading-relaxed font-medium">
                  To raise a global generation of godly teenagers who will
                  influence society positively through faith, leadership,
                  excellence, and Christ-like character, becoming beacons of
                  light in their communities and agents of positive change in
                  the world.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Our Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-amber-50 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 border-2 border-amber-200 rounded-2xl bg-white group-hover:border-gold transition-all duration-500 shadow-md group-hover:shadow-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-amber-500 to-amber-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-gold to-amber-400 text-green-900 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
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
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-fraunces text-2xl font-semibold text-green-800">
                      Our Mission
                    </h2>
                  </div>
                </div>

                <p className="text-ink-60 leading-relaxed font-medium">
                  To empower teenagers spiritually, morally, intellectually, and
                  socially through biblical teachings, mentorship, leadership
                  development, and community engagement, equipping them with the
                  knowledge, skills, and values needed to thrive in all areas of
                  life.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mb-16">
          <h2 className="font-fraunces text-[28px] font-semibold text-green-800 mb-12">
            Our Core Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Objective 1: Spiritual Development */}
            <div className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-500"></div>

              <div className="relative w-16 h-16 rounded-xl bg-linear-to-br from-sky-400 to-cyan-500 text-white flex items-center justify-center mb-4 group-hover:scale-125 transition-transform duration-500 shadow-lg">
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
                  <path d="M12 6.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z"></path>
                  <circle cx="12" cy="12" r="11.5"></circle>
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-green-800 text-sm mb-2">
                Spiritual Development
              </h3>
              <p className="text-ink-60 text-xs leading-relaxed">
                To foster deep spiritual growth through Bible studies, prayer
                meetings, worship services, and retreats that strengthen faith
                and relationship with God.
              </p>
            </div>

            {/* Objective 2: Character Formation */}
            <div className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-500"></div>

              <div className="relative w-16 h-16 rounded-xl bg-linear-to-br from-indigo-400 to-indigo-600 text-white flex items-center justify-center mb-4 group-hover:scale-125 transition-transform duration-500 shadow-lg">
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
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Z"></path>
                  <path d="M12 7v5l4 2.5"></path>
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-green-800 text-sm mb-2">
                Character Formation
              </h3>
              <p className="text-ink-60 text-xs leading-relaxed">
                To build godly character and moral excellence through teachings
                on integrity, humility, compassion, and biblical values.
              </p>
            </div>

            {/* Objective 3: Leadership Training */}
            <div className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-500"></div>

              <div className="relative w-16 h-16 rounded-xl bg-linear-to-br from-orange-400 to-red-500 text-white flex items-center justify-center mb-4 group-hover:scale-125 transition-transform duration-500 shadow-lg">
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
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="12" y1="11" x2="12" y2="17"></line>
                  <line x1="9" y1="14" x2="15" y2="14"></line>
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-green-800 text-sm mb-2">
                Leadership Training
              </h3>
              <p className="text-ink-60 text-xs leading-relaxed">
                To develop leadership skills and capabilities for personal
                growth, professional development, and community influence.
              </p>
            </div>

            {/* Objective 4: Community Engagement */}
            <div className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-500"></div>

              <div className="relative w-16 h-16 rounded-xl bg-linear-to-br from-teal-400 to-teal-600 text-white flex items-center justify-center mb-4 group-hover:scale-125 transition-transform duration-500 shadow-lg">
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-green-800 text-sm mb-2">
                Community Engagement
              </h3>
              <p className="text-ink-60 text-xs leading-relaxed">
                To promote active community involvement through outreach
                programs, volunteerism, and social impact initiatives.
              </p>
            </div>

            {/* Objective 5: Mentorship Programs */}
            <div className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-500"></div>

              <div className="relative w-16 h-16 rounded-xl bg-linear-to-br from-pink-400 to-rose-500 text-white flex items-center justify-center mb-4 group-hover:scale-125 transition-transform duration-500 shadow-lg">
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-green-800 text-sm mb-2">
                Mentorship Programs
              </h3>
              <p className="text-ink-60 text-xs leading-relaxed">
                To provide guidance and support through structured mentorship
                connecting teenagers with experienced spiritual mentors.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-fraunces text-[28px] font-semibold text-green-800 mb-12">
            Our Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Goal 1: Spiritual Nourishment */}
            <div className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-500"></div>

              <div className="relative w-16 h-16 rounded-xl bg-linear-to-br from-gold to-amber-400 text-green-900 flex items-center justify-center mb-4 group-hover:scale-125 transition-transform duration-500 shadow-lg">
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
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  <path d="M9 8h3"></path>
                  <path d="M9 14h3"></path>
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-green-800 text-sm mb-2">
                Spiritual Nourishment
              </h3>
              <p className="text-ink-60 text-xs leading-relaxed">
                To provide comprehensive spiritual nourishment and discipleship
                programs that deepen teenagers' relationship with God.
              </p>
            </div>

            {/* Goal 2: Character Building */}
            <div className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-500"></div>

              <div className="relative w-16 h-16 rounded-xl bg-linear-to-br from-rose-400 to-rose-500 text-white flex items-center justify-center mb-4 group-hover:scale-125 transition-transform duration-500 shadow-lg">
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
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-green-800 text-sm mb-2">
                Character & Excellence
              </h3>
              <p className="text-ink-60 text-xs leading-relaxed">
                To cultivate godly character, moral excellence, and integrity in
                all aspects of teenagers' lives.
              </p>
            </div>

            {/* Goal 3: Future Leaders */}
            <div className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-500"></div>

              <div className="relative w-16 h-16 rounded-xl bg-linear-to-br from-amber-400 to-yellow-500 text-green-900 flex items-center justify-center mb-4 group-hover:scale-125 transition-transform duration-500 shadow-lg">
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
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-green-800 text-sm mb-2">
                Future Leaders
              </h3>
              <p className="text-ink-60 text-xs leading-relaxed">
                To develop future leaders and positive influencers who will
                shape their communities and nations.
              </p>
            </div>

            {/* Goal 4: Community Transformation */}
            <div className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-500"></div>

              <div className="relative w-16 h-16 rounded-xl bg-linear-to-br from-blue-400 to-blue-500 text-white flex items-center justify-center mb-4 group-hover:scale-125 transition-transform duration-500 shadow-lg">
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-green-800 text-sm mb-2">
                Community Impact
              </h3>
              <p className="text-ink-60 text-xs leading-relaxed">
                To inspire community transformation through active youth
                involvement and positive social change initiatives.
              </p>
            </div>

            {/* Goal 5: Mentorship */}
            <div className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-500"></div>

              <div className="relative w-16 h-16 rounded-xl bg-linear-to-br from-purple-400 to-purple-500 text-white flex items-center justify-center mb-4 group-hover:scale-125 transition-transform duration-500 shadow-lg">
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
                  <path d="M12 14c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4z"></path>
                  <path d="M12 14c-4.418 0-8 1.79-8 4v4c0 2.21 3.582 4 8 4s8-1.79 8-4v-4c0-2.21-3.582-4-8-4z"></path>
                  <path d="M12 10V4"></path>
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-green-800 text-sm mb-2">
                Mentorship & Support
              </h3>
              <p className="text-ink-60 text-xs leading-relaxed">
                To provide comprehensive mentorship, guidance, and ongoing
                support for teenagers throughout their spiritual journey.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-linear-to-r from-green-50 to-green-100 border border-green-200 rounded-2xl">
          <p className="text-ink-80 font-semibold">
            Godly Teens International Ministry continues to stand as a testimony
            to the power of divine calling, impacting lives and raising
            teenagers who are committed to godly principles, purposeful living,
            and transformational leadership. Through our comprehensive programs
            and initiatives, we remain dedicated to equipping the next
            generation with the spiritual foundation, moral character, and
            leadership skills needed to make a positive difference in the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
