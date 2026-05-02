import React from "react";
import { motion } from "framer-motion";
import { useModalStore } from "../stores/modalStore";
import Accordion from "./Accordion";

const Membership: React.FC = () => {
  const openJoinModal = useModalStore((state) => state.openJoinModal);

  const membershipBenefits = [
    {
      icon: "👥",
      title: "Community Access",
      description:
        "Connect with like-minded teens and young adults from around the world.",
    },
    {
      icon: "📚",
      title: "Resource Library",
      description:
        "Access exclusive sermons, study guides, and spiritual growth materials.",
    },
    {
      icon: "📅",
      title: "Event Priority",
      description:
        "Early registration and special access to all GTIM events and programs.",
    },
    {
      icon: "💬",
      title: "Mentorship Program",
      description:
        "Connect with spiritual mentors and leaders for personal guidance.",
    },
    {
      icon: "🎯",
      title: "Personal Dashboard",
      description:
        "Track your spiritual journey, event registrations, and community involvement.",
    },
    {
      icon: "🌟",
      title: "Leadership Opportunities",
      description:
        "Participate in leadership development and serve in various ministry roles.",
    },
  ];

  const membershipStats = [
    { number: "12,000+", label: "Active Members" },
    { number: "28", label: "Countries" },
    { number: "400+", label: "Resources Available" },
    { number: "50+", label: "Local Chapters" },
  ];

  const faqItems = [
    {
      id: "who-can-join",
      question: "Who can join GTIM?",
      answer:
        "Anyone aged 13-30 who is committed to growing in faith and making a positive impact in their community.",
    },
    {
      id: "is-membership-free",
      question: "Is membership really free?",
      answer:
        "Yes! Membership is completely free. Join our community and access all the benefits at no cost.",
    },
    {
      id: "international-membership",
      question: "Can I join if I'm not in Nigeria?",
      answer:
        "Absolutely! GTIM is a global ministry with chapters and members in 28 countries worldwide.",
    },
    {
      id: "no-local-chapter",
      question: "What if I don't have a local chapter?",
      answer:
        "You can still participate in online events, access resources, and connect with our global community.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white py-[110px] overflow-hidden"
      id="membership"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-7">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-gold">
            Membership
          </span>
          <h2 className="font-montserrat font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.025em] text-ink mb-6">
            Join Our Global Family
          </h2>
          <p className="text-[18px] text-ink-60 max-w-[700px] mx-auto leading-relaxed">
            Become part of a worldwide community of young believers committed to
            faith, growth, and making a difference.
          </p>
        </motion.div>

        {/* Membership Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {membershipStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="text-center p-6 bg-paper border border-line rounded-[16px] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="font-fraunces text-[32px] font-semibold text-green-800 mb-2">
                {stat.number}
              </div>
              <div className="text-[14px] text-ink-60 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Membership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="font-montserrat font-bold text-[28px] text-ink text-center mb-12">
            What You Get as a Member
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="text-center p-6 border border-line rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="text-[48px] mb-4">{benefit.icon}</div>
                <h4 className="font-fraunces font-bold text-[18px] text-ink mb-3">
                  {benefit.title}
                </h4>
                <p className="text-ink-60 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Membership Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-16"
        >
          <h3 className="font-montserrat font-bold text-[28px] text-ink text-center mb-12">
            How to Join
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-800 grid place-items-center mx-auto mb-4 text-[24px] font-bold group-hover:bg-green-200 transition-colors duration-300">
                  {step}
                </div>
                <h4 className="font-fraunces font-bold text-[18px] text-ink mb-3">
                  {step === 1
                    ? "Sign Up"
                    : step === 2
                      ? "Get Connected"
                      : "Grow & Serve"}
                </h4>
                <p className="text-ink-60 leading-relaxed">
                  {step === 1
                    ? "Create your free account with basic information about yourself and your location."
                    : step === 2
                      ? "Join a local chapter and connect with mentors and peers in your area."
                      : "Participate in programs, events, and service opportunities to grow in faith and leadership."}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Membership Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mb-16"
        >
          <h3 className="font-montserrat font-bold text-[28px] text-ink text-center mb-12">
            Membership Options
          </h3>
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="border-2 border-green-200 bg-green-50 rounded-[20px] p-8 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-green-800 text-white grid place-items-center mx-auto mb-6 text-[32px]">
                ✨
              </div>
              <h4 className="font-fraunces font-bold text-[24px] text-ink mb-4">
                Free Membership
              </h4>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center gap-2 text-ink-60">
                  <span className="text-gold">✓</span>
                  Access to basic resources
                </li>
                <li className="flex items-center gap-2 text-ink-60">
                  <span className="text-gold">✓</span>
                  Community forum access
                </li>
                <li className="flex items-center gap-2 text-ink-60">
                  <span className="text-gold">✓</span>
                  Event notifications
                </li>
                <li className="flex items-center gap-2 text-ink-60">
                  <span className="text-gold">✓</span>
                  Local chapter connection
                </li>
              </ul>
              <div className="text-[32px] font-bold text-green-800 mb-4">
                FREE
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openJoinModal}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-[15px] font-semibold rounded-[10px] transition-all duration-220 border border-transparent bg-green-800 text-white hover:bg-green-900 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgba(11,107,58,0.5)] cursor-pointer"
              >
                Join Free
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="bg-paper border border-line rounded-[20px] p-8"
        >
          <h3 className="font-montserrat font-bold text-[24px] text-ink text-center mb-8">
            Frequently Asked Questions
          </h3>
          <Accordion items={faqItems} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Membership;
