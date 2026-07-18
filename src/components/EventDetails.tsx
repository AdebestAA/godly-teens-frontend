import React from "react";

const EventDetails: React.FC = () => {
  const eventDetails = {
    title: "The Humanitarian Exchange 2026",
    date: "August 24-26, 2026",
    time: "3 Days • 9:00 AM - 6:00 PM Daily",
    location: "Ring Road Auditorium, Ibadan, Nigeria",
    capacity: 6000,
    registered: 3247,
    price: "₦15,000 (Early Bird) • ₦25,000 (Regular)",
    description:
      "Our annual global gathering. 3 days of teaching, worship and mission. Join 6,000+ young believers from 28 nations in Ibadan and online.",
    agenda: [
      {
        day: "Day 1: Worship & Welcome",
        time: "9:00 AM - 6:00 PM",
        activities: [
          "Opening Worship Session",
          "Welcome & Icebreakers",
          "Keynote: 'Called to Greatness'",
          "Breakout Sessions",
          "Community Dinner",
        ],
      },
      {
        day: "Day 2: Teaching & Mission",
        time: "9:00 AM - 6:00 PM",
        activities: [
          "Morning Worship",
          "Workshop: Leadership Development",
          "Panel: Global Missions",
          "Afternoon Prayer & Ministry",
          "Cultural Exchange Night",
        ],
      },
      {
        day: "Day 3: Commission & Send-off",
        time: "9:00 AM - 4:00 PM",
        activities: [
          "Final Worship Service",
          "Commissioning Ceremony",
          "Closing Keynote",
          "Networking & Fellowship",
          "Departure Blessings",
        ],
      },
    ],
    speakers: [
      {
        name: "Pastor Tunde Adebayo",
        role: "Senior Pastor, GTIM",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop",
      },
      {
        name: "Dr. Sarah Johnson",
        role: "Youth Ministry Director",
        image:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&auto=format&fit=crop",
      },
      {
        name: "Bishop Michael Okafor",
        role: "International Missions",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop",
      },
      {
        name: "Pastor Grace Nwosu",
        role: "Worship Director",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop",
      },
    ],
    facilities: [
      "Air-conditioned auditorium",
      "Translation services",
      "Meal provisions",
      "Accommodation assistance",
      "Transportation support",
    ],
  };

  return (
    <section className="bg-white py-[110px] overflow-hidden" id="event-details">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-7">
        {/* Event Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4">
            Event Details
          </span>
          <h1 className="font-montserrat font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.025em] text-ink mb-6">
            {eventDetails.title}
          </h1>
          <p className="text-[18px] text-ink-60 max-w-[700px] mx-auto leading-relaxed">
            {eventDetails.description}
          </p>
        </div>

        {/* Event Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-xl hover:border-gold transition-all duration-300 p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-green-400 to-green-600 text-white shadow-lg grid place-items-center mx-auto mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </div>
            <h3 className="font-semibold text-ink mb-2">Date</h3>
            <p className="text-ink-60 text-[14px]">{eventDetails.date}</p>
          </div>

          <div className="bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-xl hover:border-gold transition-all duration-300 p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-green-400 to-green-600 text-white shadow-lg grid place-items-center mx-auto mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 className="font-semibold text-ink mb-2">Duration</h3>
            <p className="text-ink-60 text-[14px]">{eventDetails.time}</p>
          </div>

          <div className="bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-xl hover:border-gold transition-all duration-300 p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-green-400 to-green-600 text-white shadow-lg grid place-items-center mx-auto mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="font-semibold text-ink mb-2">Location</h3>
            <p className="text-ink-60 text-[14px]">{eventDetails.location}</p>
          </div>

          <div className="bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-xl hover:border-gold transition-all duration-300 p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-green-400 to-green-600 text-white shadow-lg grid place-items-center mx-auto mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 2l-4 4m0 0l4 4m-4-4h-5" />
              </svg>
            </div>
            <h3 className="font-semibold text-ink mb-2">Registration</h3>
            <p className="text-ink-60 text-[14px]">
              {eventDetails.registered}/{eventDetails.capacity}
            </p>
          </div>
        </div>

        {/* Agenda */}
        <div className="mb-12">
          <h2 className="font-montserrat font-bold text-[28px] text-ink mb-8">
            Event Agenda
          </h2>
          <div className="space-y-6">
            {eventDetails.agenda.map((day, index) => (
              <div
                key={index}
                className="group relative bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:border-gold hover:-translate-y-1 transition-all duration-500 overflow-hidden p-6"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold via-green-600 to-green-800 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="font-fraunces font-bold text-[20px] text-ink">
                    {day.day}
                  </h3>
                  <span className="text-[14px] text-ink-60 font-medium">
                    {day.time}
                  </span>
                </div>
                <ul className="space-y-2">
                  {day.activities.map((activity, actIndex) => (
                    <li
                      key={actIndex}
                      className="flex items-center gap-3 text-[14px] text-ink-60"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0"></span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Speakers */}
        <div className="mb-12">
          <h2 className="font-montserrat font-bold text-[28px] text-ink mb-8">
            Featured Speakers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventDetails.speakers.map((speaker, index) => (
              <div key={index} className="text-center">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-fraunces font-bold text-[16px] text-ink mb-1">
                  {speaker.name}
                </h3>
                <p className="text-[14px] text-ink-60">{speaker.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-12">
          <h2 className="font-montserrat font-bold text-[28px] text-ink mb-8">
            What's Provided
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {eventDetails.facilities.map((facility, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white border-2 border-green-100 rounded-2xl shadow-md hover:shadow-xl hover:border-gold transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-xl bg-linear-to-br from-green-400 to-green-600 text-white shadow-lg grid place-items-center flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <span className="text-[14px] text-ink">{facility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Registration */}
        <div className="bg-green-900 rounded-[20px] p-8 text-center text-white">
          <h2 className="font-montserrat font-bold text-[32px] mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-green-100 mb-6 max-w-[500px] mx-auto">
            Early bird registration ends June 30th. Don't miss this
            life-changing event!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <div className="text-center">
              <div className="font-fraunces text-[24px] font-semibold text-gold mb-1">
                {eventDetails.price}
              </div>
              <div className="text-[12px] text-green-200">Registration Fee</div>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 px-8 py-4 text-[16px] font-semibold rounded-[10px] transition-all duration-220 border border-transparent bg-gold text-green-900 hover:bg-gold-soft hover:-translate-y-0.5 cursor-pointer">
            Register Now
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
