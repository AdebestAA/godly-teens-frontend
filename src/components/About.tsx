import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import Typewriter from "./Typewriter";

const About: React.FC<{ teaser?: boolean }> = ({ teaser = false }) => {
  if (teaser) {
    return (
      <section className="bg-white border-t border-line border-b border-line py-20" id="about">
        <div className="max-w-3xl mx-auto px-7 text-center">
          <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4">
            About Us
          </span>
          <h1 className="font-montserrat font-extrabold text-[clamp(32px,3.5vw,48px)] leading-[1.05] tracking-tight mb-8">
            About Godly Teens{" "}
            <em className="font-fraunces italic font-medium text-green-800">International Ministry</em>
          </h1>
          <div className="mb-8">
            <Typewriter
              text="Godly Teens International Ministry (GTIM) is a dynamic, faith-based organization dedicated to nurturing the spiritual growth and development of teenagers worldwide. Founded with a divine mandate to raise godly teenagers who will impact their generation positively, GTIM has been at the forefront of youth ministry for over a decade."
              speed={50}
              startDelay={0.5}
              className="text-ink-60 leading-relaxed text-left"
            />
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-4 text-[15px] font-semibold rounded-xl bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl transition-all"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white border-t border-line border-b border-line py-27.5" id="about">
      <div className="max-w-7xl mx-auto px-7">
        <ScrollReveal direction="up">
          <div className="mb-16">
            <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4">About Us</span>
            <h1 className="font-montserrat font-extrabold text-[clamp(32px,3.5vw,48px)] leading-[1.05] tracking-tight mb-8">
              About Godly Teens <em className="font-fraunces italic font-medium text-green-800">International Ministry</em>
            </h1>
            <div className="space-y-6 text-ink-60 mb-12">
              <Typewriter text="Godly Teens International Ministry (GTIM) is a dynamic, faith-based organization dedicated to nurturing the spiritual growth and development of teenagers worldwide. Founded with a divine mandate to raise godly teenagers who will impact their generation positively, GTIM has been at the forefront of youth ministry for over a decade." speed={50} startDelay={0.5} className="leading-relaxed" />
              <p>Established in 2013, GTIM began as a small fellowship group in Lagos, Nigeria, with a vision to address the spiritual and moral challenges facing teenagers in contemporary society. What started as a local initiative has grown into an international movement, touching lives across continents and inspiring countless young people to embrace godly living.</p>
              <p>Through the years, GTIM has evolved from organizing small prayer meetings and Bible study sessions to hosting large-scale conferences, leadership training programs, and community outreach initiatives. Our ministry has expanded its reach through strategic partnerships with churches, schools, and community organizations, creating a network of support for teenagers seeking spiritual guidance and mentorship.</p>
              <p>Today, GTIM stands as a beacon of hope and transformation, equipping teenagers with the tools they need to navigate life's challenges with faith, wisdom, and purpose. Our commitment remains unwavering: to raise a generation of godly teenagers who will be positive influencers in their communities and leaders in their respective fields.</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="group relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 border-2 border-green-200 rounded-2xl bg-white group-hover:border-gold transition-all duration-500 shadow-md group-hover:shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-emerald-400 to-green-500 text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path></svg>
                </div>
                <div><h2 className="font-fraunces text-2xl font-semibold text-green-800">Our Vision</h2></div>
              </div>
              <p className="text-ink-60 leading-relaxed font-medium">To raise a global generation of godly teenagers who will influence society positively through faith, leadership, excellence, and Christ-like character, becoming beacons of light in their communities and agents of positive change in the world.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-amber-50 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 border-2 border-amber-200 rounded-2xl bg-white group-hover:border-gold transition-all duration-500 shadow-md group-hover:shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-amber-500 to-amber-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-gold to-amber-400 text-green-900 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div><h2 className="font-fraunces text-2xl font-semibold text-green-800">Our Mission</h2></div>
              </div>
              <p className="text-ink-60 leading-relaxed font-medium">To empower teenagers spiritually, morally, intellectually, and socially through biblical teachings, mentorship, leadership development, and community engagement, equipping them with the knowledge, skills, and values needed to thrive in all areas of life.</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" staggerDelay={0.1} className="mb-16">
          <h2 className="font-fraunces text-[28px] font-semibold text-green-800 mb-12">Our Core Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Spiritual Development", desc: "To foster deep spiritual growth through Bible studies, prayer meetings, worship services, and retreats that strengthen faith and relationship with God.", color: "from-sky-400 to-cyan-500" },
              { title: "Character Formation", desc: "To build godly character and moral excellence through teachings on integrity, humility, compassion, and biblical values.", color: "from-indigo-400 to-indigo-600" },
              { title: "Leadership Training", desc: "To develop leadership skills and capabilities for personal growth, professional development, and community influence.", color: "from-orange-400 to-red-500" },
              { title: "Community Engagement", desc: "To promote active community involvement through outreach programs, volunteerism, and social impact initiatives.", color: "from-teal-400 to-teal-600" },
              { title: "Mentorship Programs", desc: "To provide guidance and support through structured mentorship connecting teenagers with experienced spiritual mentors.", color: "from-pink-400 to-rose-500" },
            ].map((obj) => (
              <div key={obj.title} className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className={`relative w-12 h-12 rounded-xl bg-linear-to-br ${obj.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}><span className="font-bold text-lg">{obj.title.charAt(0)}</span></div>
                <h3 className="font-montserrat font-bold text-green-800 text-sm mb-2">{obj.title}</h3>
                <p className="text-ink-60 text-xs leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" staggerDelay={0.1} className="mb-16">
          <h2 className="font-fraunces text-[28px] font-semibold text-green-800 mb-12">Our Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Spiritual Nourishment", desc: "To provide comprehensive spiritual nourishment and discipleship programs that deepen teenagers' relationship with God.", color: "from-gold to-amber-400" },
              { title: "Character & Excellence", desc: "To cultivate godly character, moral excellence, and integrity in all aspects of teenagers' lives.", color: "from-rose-400 to-rose-500" },
              { title: "Future Leaders", desc: "To develop future leaders and positive influencers who will shape their communities and nations.", color: "from-amber-400 to-yellow-500" },
              { title: "Community Impact", desc: "To inspire community transformation through active youth involvement and positive social change initiatives.", color: "from-blue-400 to-blue-500" },
              { title: "Mentorship & Support", desc: "To provide comprehensive mentorship, guidance, and ongoing support for teenagers throughout their spiritual journey.", color: "from-purple-400 to-purple-500" },
            ].map((goal) => (
              <div key={goal.title} className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className={`relative w-12 h-12 rounded-xl bg-linear-to-br ${goal.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}><span className="font-bold text-lg">{goal.title.charAt(0)}</span></div>
                <h3 className="font-montserrat font-bold text-green-800 text-sm mb-2">{goal.title}</h3>
                <p className="text-ink-60 text-xs leading-relaxed">{goal.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="p-8 bg-linear-to-r from-green-50 to-green-100 border border-green-200 rounded-2xl">
            <p className="text-ink-80 font-semibold">Godly Teens International Ministry continues to stand as a testimony to the power of divine calling, impacting lives and raising teenagers who are committed to godly principles, purposeful living, and transformational leadership. Through our comprehensive programs and initiatives, we remain dedicated to equipping the next generation with the spiritual foundation, moral character, and leadership skills needed to make a positive difference in the world.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
