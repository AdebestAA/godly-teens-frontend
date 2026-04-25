import React from "react";

const Donate: React.FC = () => {
  return (
    <section className="bg-white relative overflow-hidden py-[110px]">
      <div className="max-w-[1280px] mx-auto px-7 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-gold">
            Partner with us
          </span>
          <h2 className="font-montserrat font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.025em] mb-5">
            Your giving{" "}
            <em className="font-fraunces italic font-medium text-gold-dark">
              changes a life.
            </em>
          </h2>
          <p className="text-ink-60 mb-7 max-w-[480px]">
            Every teen reached, every sermon recorded, every chapter planted —
            all of it is made possible by faithful partners like you. Give once
            or monthly, securely and transparently.
          </p>

          <div className="flex flex-col gap-3.5 mb-8">
            <div className="flex items-center gap-4 p-4 pb-5 bg-green-50 border-l-3 border-gold rounded-r-[12px]">
              <strong className="font-fraunces font-semibold text-[22px] text-green-800 min-w-[70px]">
                ₦5,000
              </strong>
              <span className="text-[14px] text-ink">
                Sponsors a teen for one month of discipleship &amp; materials.
              </span>
            </div>
            <div className="flex items-center gap-4 p-4 pb-5 bg-green-50 border-l-3 border-gold rounded-r-[12px]">
              <strong className="font-fraunces font-semibold text-[22px] text-green-800 min-w-[70px]">
                ₦25,000
              </strong>
              <span className="text-[14px] text-ink">
                Funds a regional outreach weekend for 50 young people.
              </span>
            </div>
            <div className="flex items-center gap-4 p-4 pb-5 bg-green-50 border-l-3 border-gold rounded-r-[12px]">
              <strong className="font-fraunces font-semibold text-[22px] text-green-800 min-w-[70px]">
                ₦100,000
              </strong>
              <span className="text-[14px] text-ink">
                Helps plant a new chapter in an under-reached city.
              </span>
            </div>
          </div>

          <p className="text-[13px] text-ink-40">
            🔒 Secure payments via Stripe, PayPal and Flutterwave.
            Tax-deductible where applicable. You'll receive an instant receipt.
          </p>
        </div>

        <aside className="bg-paper border border-line rounded-[20px] p-9 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)]">
          <h4 className="font-montserrat text-[18px] font-bold mb-5">
            Make a donation
          </h4>
          <div className="flex gap-2 bg-white p-1.5 border border-line rounded-[10px] mb-3.5">
            <button className="flex-1 p-2.5 text-[13px] font-semibold text-ink-60 rounded-md transition-all bg-green-800 text-white">
              One-time
            </button>
            <button className="flex-1 p-2.5 text-[13px] font-semibold text-ink-60 rounded-md transition-all">
              Monthly
            </button>
            <button className="flex-1 p-2.5 text-[13px] font-semibold text-ink-60 rounded-md transition-all">
              Annually
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2.5 mb-3.5">
            <button className="p-3.5 pb-2 text-center bg-white border-1.5 border-line rounded-[10px] font-bold text-[15px] text-ink transition-all hover:border-green-800">
              ₦2,500
            </button>
            <button className="p-3.5 pb-2 text-center bg-green-800 text-white border-1.5 border-green-800 rounded-[10px] font-bold text-[15px] transition-all">
              ₦10,000
            </button>
            <button className="p-3.5 pb-2 text-center bg-white border-1.5 border-line rounded-[10px] font-bold text-[15px] text-ink transition-all hover:border-green-800">
              ₦25,000
            </button>
            <button className="p-3.5 pb-2 text-center bg-white border-1.5 border-line rounded-[10px] font-bold text-[15px] text-ink transition-all hover:border-green-800">
              ₦50,000
            </button>
            <button className="p-3.5 pb-2 text-center bg-white border-1.5 border-line rounded-[10px] font-bold text-[15px] text-ink transition-all hover:border-green-800">
              ₦100,000
            </button>
            <button className="p-3.5 pb-2 text-center bg-white border-1.5 border-line rounded-[10px] font-bold text-[15px] text-ink transition-all hover:border-green-800">
              Other
            </button>
          </div>
          <div className="flex items-center p-3.5 px-4 bg-white border-1.5 border-line rounded-[10px] mb-5">
            <span className="text-ink-40 mr-2 font-semibold">₦</span>
            <input
              type="text"
              placeholder="Enter custom amount"
              defaultValue="10,000"
              className="flex-1 border-none bg-transparent font-inherit font-semibold text-[15px] outline-none"
            />
          </div>
          <button className="inline-flex items-center gap-2 px-[22px] py-4 text-[15px] font-semibold rounded-[10px] transition-all duration-220 border border-transparent bg-green-800 text-white hover:bg-green-900 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgba(11,107,58,0.5)] cursor-pointer w-full justify-center">
            Donate Securely
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
          <div className="flex gap-2.5 mt-4 pt-5 border-t border-dashed border-line items-center">
            <span className="text-[11px] text-ink-40 tracking-[0.08em] uppercase">
              We accept
            </span>
            <div className="p-1.5 px-2.5 bg-white border border-line rounded-md text-[11px] font-bold text-ink-60">
              VISA
            </div>
            <div className="p-1.5 px-2.5 bg-white border border-line rounded-md text-[11px] font-bold text-ink-60">
              Master
            </div>
            <div className="p-1.5 px-2.5 bg-white border border-line rounded-md text-[11px] font-bold text-ink-60">
              PayPal
            </div>
            <div className="p-1.5 px-2.5 bg-white border border-line rounded-md text-[11px] font-bold text-ink-60">
              Flw
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Donate;
