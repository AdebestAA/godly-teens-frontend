import React from "react";

const Events: React.FC = () => {
  return (
    <section className="bg-white py-27.5 overflow-hidden" id="events">
      <div className="max-w-7xl mx-auto px-7">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-gold">
            Flagship Event
          </span>
          <h2 className="font-montserrat font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-tight max-w-4xl mx-auto mb-8">
            Youth Ministers' Summit{" "}
            <em className="font-fraunces italic font-medium text-gold-dark">
              YMS
            </em>
          </h2>
          <p className="text-xl text-ink-60 max-w-3xl mx-auto leading-relaxed">
            The Youth Ministers' Summit (YMS) is a flagship annual gathering of
            Godly Teens International Ministry, bringing together teenagers and
            young people for powerful encounters through worship, teachings,
            mentorship, and life-transforming experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="h-70 bg-linear-to-br from-green-600 to-green-800 rounded-2xl relative flex items-start justify-start p-6">
            <span className="inline-flex px-3 py-1.5 text-[11px] font-bold text-white bg-green-900 rounded-full">
              Annual Summit
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

        <div className="mb-16">
          <h4 className="font-fraunces font-semibold text-green-800 mb-8 text-center">
            YMS Themes Over the Years
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 2015 Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-green-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Image Placeholder */}
              <div className="relative h-48 bg-linear-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-green-400 mx-auto mb-2"
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
                  <p className="text-xs text-green-600 font-medium">YMS 2015</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h5 className="font-bold text-green-800 text-lg">2015</h5>
                  <span className="text-xs text-ink-60 bg-green-50 px-2 py-1 rounded-full">
                    August 20-21
                  </span>
                </div>

                <p className="font-semibold text-ink-80 mb-3 text-sm">
                  Theme: "Thou shall guide me."
                </p>

                <div className="space-y-2 text-xs text-ink-60">
                  <p>
                    <span className="font-medium">Chairman:</span> Okedara
                    Emmanuel (Uncle O)
                  </p>
                  <p>
                    <span className="font-medium">Speakers:</span> Bro Segun
                    Ariyo, Bro Sunday Akande, Mr Adeleke Adebayo
                  </p>
                  <p>
                    <span className="font-medium">Venue:</span> Living spring
                    Chapel, Sango Ibadan
                  </p>
                </div>
              </div>
            </div>

            {/* 2016 Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-green-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Image Placeholder */}
              <div className="relative h-48 bg-linear-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-orange-400 mx-auto mb-2"
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
                  <p className="text-xs text-orange-600 font-medium">
                    YMS 2016
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h5 className="font-bold text-green-800 text-lg">2016</h5>
                  <span className="text-xs text-ink-60 bg-green-50 px-2 py-1 rounded-full">
                    August 19-20
                  </span>
                </div>

                <p className="font-semibold text-ink-80 mb-3 text-sm">
                  Theme: "Form of Godliness"
                </p>

                <div className="space-y-2 text-xs text-ink-60">
                  <p>
                    <span className="font-medium">Chairman:</span> Mr. Okedara
                    Emmanuel
                  </p>
                  <p>
                    <span className="font-medium">Speakers:</span> Bro Kunmi
                    Adedeji, Dr Mrs Sansi, Mr Adebayo Adeleke
                  </p>
                  <p>
                    <span className="font-medium">Venue:</span> Women Centre
                    Samonda
                  </p>
                  <p>
                    <span className="font-medium">Reference:</span> 2 Tim 3:5
                  </p>
                </div>
              </div>
            </div>

            {/* 2017 Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-green-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Image Placeholder */}
              <div className="relative h-48 bg-linear-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-pink-400 mx-auto mb-2"
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
                  <p className="text-xs text-pink-600 font-medium">YMS 2017</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h5 className="font-bold text-green-800 text-lg">2017</h5>
                  <span className="text-xs text-ink-60 bg-green-50 px-2 py-1 rounded-full">
                    August 18-19
                  </span>
                </div>

                <p className="font-semibold text-ink-80 mb-3 text-sm">
                  Theme: "All Inclusive Christ"
                </p>

                <div className="space-y-2 text-xs text-ink-60">
                  <p>
                    <span className="font-medium">Chairman:</span> Adegbokan
                    Oluwafemi Adewale
                  </p>
                  <p>
                    <span className="font-medium">Speakers:</span> Bro. Temidayo
                    Adeyemo
                  </p>
                  <p>
                    <span className="font-medium">Venue:</span> The Polytechnic
                    of Ibadan
                  </p>
                  <p>
                    <span className="font-medium">Special:</span> Spoken word
                    and Discussion
                  </p>
                </div>
              </div>
            </div>

            {/* 2018 Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-green-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Image Placeholder */}
              <div className="relative h-48 bg-linear-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-purple-400 mx-auto mb-2"
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
                  <p className="text-xs text-purple-600 font-medium">
                    YMS 2018
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h5 className="font-bold text-green-800 text-lg">2018</h5>
                  <span className="text-xs text-ink-60 bg-green-50 px-2 py-1 rounded-full">
                    July 27-28
                  </span>
                </div>

                <p className="font-semibold text-ink-80 mb-3 text-sm">
                  Theme: "That i may grow"
                </p>

                <div className="space-y-2 text-xs text-ink-60">
                  <p>
                    <span className="font-medium">Speakers:</span> Rev Owolabi,
                    Mr Adebayo Adeleke
                  </p>
                  <p>
                    <span className="font-medium">Venue:</span> University of
                    Ibadan
                  </p>
                  <p>
                    <span className="font-medium">Reference:</span> 1 Pet 2:2
                  </p>
                </div>
              </div>
            </div>
            {/* 2019 Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-green-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Image Placeholder */}
              <div className="relative h-48 bg-linear-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-blue-400 mx-auto mb-2"
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
                  <p className="text-xs text-blue-600 font-medium">YMS 2019</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h5 className="font-bold text-green-800 text-lg">2019</h5>
                  <span className="text-xs text-ink-60 bg-green-50 px-2 py-1 rounded-full">
                    August 16-17
                  </span>
                </div>

                <p className="font-semibold text-ink-80 mb-3 text-sm">
                  Theme: "From believing to knowing"
                </p>

                <div className="space-y-2 text-xs text-ink-60">
                  <p>
                    <span className="font-medium">Chairman:</span> Mr. Adigun
                    Ajetola
                  </p>
                  <p>
                    <span className="font-medium">Speakers:</span> Revd. Albert
                    Oduwole, Mr Niyi Odetola, Mr Akinyemi Lapinni
                  </p>
                  <p>
                    <span className="font-medium">Venue:</span> Federal college
                    of agriculture, Moore plantation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-linear-to-r from-green-50 to-green-100 border border-green-200 rounded-2xl">
          <p className="text-ink-80 font-semibold text-center">
            YMS continues to serve as a platform for spiritual awakening,
            direction, and empowerment, raising a generation of teenagers and
            youths who are guided by God and committed to purposeful living.
          </p>
        </div>

        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="font-fraunces text-3xl font-semibold text-green-800 mb-4">
              What to Expect at YMS
            </h3>
            <p className="text-ink-60 max-w-2xl mx-auto">
              Each YMS gathering brings together teenagers and young people for
              powerful encounters through worship, teachings, mentorship, and
              life-transforming experiences.
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
      </div>
    </section>
  );
};

export default Events;
