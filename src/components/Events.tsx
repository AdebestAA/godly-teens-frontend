import React from "react";

const Events: React.FC = () => {
  return (
    <section className="bg-white py-[110px] overflow-hidden" id="events">
      <div className="max-w-[1280px] mx-auto px-7">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-gold">
              Upcoming
            </span>
            <h2 className="font-montserrat font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.025em] max-w-[550px]">
              Events &amp;{" "}
              <em className="font-fraunces italic font-medium text-gold-dark">
                gatherings.
              </em>
            </h2>
          </div>

          <p className="max-w-[400px] text-[14px] text-ink-60 leading-relaxed">
            Plan your year. Register online. Invite a friend. Every GTIM event
            is a chance to grow, serve and belong.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="h-[280px] bg-gradient-to-br from-green-600 to-green-800 rounded-[16px] relative flex items-start justify-start p-6">
            <span className="inline-flex px-3 py-1.5 text-[11px] font-bold text-white bg-green-900 rounded-full">
              Flagship Event
            </span>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-fraunces font-bold text-[clamp(24px,2.5vw,36px)] mb-4 text-ink leading-tight">
              The <em className="font-montserrat italic">Humanitarian</em>{" "}
              Exchange 2026
            </h3>
            <p className="text-[14px] text-ink-60 mb-8 leading-relaxed max-w-[450px]">
              Our annual global gathering — 3 days of teaching, worship and
              mission. Join 6,000+ young believers from 28 nations in Ibadan and
              online.
            </p>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="font-fraunces font-bold text-[32px] text-green-800">
                  42
                </div>
                <div className="text-[12px] text-ink-60 font-semibold">
                  Days
                </div>
              </div>
              <div className="text-center">
                <div className="font-fraunces font-bold text-[32px] text-green-800">
                  08
                </div>
                <div className="text-[12px] text-ink-60 font-semibold">
                  Hours
                </div>
              </div>
              <div className="text-center">
                <div className="font-fraunces font-bold text-[32px] text-green-800">
                  34
                </div>
                <div className="text-[12px] text-ink-60 font-semibold">
                  Mins
                </div>
              </div>
              <div className="text-center">
                <div className="font-fraunces font-bold text-[32px] text-green-800">
                  16
                </div>
                <div className="text-[12px] text-ink-60 font-semibold">
                  Secs
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-green-800 flex-shrink-0"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <span className="text-[13px] text-ink-60">
                  24 – 26 August 2026
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-green-800 flex-shrink-0"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-[13px] text-ink-60">
                  Ring Road Auditorium, Ibadan + livestream
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-green-800 flex-shrink-0"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
                <span className="text-[13px] text-ink-60">Ages 13 – 25</span>
              </div>
            </div>

            <button className="inline-flex items-center gap-2 px-6 py-4 text-[15px] font-semibold text-ink bg-gold hover:bg-gold-dark rounded-[10px] transition-all duration-220 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgba(212,175,55,0.5)]">
              Register Now — Free
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-white/90 backdrop-blur-sm border-0 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <span className="text-[12px] font-semibold text-green-800 uppercase">
              May 10 · Online
            </span>
            <h4 className="font-fraunces font-bold text-[18px] my-3 text-ink">
              Parents &amp; Teens Forum
            </h4>
            <p className="text-[13px] text-ink-60 mb-4 leading-relaxed">
              A frank conversation on faith, identity and the digital age — with
              space for Q&amp;A.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[13px] font-semibold text-green-800 hover:text-green-900 transition-colors"
            >
              Register →
            </a>
          </article>
          <article className="bg-white/90 backdrop-blur-sm border-0 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <span className="text-[12px] font-semibold text-green-800 uppercase">
              Jun 02 · Lagos
            </span>
            <h4 className="font-fraunces font-bold text-[18px] my-3 text-ink">
              Regional Leaders Retreat
            </h4>
            <p className="text-[13px] text-ink-60 mb-4 leading-relaxed">
              48 hours of prayer, strategy and rest for chapter leaders across
              West Africa.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[13px] font-semibold text-green-800 hover:text-green-900 transition-colors"
            >
              Register →
            </a>
          </article>
          <article className="bg-white/90 backdrop-blur-sm border-0 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <span className="text-[12px] font-semibold text-green-800 uppercase">
              Jul 18 · Global
            </span>
            <h4 className="font-fraunces font-bold text-[18px] my-3 text-ink">
              Fast &amp; Pray Weekend
            </h4>
            <p className="text-[13px] text-ink-60 mb-4 leading-relaxed">
              Three coordinated 24-hour prayer rooms across time zones. Everyone
              welcome.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[13px] font-semibold text-green-800 hover:text-green-900 transition-colors"
            >
              Register →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Events;
