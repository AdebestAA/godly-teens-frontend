import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative py-[72px] pb-[110px] overflow-hidden bg-[radial-gradient(1200px_600px_at_88%_-10%,rgba(212,175,55,0.12),transparent_55%),radial-gradient(900px_500px_at_-10%_110%,rgba(11,107,58,0.08),transparent_55%),paper]"
    >
      <div className="max-w-[1280px] mx-auto px-7 grid grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2.5 px-3.5 py-2 bg-green-100 text-green-800 rounded-full text-[12px] font-semibold tracking-[0.06em] uppercase mb-7">
            A Global Youth Movement — Est. Ibadan, Nigeria
          </span>
          <h1 className="font-montserrat font-extrabold text-[clamp(42px,6vw,82px)] leading-[0.98] tracking-[-0.035em] text-ink mb-6">
            Raising{" "}
            <em className="font-fraunces italic font-medium text-green-800">
              Godly Teens
            </em>{" "}
            for
            <span className="relative inline-block">
              Global Impact.
              <div className="absolute left-0 right-0 bottom-1 h-3 bg-gold opacity-35 -z-10 rounded-sm"></div>
            </span>
          </h1>
          <p className="text-[18px] text-ink-60 max-w-[520px] mb-9 leading-[1.6]">
            A worldwide ministry equipping the next generation with faith,
            purpose and community. Join thousands of teens discovering who God
            made them to be.
          </p>
          <div className="flex flex-wrap gap-3 mb-11">
            <button className="inline-flex items-center gap-2 px-[22px] py-3 text-[14px] font-semibold rounded-[10px] transition-all duration-220 border border-transparent bg-green-800 text-white hover:bg-green-900 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgba(11,107,58,0.5)] cursor-pointer">
              Join the Movement
            </button>
            <button className="inline-flex items-center gap-2 px-[22px] py-3 text-[14px] font-semibold rounded-[10px] transition-all duration-220 border border-green-800/25 bg-transparent text-green-800 hover:bg-green-100 hover:border-green-800 cursor-pointer">
              Watch Sermons
            </button>
            <button className="inline-flex items-center gap-2 px-[22px] py-3 text-[14px] font-semibold rounded-[10px] transition-all duration-220 border border-transparent bg-gold text-green-900 hover:bg-gold-soft hover:-translate-y-0.5 cursor-pointer">
              Donate
            </button>
          </div>
          <div className="flex items-center gap-7 pt-7 border-t border-line max-w-[560px]">
            <div className="flex flex-col">
              <strong className="font-fraunces text-[28px] font-semibold text-green-800 leading-none">
                12K+
              </strong>
              <span className="text-[12px] text-ink-60 mt-1">
                Teens reached
              </span>
            </div>
            <div className="flex flex-col">
              <strong className="font-fraunces text-[28px] font-semibold text-green-800 leading-none">
                28
              </strong>
              <span className="text-[12px] text-ink-60 mt-1">Nations</span>
            </div>
            <div className="flex flex-col">
              <strong className="font-fraunces text-[28px] font-semibold text-green-800 leading-none">
                400+
              </strong>
              <span className="text-[12px] text-ink-60 mt-1">
                Sermons &amp; resources
              </span>
            </div>
          </div>
        </div>
        <div className="relative aspect-[4/5] max-h-[620px]">
          <div className="absolute inset-0 rounded-[24px] bg-[linear-gradient(180deg,rgba(7,61,33,0),rgba(7,61,33,0.6)),url(https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=900&auto=format&fit=crop)] center/cover bg-green-800 bg-green-900 shadow-[0_40px_80px_-30px_rgba(7,61,33,0.45)] overflow-hidden">
            <div className="absolute left-6 right-6 bottom-6 text-white flex justify-between items-end">
              <span className="text-[12px] tracking-[0.08em] uppercase opacity-80">
                Live &amp; on demand
              </span>
              <h4 className="font-fraunces font-medium text-[22px] leading-[1.2]">
                Worship. Word. Community.
              </h4>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
              </svg>
            </div>
          </div>
          <div className="absolute bg-white rounded-[16px] p-4 pb-5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] flex items-center gap-3.5 top-7 -left-8 border border-line">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 relative">
              <div className="absolute inset-[-6px] border-2 border-red-500 rounded-full opacity-0 animate-pulse"></div>
            </div>
            <div>
              <small className="text-[11px] text-ink-40 tracking-[0.08em] uppercase">
                Streaming now
              </small>
              <strong className="text-[13px] block mt-1">
                Teen Worship Night
              </strong>
            </div>
          </div>
          <div className="absolute bg-green-900 text-white rounded-[16px] p-5 pb-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] flex flex-col items-start gap-1 bottom-[-28px] right-[-28px] min-w-[180px]">
            <span className="font-fraunces text-[36px] font-semibold text-gold leading-none">
              6,000+
            </span>
            <span className="text-[12px] opacity-85 tracking-[0.06em] uppercase">
              Humanitarian Exchange
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
