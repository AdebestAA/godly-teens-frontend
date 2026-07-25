import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { useYmsModalStore } from "../stores/ymsModalStore";

const CardSlider: React.FC<{ photos: string[]; onClick: () => void }> = ({
  photos,
  onClick,
}) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const timer = setInterval(() => {
      setIdx((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <div
      className="relative h-48 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      {photos.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === idx ? 1 : 0 }}
        />
      ))}
      {photos.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {photos.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === idx ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
    </div>
  );
};

const YMS_IMAGES_2017 = [
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780154127/photo-three_fqr1k3.png",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780154131/photo-four_fpurci.png",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780154194/photo-two_zouyz4.png",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780154128/photo-one_bkptmc.png",
];
const YMS_IMAGES_2015 = [
  "https://res.cloudinary.com/daqkjbrrs/image/upload/v1781985886/WhatsApp_Image_2026-06-20_at_8.57.21_PM_1_wp3hqk.jpg",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/v1781985886/WhatsApp_Image_2026-06-20_at_8.57.21_PM_znyrbm.jpg",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/v1781985886/WhatsApp_Image_2026-06-20_at_8.57.21_PM_3_zqhhbs.jpg",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/v1781985886/WhatsApp_Image_2026-06-20_at_8.57.21_PM_2_gkfiwn.jpg",
];

const YMS_IMAGES_2022 = [
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155928/photo-two-2022_puhj2p.jpg",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155934/photo-three-2022_cw9jb1.jpg",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155925/photo-four-2022_do9btl.jpg",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155927/photo-one-2022_tlolou.jpg",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155910/photo-five-2022_kclhlc.jpg",
  "https://res.cloudinary.com/daqkjbrrs/image/upload/q_auto,f_auto/v1780155913/photo-six-2022_agbznf.jpg",
];

const ymsData = [
  {
    year: "2015",
    date: "August 20-21",
    theme: "Thou shall guide me.",
    gradient: "from-green-100 to-green-200",
    iconColor: "text-green-400",
    labelColor: "text-green-600",
    photos: YMS_IMAGES_2015,
    details: [
      { label: "Chairman", value: "Okedara Emmanuel (Uncle O)" },
      {
        label: "Speakers",
        value: "Bro Segun Ariyo, Bro Sunday Akande, Mr Adeleke Adebayo",
      },
      { label: "Venue", value: "Living spring Chapel, Sango Ibadan" },
    ],
  },
  {
    year: "2016",
    date: "August 19-20",
    theme: "Form of Godliness",
    gradient: "from-orange-100 to-orange-200",
    iconColor: "text-orange-400",
    labelColor: "text-orange-600",
    photos: [] as string[],
    details: [
      { label: "Chairman", value: "Mr. Okedara Emmanuel" },
      {
        label: "Speakers",
        value: "Bro Kunmi Adedeji, Dr Mrs Sansi, Mr Adebayo Adeleke",
      },
      { label: "Venue", value: "Women Centre Samonda" },
      { label: "Reference", value: "2 Tim 3:5" },
    ],
  },
  {
    year: "2017",
    date: "August 18-19",
    theme: "All Inclusive Christ",
    gradient: "from-pink-100 to-pink-200",
    iconColor: "text-pink-400",
    labelColor: "text-pink-600",
    photos: YMS_IMAGES_2017,
    details: [
      { label: "Chairman", value: "Adegbokan Oluwafemi Adewale" },
      { label: "Speakers", value: "Bro. Temidayo Adeyemo" },
      { label: "Venue", value: "The Polytechnic of Ibadan" },
      { label: "Special", value: "Spoken word and Discussion" },
    ],
  },
  {
    year: "2018",
    date: "July 27-28",
    theme: "That i may grow",
    gradient: "from-purple-100 to-purple-200",
    iconColor: "text-purple-400",
    labelColor: "text-purple-600",
    photos: [] as string[],
    details: [
      { label: "Speakers", value: "Rev Owolabi, Mr Adebayo Adeleke" },
      { label: "Venue", value: "University of Ibadan" },
      { label: "Reference", value: "1 Pet 2:2" },
    ],
  },
  {
    year: "2019",
    date: "August 16-17",
    theme: "From believing to knowing",
    gradient: "from-blue-100 to-blue-200",
    iconColor: "text-blue-400",
    labelColor: "text-blue-600",
    photos: [] as string[],
    details: [
      { label: "Chairman", value: "Mr. Adigun Ajetola" },
      {
        label: "Speakers",
        value: "Revd. Albert Oduwole, Mr Niyi Odetola, Mr Akinyemi Lapinni",
      },
      {
        label: "Venue",
        value: "Federal college of agriculture, Moore plantation",
      },
    ],
  },
  {
    year: "2022",
    date: "TBD",
    theme: "TBD",
    gradient: "from-teal-100 to-teal-200",
    iconColor: "text-teal-400",
    labelColor: "text-teal-600",
    photos: YMS_IMAGES_2022,
    details: [
      { label: "Chairman", value: "TBD" },
      { label: "Speakers", value: "TBD" },
      { label: "Venue", value: "TBD" },
    ],
  },
];

const Events: React.FC<{ teaser?: boolean }> = ({ teaser = false }) => {
  const ymsModal = useYmsModalStore();

  if (teaser) {
    return (
      <section className="bg-white py-20 overflow-hidden" id="events">
        <div className="max-w-3xl mx-auto px-7 text-center">
          <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4">
            Flagship Event
          </span>
          <h2 className="font-montserrat font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-tight mb-6">
            Youth Ministers' Summit{" "}
            <em className="font-fraunces italic font-medium text-gold-dark">
              YMS
            </em>
          </h2>
          <p className="text-lg text-ink-60 max-w-2xl mx-auto mb-8">
            The Youth Ministers' Summit is a flagship annual gathering bringing
            together teenagers and young people for powerful encounters through
            worship, teachings, mentorship, and life-transforming experiences.
          </p>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-8 py-4 text-[15px] font-semibold rounded-xl bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl transition-all"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-27.5 overflow-hidden" id="events">
      <div className="max-w-7xl mx-auto px-7">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4">
              Flagship Event
            </span>
            <h2 className="font-montserrat font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-tight max-w-4xl mx-auto mb-8">
              Youth Ministers' Summit{" "}
              <em className="font-fraunces italic font-medium text-gold-dark">
                YMS
              </em>
            </h2>
            <p className="text-xl text-ink-60 max-w-3xl mx-auto leading-relaxed">
              The Youth Ministers' Summit (YMS) is a flagship annual gathering
              of Godly Teens International Ministry, bringing together teenagers
              and young people for powerful encounters through worship,
              teachings, mentorship, and life-transforming experiences.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="h-70 bg-linear-to-br flex items-center justify-center from-green-600 to-green-800 rounded-2xl relative  p-6">
              <span className="inline-flex px-3 py-1.5 text-[25px] font-bold text-white  rounded-full">
                TBA
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-fraunces font-bold text-[clamp(24px,2.5vw,36px)] mb-4 text-ink leading-tight">
                Youth Ministers' Summit{" "}
                <em className="font-montserrat italic">2026</em>
              </h3>
              <p className="text-[14px] text-ink-60 mb-8 leading-relaxed max-w-112.5">
                Each year is marked by a unique theme that reflects God's
                direction and focus for the season. YMS continues to serve as a
                platform for spiritual awakening, direction, and empowerment.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="mb-16">
            <h4 className="font-fraunces font-semibold text-green-800 mb-8 text-center">
              YMS Themes Over the Years
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ymsData.map((yms) => (
                <div
                  key={yms.year}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-green-100"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10" />

                  {yms.photos.length > 0 ? (
                    <CardSlider
                      photos={yms.photos}
                      onClick={() => ymsModal.open(yms.photos)}
                    />
                  ) : (
                    <div
                      className={`relative h-48 bg-linear-to-br ${yms.gradient} flex items-center justify-center`}
                    >
                      <div className="text-center">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          className={`${yms.iconColor} mx-auto mb-2`}
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          ></rect>
                          <circle cx="9" cy="9" r="2"></circle>
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                        </svg>
                        <p className={`text-xs ${yms.labelColor} font-medium`}>
                          YMS {yms.year}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h5 className="font-bold text-green-800 text-lg">
                        {yms.year}
                      </h5>
                      <span className="text-xs text-ink-60 bg-green-50 px-2 py-1 rounded-full">
                        {yms.date}
                      </span>
                    </div>
                    <p className="font-semibold text-ink-80 mb-3 text-sm">
                      Theme: "{yms.theme}"
                    </p>
                    <div className="space-y-2 text-xs text-ink-60">
                      {yms.details.map((d) => (
                        <p key={d.label}>
                          <span className="font-medium">{d.label}:</span>{" "}
                          {d.value}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="p-6 bg-linear-to-r from-green-50 to-green-100 border border-green-200 rounded-2xl">
            <p className="text-ink-80 font-semibold text-center">
              YMS continues to serve as a platform for spiritual awakening,
              direction, and empowerment, raising a generation of teenagers and
              youths who are guided by God and committed to purposeful living.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="font-fraunces text-3xl font-semibold text-green-800 mb-4">
                What to Expect at YMS
              </h3>
              <p className="text-ink-60 max-w-2xl mx-auto">
                Each YMS gathering brings together teenagers and young people
                for powerful encounters through worship, teachings, mentorship,
                and life-transforming experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="relative w-14 h-14 rounded-xl bg-linear-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                  </svg>
                </div>
                <h4 className="font-montserrat font-bold text-green-800 text-lg mb-3">
                  Worship & Praise
                </h4>
                <p className="text-ink-60 text-sm leading-relaxed">
                  Powerful worship sessions that create an atmosphere for
                  encountering God and experiencing His presence.
                </p>
              </div>

              <div className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="relative w-14 h-14 rounded-xl bg-linear-to-br from-purple-400 to-purple-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h4 className="font-montserrat font-bold text-green-800 text-lg mb-3">
                  Biblical Teachings
                </h4>
                <p className="text-ink-60 text-sm leading-relaxed">
                  Deep, relevant teachings from God's Word that address
                  contemporary issues and provide spiritual guidance.
                </p>
              </div>

              <div className="group relative p-6 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="relative w-14 h-14 rounded-xl bg-linear-to-br from-green-400 to-green-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h4 className="font-montserrat font-bold text-green-800 text-lg mb-3">
                  Mentorship & Fellowship
                </h4>
                <p className="text-ink-60 text-sm leading-relaxed">
                  Opportunities for mentorship, networking, and building lasting
                  relationships with fellow believers.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* YMS Image Modal */}
      {ymsModal.isOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center"
          onClick={ymsModal.close}
        >
          <button
            onClick={ymsModal.close}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {ymsModal.photos.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  ymsModal.prev();
                }}
                className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  ymsModal.next();
                }}
                className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <img
            src={ymsModal.photos[ymsModal.currentIndex]}
            alt={`YMS ${ymsModal.currentIndex + 1}`}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {ymsModal.photos.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {ymsModal.photos.map((_, i) => (
                <span
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === ymsModal.currentIndex ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Events;
