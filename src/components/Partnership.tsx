import React from "react";

const Partnership: React.FC = () => {
  const partnershipOptions = [
    {
      level: "Bronze Partner",
      amount: "₦50,000/year",
      benefits: [
        "Logo on website",
        "Social media recognition",
        "Event invitation",
        "Monthly impact report",
        "Partner certificate",
      ],
      color: "bronze",
    },
    {
      level: "Silver Partner",
      amount: "₦150,000/year",
      benefits: [
        "All Bronze benefits",
        "Featured in newsletter",
        "Booth at major events",
        "Quarterly strategy calls",
        "Partnership plaque",
      ],
      color: "silver",
    },
    {
      level: "Gold Partner",
      amount: "₦500,000/year",
      benefits: [
        "All Silver benefits",
        "Named program sponsorship",
        "VIP event access",
        "Annual impact presentation",
        "Executive partnership meetings",
      ],
      color: "gold",
    },
    {
      level: "Platinum Partner",
      amount: "₦1,000,000+/year",
      benefits: [
        "All Gold benefits",
        "Strategic advisory role",
        "Custom partnership programs",
        "Global recognition",
        "Legacy partnership status",
      ],
      color: "platinum",
    },
  ];

  const currentPartners = [
    { name: "Nigerian Youth Foundation", logo: "🏛️", type: "Government" },
    { name: "Kingdom Bank", logo: "🏦", type: "Financial" },
    { name: "Tech4Good Nigeria", logo: "💻", type: "Technology" },
    { name: "Hope Medical Center", logo: "🏥", type: "Healthcare" },
    { name: "EduCare International", logo: "📚", type: "Education" },
    { name: "Green Future Initiative", logo: "🌱", type: "Environment" },
  ];

  return (
    <section className="bg-white py-[110px] overflow-hidden" id="partnership">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-7">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-gold">
            Partnership Program
          </span>
          <h2 className="font-montserrat font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.025em] text-ink mb-6">
            Partner with Purpose
          </h2>
          <p className="text-[18px] text-ink-60 max-w-[700px] mx-auto leading-relaxed">
            Join hands with us to expand God's kingdom and transform lives. Your
            partnership makes eternal impact possible.
          </p>
        </div>

        {/* Why Partner */}
        <div className="mb-16">
          <h3 className="font-montserrat font-bold text-[28px] text-ink text-center mb-12">
            Why Partner with GTIM?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-800 grid place-items-center mx-auto mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
                </svg>
              </div>
              <h4 className="font-fraunces font-bold text-[18px] text-ink mb-3">
                Kingdom Impact
              </h4>
              <p className="text-ink-60 leading-relaxed">
                Directly contribute to raising godly teens who will lead the
                next generation in faith and character.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-800 grid place-items-center mx-auto mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h4 className="font-fraunces font-bold text-[18px] text-ink mb-3">
                Community Reach
              </h4>
              <p className="text-ink-60 leading-relaxed">
                Connect with a vibrant community of young believers across 28
                nations and growing.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-800 grid place-items-center mx-auto mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <h4 className="font-fraunces font-bold text-[18px] text-ink mb-3">
                Tax Benefits
              </h4>
              <p className="text-ink-60 leading-relaxed">
                Enjoy tax deductions and recognition for your generous support
                of youth ministry work.
              </p>
            </div>
          </div>
        </div>

        {/* Partnership Levels */}
        <div className="mb-16">
          <h3 className="font-montserrat font-bold text-[28px] text-ink text-center mb-12">
            Partnership Levels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipOptions.map((option, index) => (
              <div
                key={index}
                className="border border-line rounded-[16px] p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center mb-6">
                  <h4 className="font-fraunces font-bold text-[20px] text-ink mb-2">
                    {option.level}
                  </h4>
                  <div className="font-montserrat font-bold text-[18px] text-green-800">
                    {option.amount}
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {option.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-start gap-2 text-[14px] text-ink-60"
                    >
                      <span className="text-gold mt-1.5 flex-shrink-0">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-[14px] font-semibold rounded-[10px] transition-all duration-220 border border-green-800/25 bg-transparent text-green-800 hover:bg-green-100 hover:border-green-800 cursor-pointer">
                  Become a {option.level.split(" ")[0]} Partner
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Current Partners */}
        <div className="mb-16">
          <h3 className="font-montserrat font-bold text-[28px] text-ink text-center mb-12">
            Our Valued Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {currentPartners.map((partner, index) => (
              <div
                key={index}
                className="text-center p-4 border border-line rounded-[12px] hover:border-green-200 transition-colors"
              >
                <div className="text-[32px] mb-2">{partner.logo}</div>
                <h4 className="font-semibold text-[14px] text-ink mb-1">
                  {partner.name}
                </h4>
                <span className="text-[12px] text-ink-60">{partner.type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Form */}
        <div className="bg-paper border border-line rounded-[20px] p-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-montserrat font-bold text-[24px] text-ink text-center mb-2">
              Start Your Partnership
            </h3>
            <p className="text-ink-60 text-center mb-8">
              Fill out the form below and our partnership team will contact you
              within 48 hours.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-2">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-line rounded-[10px] bg-white text-ink placeholder-ink-40 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                    placeholder="Your organization"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-2">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-line rounded-[10px] bg-white text-ink placeholder-ink-40 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                    placeholder="Full name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-line rounded-[10px] bg-white text-ink placeholder-ink-40 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                    placeholder="contact@organization.com"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-line rounded-[10px] bg-white text-ink placeholder-ink-40 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                    placeholder="+234 xxx xxx xxxx"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-2">
                  Partnership Interest
                </label>
                <select className="w-full px-4 py-3 border border-line rounded-[10px] bg-white text-ink focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent">
                  <option>Select partnership level</option>
                  <option>Bronze Partner (₦50,000/year)</option>
                  <option>Silver Partner (₦150,000/year)</option>
                  <option>Gold Partner (₦500,000/year)</option>
                  <option>Platinum Partner (₦1,000,000+/year)</option>
                  <option>Other - Let's discuss</option>
                </select>
              </div>

              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-2">
                  Tell us about your organization
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-line rounded-[10px] bg-white text-ink placeholder-ink-40 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent resize-none"
                  placeholder="Brief description of your organization and partnership goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-[15px] font-semibold rounded-[10px] transition-all duration-220 border border-transparent bg-green-800 text-white hover:bg-green-900 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgba(11,107,58,0.5)] cursor-pointer"
              >
                Submit Partnership Inquiry
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
