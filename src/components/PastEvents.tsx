import React from "react";

const PastEvents: React.FC = () => {
  const pastEvents = [
    {
      id: 1,
      title: "Humanitarian Exchange 2025",
      date: "March 15-17, 2025",
      location: "Ibadan, Nigeria",
      attendees: 5800,
      description:
        "Our annual global gathering brought together young believers from 26 nations for worship, teaching, and mission.",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop",
      highlights: [
        "28 Nations represented",
        "6,000+ attendees",
        "400+ local projects launched",
      ],
    },
    {
      id: 2,
      title: "Youth Leadership Summit 2024",
      date: "November 8-10, 2024",
      location: "Lagos, Nigeria",
      attendees: 1200,
      description:
        "A transformative weekend focused on developing leadership skills and character in young people.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop",
      highlights: [
        "1200 leaders trained",
        "50+ churches involved",
        "New chapter plants in 8 cities",
      ],
    },
    {
      id: 3,
      title: "Teen Worship Conference 2024",
      date: "July 20-22, 2024",
      location: "Abuja, Nigeria",
      attendees: 2500,
      description:
        "Three days of powerful worship, biblical teaching, and community building for teenagers.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop",
      highlights: [
        "2500 teens participated",
        "15 worship leaders",
        "100+ new commitments",
      ],
    },
    {
      id: 4,
      title: "International Youth Camp 2023",
      date: "December 26-31, 2023",
      location: "Cape Town, South Africa",
      attendees: 800,
      description:
        "Cross-cultural exchange bringing together young people from across the African continent.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
      highlights: [
        "800 international participants",
        "12 countries represented",
        "25 local outreach projects",
      ],
    },
  ];

  return (
    <section className="bg-white py-[110px] overflow-hidden" id="past-events">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-7">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-gold">
            Past Events
          </span>
          <h2 className="font-montserrat font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.025em] text-ink mb-6">
            Moments That Changed Lives
          </h2>
          <p className="text-[16px] text-ink-60 max-w-[600px] mx-auto leading-relaxed">
            Every GTIM event creates lasting impact. Here are some of our most
            memorable gatherings that shaped communities and transformed lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pastEvents.map((event) => (
            <article
              key={event.id}
              className="border border-line rounded-[16px] overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-[240px] bg-gradient-to-br from-green-600 to-green-800 relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-flex px-3 py-1.5 text-[11px] font-bold text-white bg-green-900 rounded-full mb-2">
                    Past Event
                  </span>
                  <h3 className="font-fraunces font-bold text-[20px] text-white mb-1">
                    {event.title}
                  </h3>
                  <div className="text-[13px] text-green-100">
                    {event.date} • {event.location}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-line">
                  <span className="text-[13px] font-medium text-ink-60">
                    👥 {event.attendees.toLocaleString()} attendees
                  </span>
                </div>
                <p className="text-[14px] text-ink-60 mb-4 leading-relaxed">
                  {event.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-[14px] text-ink mb-3">
                    Event Highlights:
                  </h4>
                  <ul className="space-y-1">
                    {event.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="text-[13px] text-ink-60 flex items-center gap-2"
                      >
                        <span className="text-gold">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-line">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-green-600 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-green-700 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-green-800 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
                      +
                    </div>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[13px] font-semibold text-green-800 hover:text-green-900 transition-colors"
                  >
                    View Photos
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
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-ink-60 mb-6">
            Want to see more of our past events and their impact?
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold text-green-800 border border-line rounded-[10px] hover:border-green-800 hover:bg-green-50 transition-all">
            View Complete Archive
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

export default PastEvents;
