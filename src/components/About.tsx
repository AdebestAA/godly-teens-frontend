import React from "react";

const About: React.FC = () => {
  return (
    <section
      className="bg-white border-t border-line border-b border-line py-[110px]"
      id="about"
    >
      <div className="max-w-[1280px] mx-auto px-7 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="relative aspect-square">
          <div className="absolute w-[62%] h-[72%] top-0 left-0 bg-[url(https://images.unsplash.com/photo-1507692049790-de58290a4334?w=700&auto=format&fit=crop)] center/cover bg-green-500 shadow-[0_30px_60px_-30px_rgba(7,61,33,0.4)] rounded-[16px]"></div>
          <div className="absolute w-[38%] aspect-square top-[48%] left-[38%] bg-gold text-green-900 grid place-items-center p-5 text-center rounded-[16px] border-6 border-paper">
            <div>
              <div className="font-fraunces text-[48px] font-semibold leading-none">
                15+
              </div>
              <div className="text-[10px] tracking-[0.14em] uppercase font-semibold mt-1.5">
                Years of Ministry
              </div>
            </div>
          </div>
          <div className="absolute w-[48%] h-[52%] bottom-0 right-0 bg-[url(https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&auto=format&fit=crop)] center/cover bg-green-800 rounded-[16px] border-6 border-paper"></div>
        </div>
        <div>
          <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-gold">
            Who we are
          </span>
          <h2 className="font-montserrat font-extrabold text-[clamp(32px,3.5vw,48px)] leading-[1.05] tracking-[-0.025em] mb-6">
            A ministry built on{" "}
            <em className="font-fraunces italic font-medium text-green-800">
              purpose, Word
            </em>{" "}
            and worldwide community.
          </h2>
          <p className="text-ink-60 mb-4">
            From our home in Ibadan, Nigeria, Godly Teens International Ministry
            has grown into a global family of young believers. We exist to raise
            teenagers and youths who know God, know their calling, and carry
            both into every sphere of their lives.
          </p>
          <p className="text-ink-60 mb-4">
            Through sermons, mentorship, events and media, we create a trusted
            space where young people can grow, belong and lead.
          </p>
          <div className="grid grid-cols-2 gap-5 mt-8">
            <div className="p-5 border border-line rounded-[14px] bg-paper">
              <div className="w-9 h-9 rounded-[9px] bg-green-100 text-green-800 grid place-items-center mb-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
                </svg>
              </div>
              <h5 className="font-montserrat text-[14px] font-bold mb-1">
                Our Mission
              </h5>
              <p className="text-[13px] text-ink-60 m-0">
                Disciple the next generation in truth, character and Kingdom
                purpose.
              </p>
            </div>
            <div className="p-5 border border-line rounded-[14px] bg-paper">
              <div className="w-9 h-9 rounded-[9px] bg-green-100 text-green-800 grid place-items-center mb-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                </svg>
              </div>
              <h5 className="font-montserrat text-[14px] font-bold mb-1">
                Our Vision
              </h5>
              <p className="text-[13px] text-ink-60 m-0">
                Godly teens shaping nations through faith, leadership and
                impact.
              </p>
            </div>
            <div className="p-5 border border-line rounded-[14px] bg-paper">
              <div className="w-9 h-9 rounded-[9px] bg-green-100 text-green-800 grid place-items-center mb-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h5 className="font-montserrat text-[14px] font-bold mb-1">
                Community
              </h5>
              <p className="text-[13px] text-ink-60 m-0">
                Chapters and mentors across 28 nations — you're not alone.
              </p>
            </div>
            <div className="p-5 border border-line rounded-[14px] bg-paper">
              <div className="w-9 h-9 rounded-[9px] bg-green-100 text-green-800 grid place-items-center mb-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                </svg>
              </div>
              <h5 className="font-montserrat text-[14px] font-bold mb-1">
                The Word
              </h5>
              <p className="text-[13px] text-ink-60 m-0">
                Scripture-rooted teaching — no fluff, no gimmicks, just truth.
              </p>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 px-[22px] py-3 text-[14px] font-semibold rounded-[10px] transition-all duration-220 border border-green-800/25 bg-transparent text-green-800 hover:bg-green-100 hover:border-green-800 cursor-pointer mt-8">
            Read our story
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
    </section>
  );
};

export default About;
