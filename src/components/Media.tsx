import React from "react";
import ScrollReveal from "./ScrollReveal";

const MEDIA_IMAGES = [
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155928/photo-two-2022_puhj2p.jpg",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155934/photo-three-2022_cw9jb1.jpg",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155925/photo-four-2022_do9btl.jpg",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155927/photo-one-2022_tlolou.jpg",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155910/photo-five-2022_kclhlc.jpg",
];

const Media: React.FC = () => {
  return (
    <section className="bg-white py-[110px] overflow-hidden" id="media">
      <div className="max-w-[1280px] mx-auto px-7">
        <ScrollReveal direction="up">
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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Large featured card */}
          <div className="md:col-span-2 lg:col-span-3 rounded-[16px] overflow-hidden relative h-[380px]">
            <img src={MEDIA_IMAGES[0]} alt="Featured" className="w-full h-full object-cover" />
          </div>

          {/* Small cards */}
          {MEDIA_IMAGES.slice(1, 5).map((src, i) => (
            <div key={i} className="rounded-[16px] overflow-hidden relative h-[250px]">
              <img src={src} alt={`Media ${i + 2}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Media;
