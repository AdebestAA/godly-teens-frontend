import React from "react";

const Media: React.FC = () => {
  return (
    <section className="bg-white py-[110px] overflow-hidden" id="media">
      <div className="max-w-[1280px] mx-auto px-7">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-gold">
              Media Library
            </span>
            <h2 className="font-montserrat font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.025em] max-w-[550px]">
              Sermons, articles &amp;{" "}
              <em className="font-fraunces italic font-medium text-gold-dark">
                stories of faith.
              </em>
            </h2>
          </div>
          <button className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-semibold text-green-800 border border-line rounded-[10px] hover:border-green-800 hover:bg-green-50 transition-all">
            Explore all media
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-green-600 to-green-800 rounded-[16px] overflow-hidden group cursor-pointer relative h-[380px]">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gold/80 group-hover:bg-gold transition-colors">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-ink ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/40 to-transparent">
              <span className="text-[12px] font-bold text-gold-soft uppercase">
                Featured Sermon · 42 min
              </span>
              <h4 className="font-fraunces font-bold text-[24px] text-white mt-2 mb-1">
                The God Who Calls You by Name
              </h4>
              <div className="text-[13px] text-green-100">
                Pastor Tunde Adebayo · March 2026 · 12K views
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-[16px] overflow-hidden group cursor-pointer relative h-[250px]">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 group-hover:bg-white transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-ink ml-0.5"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/40 to-transparent">
              <span className="text-[11px] font-bold text-orange-100 uppercase">
                Worship · 28 min
              </span>
              <h4 className="font-fraunces font-bold text-[16px] text-white mt-1">
                All Hail the King
              </h4>
              <div className="text-[12px] text-orange-100">
                Teen Worship Collective
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-[16px] overflow-hidden group cursor-pointer relative h-[250px]">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 group-hover:bg-white transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-ink ml-0.5"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/40 to-transparent">
              <span className="text-[11px] font-bold text-blue-100 uppercase">
                Podcast · 36 min
              </span>
              <h4 className="font-fraunces font-bold text-[16px] text-white mt-1">
                Anxiety &amp; Faith
              </h4>
              <div className="text-[12px] text-blue-100">Ep. 24</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-[16px] overflow-hidden group cursor-pointer relative h-[250px]">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 group-hover:bg-white transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-ink ml-0.5"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/40 to-transparent">
              <span className="text-[11px] font-bold text-purple-100 uppercase">
                Devotional · 8 min read
              </span>
              <h4 className="font-fraunces font-bold text-[16px] text-white mt-1">
                Why Purity Still Matters
              </h4>
              <div className="text-[12px] text-purple-100">Grace Ojo</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-[16px] overflow-hidden group cursor-pointer relative h-[250px]">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 group-hover:bg-white transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-ink ml-0.5"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/40 to-transparent">
              <span className="text-[11px] font-bold text-rose-100 uppercase">
                Testimony · 14 min
              </span>
              <h4 className="font-fraunces font-bold text-[16px] text-white mt-1">
                From Broken to Built
              </h4>
              <div className="text-[12px] text-rose-100">Chika's Story</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
