import React from "react";
import { useModalStore } from "../stores/modalStore";

const JoinModal: React.FC = () => {
  const {
    isJoinModalOpen,
    closeJoinModal,
    joinFormData,
    updateJoinFormData,
    submitJoinForm,
  } = useModalStore();

  if (!isJoinModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitJoinForm();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-[24px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] max-w-md w-full max-h-[95vh] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-100 to-gold/20 rounded-full -translate-y-12 translate-x-12 opacity-50" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-gold/20 to-green-100 rounded-full translate-y-10 -translate-x-10 opacity-50" />

        <div className="relative p-4">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-montserrat font-extrabold text-[24px] text-ink mb-2">
                Join the Movement
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-green-600 to-gold rounded-full" />
            </div>
            <button
              onClick={closeJoinModal}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-105"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-600"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className="text-ink-60 mb-3 leading-relaxed">
            Join thousands of teens discovering who God made them to be. Fill
            out the form below and we'll get you started.
          </p>

          <form onSubmit={handleSubmit} className="space-y-2.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5.5">
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-1.5">
                  First Name
                </label>
                <input
                  type="text"
                  value={joinFormData.firstName}
                  onChange={(e) =>
                    updateJoinFormData({ firstName: e.target.value })
                  }
                  className="w-full px-2.5 py-2 border border-gray-200 rounded-lg bg-gray-50 text-ink placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 text-sm"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-1.5">
                  Last Name
                </label>
                <input
                  type="text"
                  value={joinFormData.lastName}
                  onChange={(e) =>
                    updateJoinFormData({ lastName: e.target.value })
                  }
                  className="w-full px-2.5 py-2 border border-gray-200 rounded-lg bg-gray-50 text-ink placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 text-sm"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={joinFormData.email}
                onChange={(e) => updateJoinFormData({ email: e.target.value })}
                className="w-full px-2.5 py-2 border border-gray-200 rounded-lg bg-gray-50 text-ink placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 text-sm"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                value={joinFormData.phone}
                onChange={(e) => updateJoinFormData({ phone: e.target.value })}
                className="w-full px-2.5 py-2 border border-gray-200 rounded-lg bg-gray-50 text-ink placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 text-sm"
                placeholder="+234 xxx xxx xxxx"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-1.5">
                  Age
                </label>
                <input
                  type="number"
                  value={joinFormData.age}
                  onChange={(e) => updateJoinFormData({ age: e.target.value })}
                  className="w-full px-2.5 py-2 border border-gray-200 rounded-lg bg-gray-50 text-ink placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 text-sm"
                  placeholder="18"
                  min="13"
                  max="30"
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-1.5">
                  Location
                </label>
                <input
                  type="text"
                  value={joinFormData.location}
                  onChange={(e) =>
                    updateJoinFormData({ location: e.target.value })
                  }
                  className="w-full px-2.5 py-2 border border-gray-200 rounded-lg bg-gray-50 text-ink placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 text-sm"
                  placeholder="City, Country"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 text-[15px] font-semibold rounded-xl transition-all duration-300 border border-transparent bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer mt-4"
            >
              Join the Movement
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </form>

          <p className="text-[12px] text-ink-40 text-center mt-3 mb-2">
            By joining, you agree to receive updates from GTIM. We respect your
            privacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinModal;
