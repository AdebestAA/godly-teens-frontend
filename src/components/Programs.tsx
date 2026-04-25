import React from "react";

const Programs: React.FC = () => {
  return (
    <section className="bg-white py-[110px] overflow-hidden" id="programs">
      <div className="max-w-[1280px] mx-auto px-7">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16">
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
            <button className="px-4 py-2 text-[13px] font-semibold text-white bg-green-800 rounded-full transition-all hover:bg-green-900">
              All
            </button>
            <button className="px-4 py-2 text-[13px] font-semibold text-ink-60 bg-transparent border border-line rounded-full transition-all hover:border-green-800">
              Discipleship
            </button>
            <button className="px-4 py-2 text-[13px] font-semibold text-ink-60 bg-transparent border border-line rounded-full transition-all hover:border-green-800">
              Leadership
            </button>
            <button className="px-4 py-2 text-[13px] font-semibold text-ink-60 bg-transparent border border-line rounded-full transition-all hover:border-green-800">
              Creative
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="border border-line rounded-[16px] overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-[280px] bg-gradient-to-br from-green-600 to-green-800 relative flex items-end justify-start p-5">
              <span className="inline-flex px-3 py-1.5 text-[12px] font-bold text-white bg-green-900 rounded-full">
                Discipleship
              </span>
            </div>
            <div className="p-6">
              <div className="flex gap-4 mb-4 pb-4 border-b border-line">
                <span className="text-[13px] font-medium text-ink-60">
                  📅 Weekly
                </span>
                <span className="text-[13px] font-medium text-ink-60">
                  ⏱ 90 mins
                </span>
              </div>
              <h3 className="font-fraunces font-bold text-[22px] mb-3 text-ink">
                Teen Fire Nights
              </h3>
              <p className="text-[14px] text-ink-60 mb-6 leading-relaxed">
                A weekly worship and teaching gathering for teens to encounter
                God, study Scripture and build lasting friendships.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-line">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-600 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-green-700 border-2 border-white"></div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-green-800 hover:text-green-900 transition-colors"
                >
                  Learn more
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          <article className="border border-line rounded-[16px] overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-[280px] bg-gradient-to-br from-gold-soft to-gold-dark relative flex items-end justify-start p-5">
              <span className="inline-flex px-3 py-1.5 text-[12px] font-bold text-ink bg-gold-soft rounded-full">
                Leadership
              </span>
            </div>
            <div className="p-6">
              <div className="flex gap-4 mb-4 pb-4 border-b border-line">
                <span className="text-[13px] font-medium text-ink-60">
                  📅 Monthly
                </span>
                <span className="text-[13px] font-medium text-ink-60">
                  ⏱ Half-day
                </span>
              </div>
              <h3 className="font-fraunces font-bold text-[22px] mb-3 text-ink">
                Emerging Leaders Academy
              </h3>
              <p className="text-[14px] text-ink-60 mb-6 leading-relaxed">
                A six-month cohort developing young leaders in character, public
                speaking, business and civic engagement.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-line">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gold border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gold-soft border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gold-dark border-2 border-white"></div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-green-800 hover:text-green-900 transition-colors"
                >
                  Learn more
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          <article className="border border-line rounded-[16px] overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-[280px] bg-gradient-to-br from-purple-500 to-purple-700 relative flex items-end justify-start p-5">
              <span className="inline-flex px-3 py-1.5 text-[12px] font-bold text-white bg-purple-900 rounded-full">
                Creative
              </span>
            </div>
            <div className="p-6">
              <div className="flex gap-4 mb-4 pb-4 border-b border-line">
                <span className="text-[13px] font-medium text-ink-60">
                  📅 Termly
                </span>
                <span className="text-[13px] font-medium text-ink-60">
                  ⏱ 3 weeks
                </span>
              </div>
              <h3 className="font-fraunces font-bold text-[22px] mb-3 text-ink">
                Creatives &amp; Arts Lab
              </h3>
              <p className="text-[14px] text-ink-60 mb-6 leading-relaxed">
                Music, film, writing and design workshops where young creatives
                develop their craft as an act of worship.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-line">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-600 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-700 border-2 border-white"></div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-green-800 hover:text-green-900 transition-colors"
                >
                  Learn more
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Programs;
