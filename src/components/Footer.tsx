import React from "react";
import ScrollReveal from "./ScrollReveal";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900">
      <div className="max-w-[1280px] mx-auto px-7">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 py-16 mb-8 border-b border-white/10">
            <div className="md:col-span-1">
              <a href="#" className="inline-flex items-center gap-3 mb-6 group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark text-ink font-bold text-[18px] font-fraunces">
                  G
                </div>
                <div>
                  <div className="text-[14px] font-bold text-white font-montserrat">
                    Godly Teens
                  </div>
                  <small className="text-[11px] text-gold-soft font-inter">
                    International Ministry
                  </small>
                </div>
              </a>
              <p className="text-[13px] text-green-100 leading-relaxed">
                Raising the next generation in faith, purpose and Kingdom impact —
                from Ibadan to the world.
              </p>
            </div>

            <div>
              <h5 className="font-fraunces font-bold text-[14px] text-white mb-4 uppercase tracking-[0.05em]">
                Explore
              </h5>
              <ul className="space-y-2">
                <li><a href="#about" className="text-[13px] text-green-100 hover:text-gold transition-colors">About us</a></li>
                <li><a href="#programs" className="text-[13px] text-green-100 hover:text-gold transition-colors">Programs</a></li>
                <li><a href="#events" className="text-[13px] text-green-100 hover:text-gold transition-colors">Events</a></li>
                <li><a href="#media" className="text-[13px] text-green-100 hover:text-gold transition-colors">Media library</a></li>
                <li><a href="#" className="text-[13px] text-green-100 hover:text-gold transition-colors">Testimonies</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-fraunces font-bold text-[14px] text-white mb-4 uppercase tracking-[0.05em]">
                Engage
              </h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-[13px] text-green-100 hover:text-gold transition-colors">Become a member</a></li>
                <li><a href="#" className="text-[13px] text-green-100 hover:text-gold transition-colors">Volunteer</a></li>
                <li><a href="#" className="text-[13px] text-green-100 hover:text-gold transition-colors">Partner</a></li>
                <li><a href="#" className="text-[13px] text-green-100 hover:text-gold transition-colors">Plant a chapter</a></li>
                <li><a href="#" className="text-[13px] text-green-100 hover:text-gold transition-colors">Prayer requests</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-fraunces font-bold text-[14px] text-white mb-4 uppercase tracking-[0.05em]">
                Help
              </h5>
              <ul className="space-y-2">
                <li><a href="#contact" className="text-[13px] text-green-100 hover:text-gold transition-colors">Contact</a></li>
                <li><a href="#" className="text-[13px] text-green-100 hover:text-gold transition-colors">FAQs</a></li>
                <li><a href="#" className="text-[13px] text-green-100 hover:text-gold transition-colors">Safeguarding</a></li>
                <li><a href="#" className="text-[13px] text-green-100 hover:text-gold transition-colors">Privacy policy</a></li>
                <li><a href="#" className="text-[13px] text-green-100 hover:text-gold transition-colors">Terms</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-fraunces font-bold text-[14px] text-white mb-4 uppercase tracking-[0.05em]">
                Newsletter
              </h5>
              <p className="text-[12px] text-green-100/70 mb-3 leading-relaxed">
                Devotionals and updates — monthly, no spam.
              </p>
              <form className="flex gap-1.5" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2.5 text-[12px] rounded-[6px] bg-white/10 border border-white/20 text-white placeholder-green-100/50 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 text-[12px] font-semibold text-ink bg-gold hover:bg-gold-dark rounded-[6px] transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6">
            <div className="text-[12px] text-green-100/70">
              © 2026 Godly Teens International Ministry · Registered in Nigeria
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-[12px] text-green-100/70 hover:text-gold transition-colors">Privacy</a>
              <a href="#" className="text-[12px] text-green-100/70 hover:text-gold transition-colors">Terms</a>
              <a href="#" className="text-[12px] text-green-100/70 hover:text-gold transition-colors">Cookies</a>
              <a href="#" className="text-[12px] text-green-100/70 hover:text-gold transition-colors">Admin</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
