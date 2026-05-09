import React from "react";

const Scripture: React.FC = () => {
  return (
    <section className="bg-green-600 py-[80px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-7 text-center">
        <blockquote className="font-montserrat font-bold text-[clamp(24px,3vw,48px)] text-white leading-[1.15] tracking-[-0.01em] mb-6 max-w-[900px] mx-auto">
          Don't let anyone look down on you because you are young, but{" "}
          <span className="font-fraunces italic text-gold-soft">
            set an example
          </span>{" "}
          for the believers in speech, in conduct, in love, in faith and in
          purity.
        </blockquote>
        <cite className="font-inter text-[14px] text-green-100 not-italic tracking-[0.05em] uppercase">
          1 Timothy 4:12
        </cite>
      </div>
    </section>
  );
};

export default Scripture;
