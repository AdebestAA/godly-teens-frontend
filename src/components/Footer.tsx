import React from "react";
import { Link } from "react-router-dom";
import { useModalStore } from "../stores/modalStore";

const Footer: React.FC = () => {
  const openJoinModal = useModalStore((s) => s.openJoinModal);

  return (
    <footer className="bg-green-900">
      <div className="max-w-[1280px] mx-auto px-7">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 mb-8 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark text-ink font-bold text-[18px] font-fraunces">G</div>
              <div>
                <div className="text-[14px] font-bold text-white font-montserrat">Godly Teens</div>
                <small className="text-[11px] text-gold-soft">International Ministry</small>
              </div>
            </Link>
            <p className="text-[13px] text-green-100 leading-relaxed">
              Raising the next generation in faith, purpose and Kingdom impact, from Ibadan to the world.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h5 className="font-fraunces font-bold text-[14px] text-white mb-4 uppercase tracking-[0.05em]">Explore</h5>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-[13px] text-green-100 hover:text-gold transition-colors">About us</Link></li>
              <li><Link to="/programs" className="text-[13px] text-green-100 hover:text-gold transition-colors">Programs</Link></li>
              <li><Link to="/events" className="text-[13px] text-green-100 hover:text-gold transition-colors">Events</Link></li>
              <li><Link to="/media" className="text-[13px] text-green-100 hover:text-gold transition-colors">Media</Link></li>
            </ul>
          </div>

          {/* Engage */}
          <div>
            <h5 className="font-fraunces font-bold text-[14px] text-white mb-4 uppercase tracking-[0.05em]">Engage</h5>
            <ul className="space-y-2">
              <li><button onClick={openJoinModal} className="text-[13px] text-green-100 hover:text-gold transition-colors cursor-pointer">Become a member</button></li>
              <li><Link to="/membership" className="text-[13px] text-green-100 hover:text-gold transition-colors">Membership</Link></li>
              <li><Link to="/partnership" className="text-[13px] text-green-100 hover:text-gold transition-colors">Partner</Link></li>
              <li><Link to="/donation" className="text-[13px] text-green-100 hover:text-gold transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h5 className="font-fraunces font-bold text-[14px] text-white mb-4 uppercase tracking-[0.05em]">Help</h5>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-[13px] text-green-100 hover:text-gold transition-colors">Contact</Link></li>
              <li><Link to="/admin" className="text-[13px] text-green-100 hover:text-gold transition-colors">Admin</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6">
          <div className="text-[12px] text-green-100/70">
            © 2026 Godly Teens International Ministry · Registered in Nigeria
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
