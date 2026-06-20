import React from "react";
import { HandHeart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { useModalStore } from "../stores/modalStore";

const Involved: React.FC = () => {
  const openJoinModal = useModalStore((s) => s.openJoinModal);

  return (
    <section className="bg-green-900 py-[80px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-7 text-center">
        <ScrollReveal direction="up">
          <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-gold mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-gold">
            Get Involved
          </span>
          <h2 className="font-montserrat font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.025em] text-white mb-6">
            Ready to{" "}
            <em className="font-fraunces italic font-medium text-gold-soft">step in?</em>
          </h2>
          <p className="text-green-100 max-w-xl mx-auto mb-8 leading-relaxed">
            Become a member, volunteer, partner financially, or plant a chapter — there's a place for you in this movement.
          </p>

          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
              <HandHeart className="w-8 h-8 text-gold" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openJoinModal}
              className="inline-flex items-center gap-2 px-8 py-4 text-[15px] font-semibold rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              Join Now
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/membership"
              className="inline-flex items-center gap-2 px-8 py-4 text-[15px] font-semibold rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Involved;
