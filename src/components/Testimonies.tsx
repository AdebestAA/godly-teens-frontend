import React from "react";

const Testimonies: React.FC = () => {
  return (
    <section className="bg-white py-[110px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-7">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-gold">
              Stories
            </span>
            <h2 className="font-montserrat font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.025em] max-w-[550px]">
              What teens are{" "}
              <em className="font-fraunces italic font-medium text-gold-dark">
                saying.
              </em>
            </h2>
          </div>
          <p className="max-w-[400px] text-[14px] text-ink-60 leading-relaxed">
            Real words from real young people whose lives have been shaped by
            this community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="border border-line rounded-[16px] p-7 hover:shadow-lg transition-shadow">
            <div className="text-[64px] font-fraunces text-gold-soft mb-3 leading-none">
              "
            </div>
            <blockquote className="text-[15px] text-ink leading-relaxed mb-6">
              I came to GTIM broken and unsure. Today I lead the media team in
              my local chapter — and I've never felt more purpose in my life.
            </blockquote>
            <div className="flex items-center gap-3 pt-6 border-t border-line">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-800 text-white font-bold text-[12px]">
                DA
              </div>
              <div>
                <strong className="block text-[13px] font-semibold text-ink">
                  Daniel Adeyemi
                </strong>
                <span className="text-[12px] text-ink-60">
                  18 · Abuja, Nigeria
                </span>
              </div>
            </div>
          </article>

          <article className="border border-line rounded-[16px] p-7 hover:shadow-lg transition-shadow">
            <div className="text-[64px] font-fraunces text-gold-soft mb-3 leading-none">
              "
            </div>
            <blockquote className="text-[15px] text-ink leading-relaxed mb-6">
              The Humanitarian Exchange was the weekend that rewired my life. I
              understand the Bible now — and I have friends who challenge me to
              be better.
            </blockquote>
            <div className="flex items-center gap-3 pt-6 border-t border-line">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark text-ink font-bold text-[12px]">
                EO
              </div>
              <div>
                <strong className="block text-[13px] font-semibold text-ink">
                  Esther Okon
                </strong>
                <span className="text-[12px] text-ink-60">16 · London, UK</span>
              </div>
            </div>
          </article>

          <article className="border border-line rounded-[16px] p-7 hover:shadow-lg transition-shadow">
            <div className="text-[64px] font-fraunces text-gold-soft mb-3 leading-none">
              "
            </div>
            <blockquote className="text-[15px] text-ink leading-relaxed mb-6">
              Our son found a community of teens who love God and love people.
              As parents, that's everything. GTIM has been a gift to our family.
            </blockquote>
            <div className="flex items-center gap-3 pt-6 border-t border-line">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 text-white font-bold text-[12px]">
                MO
              </div>
              <div>
                <strong className="block text-[13px] font-semibold text-ink">
                  Mr. &amp; Mrs. Olatunji
                </strong>
                <span className="text-[12px] text-ink-60">
                  Parents · Ibadan, Nigeria
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
