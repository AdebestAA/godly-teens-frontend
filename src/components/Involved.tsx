import React from "react";

const Involved: React.FC = () => {
  return (
    <section className="bg-green-900 py-[110px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-7">
        <div className="mb-16">
          <div>
            <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-gold mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-gold">
              Get involved
            </span>
            <h2 className="font-montserrat font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.025em] text-white max-w-[550px]">
              Four ways to{" "}
              <em className="font-fraunces italic font-medium text-gold-soft">
                step in.
              </em>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-[16px] p-8 hover:bg-white/10 transition-colors">
            <div className="text-[48px] font-fraunces font-bold text-gold mb-4">
              01 /
            </div>
            <h4 className="font-fraunces font-bold text-[20px] text-white mb-3">
              Become a Member
            </h4>
            <p className="text-[14px] text-green-100 leading-relaxed mb-6">
              Create a free account to track events, save sermons and connect to
              a local chapter.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[13px] font-semibold text-gold hover:text-gold-soft transition-colors"
            >
              Sign up →
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[16px] p-8 hover:bg-white/10 transition-colors">
            <div className="text-[48px] font-fraunces font-bold text-gold mb-4">
              02 /
            </div>
            <h4 className="font-fraunces font-bold text-[20px] text-white mb-3">
              Volunteer
            </h4>
            <p className="text-[14px] text-green-100 leading-relaxed mb-6">
              Join a serve team — media, hospitality, prayer, logistics. There's
              a seat at the table for you.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[13px] font-semibold text-gold hover:text-gold-soft transition-colors"
            >
              Apply →
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[16px] p-8 hover:bg-white/10 transition-colors">
            <div className="text-[48px] font-fraunces font-bold text-gold mb-4">
              03 /
            </div>
            <h4 className="font-fraunces font-bold text-[20px] text-white mb-3">
              Partner Financially
            </h4>
            <p className="text-[14px] text-green-100 leading-relaxed mb-6">
              Become a monthly partner and help sustain the mission year-round.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[13px] font-semibold text-gold hover:text-gold-soft transition-colors"
            >
              Give →
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[16px] p-8 hover:bg-white/10 transition-colors">
            <div className="text-[48px] font-fraunces font-bold text-gold mb-4">
              04 /
            </div>
            <h4 className="font-fraunces font-bold text-[20px] text-white mb-3">
              Plant a Chapter
            </h4>
            <p className="text-[14px] text-green-100 leading-relaxed mb-6">
              Start a GTIM community in your city or school — we'll walk with
              you every step.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[13px] font-semibold text-gold hover:text-gold-soft transition-colors"
            >
              Enquire →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Involved;
