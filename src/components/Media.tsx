import React from "react";
import ScrollReveal from "./ScrollReveal";

const MEDIA_IMAGES = [
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155928/photo-two-2022_puhj2p.jpg",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155934/photo-three-2022_cw9jb1.jpg",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155925/photo-four-2022_do9btl.jpg",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155927/photo-one-2022_tlolou.jpg",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155910/photo-five-2022_kclhlc.jpg",
];

const doubled = [...MEDIA_IMAGES, ...MEDIA_IMAGES];

const Media: React.FC = () => {
  return (
    <section className="bg-white py-[110px] overflow-hidden" id="media">
      <div className="max-w-[1280px] mx-auto px-7">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-gold">Media Library</span>
              <h2 className="font-montserrat font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.025em] max-w-[550px]">
                Sermons, articles &amp;{" "}
                <em className="font-fraunces italic font-medium text-gold-dark">stories of faith.</em>
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-media-scroll w-max">
              {doubled.map((src, i) => (
                <div key={i} className="w-[80vw] md:w-[400px] shrink-0 rounded-[16px] overflow-hidden h-[280px]">
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Media;
