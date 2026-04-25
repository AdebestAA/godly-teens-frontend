import React from "react";

const Nav: React.FC = () => {
  return (
    <nav className="sticky top-0 z-[100] bg-paper/92 backdrop-blur-[14px] border-b border-line">
      <div className="max-w-[1280px] mx-auto px-7 flex items-center justify-between py-[18px]">
        <a
          href="#"
          className="flex items-center gap-3 font-montserrat font-extrabold text-[17px] tracking-[-0.01em]"
        >
          <div className="w-10 h-10 bg-green-800 rounded-[10px] grid place-items-center text-gold font-fraunces font-bold text-[20px] relative">
            G
            <div className="absolute inset-1 border border-gold/35 rounded-[7px]"></div>
          </div>
          <div className="leading-[1.1]">
            Godly Teens
            <small className="block font-medium text-[10px] tracking-[0.14em] uppercase text-green-800 mt-1">
              International Ministry
            </small>
          </div>
        </a>
        <div className="flex gap-8">
          <a
            href="#home"
            className="text-[14px] font-medium text-ink-60 transition-colors duration-200 hover:text-green-800"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-[14px] font-medium text-ink-60 transition-colors duration-200 hover:text-green-800"
          >
            About
          </a>
          <a
            href="#programs"
            className="text-[14px] font-medium text-ink-60 transition-colors duration-200 hover:text-green-800"
          >
            Programs
          </a>
          <a
            href="#events"
            className="text-[14px] font-medium text-ink-60 transition-colors duration-200 hover:text-green-800"
          >
            Events
          </a>
          <a
            href="#media"
            className="text-[14px] font-medium text-ink-60 transition-colors duration-200 hover:text-green-800"
          >
            Media
          </a>
          <a
            href="#contact"
            className="text-[14px] font-medium text-ink-60 transition-colors duration-200 hover:text-green-800"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center gap-2.5">
          <button className="inline-flex items-center gap-2 px-[22px] py-3 text-[14px] font-semibold rounded-[10px] transition-all duration-220 border border-green-800/25 bg-transparent text-green-800 hover:bg-green-100 hover:border-green-800 cursor-pointer">
            Sign In
          </button>
          <button className="inline-flex items-center gap-2 px-[22px] py-3 text-[14px] font-semibold rounded-[10px] transition-all duration-220 border border-transparent bg-green-800 text-white hover:bg-green-900 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgba(11,107,58,0.5)] cursor-pointer">
            Join Now
          </button>
          <button
            className="hidden w-10 h-10 border border-line rounded-lg p-2.5"
            aria-label="Menu"
          >
            <span className="block h-0.5 bg-ink mb-1"></span>
            <span className="block h-0.5 bg-ink mb-1"></span>
            <span className="block h-0.5 bg-ink"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
