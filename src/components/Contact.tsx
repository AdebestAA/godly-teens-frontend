import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import ScrollReveal from "./ScrollReveal";
import { useMessageMutation } from "../hooks/useMessageMutation";
import { messageSchema, type MessageFormData } from "../lib/validations";
import { getErrorMessage } from "../lib/error";

const Contact: React.FC = () => {
  const mutation = useMessageMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MessageFormData>({ resolver: zodResolver(messageSchema) });

  const onSubmit = (data: MessageFormData) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast.success("Message sent! We'll get back to you within 48 hours.");
        reset();
      },
      onError: (error) => toast.error(getErrorMessage(error)),
    });
  };

  return (
    <section className="bg-white py-[110px] overflow-hidden" id="contact">
      <div className="max-w-[1280px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <ScrollReveal direction="left">
          <div>
            <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-green-800 mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-gold">
              Get in touch
            </span>
            <h2 className="font-montserrat font-extrabold text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.025em] mb-5">
              We'd{" "}
              <em className="font-fraunces italic font-medium text-gold-dark">
                love
              </em>{" "}
              to hear from you.
            </h2>
            <p className="text-ink-60 mb-8 max-w-[480px] leading-relaxed">
              Questions about events, partnerships, or starting a chapter? Drop us
              a line or visit us in Ibadan — we answer every message.
            </p>

            <div className="flex flex-col gap-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-800">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-[13px] font-semibold text-ink mb-1">Visit us</strong>
                  <span className="text-[13px] text-ink-60 leading-relaxed">
                    Plot 4, Adeoyo State Hospital Road,<br />
                    Ring Road, Ibadan, Nigeria
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-800">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-[13px] font-semibold text-ink mb-1">Phone:</strong>
                  <span className="text-[13px] text-ink-60">+2348080407207, +2349067383924, +2348030672343</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-800">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-[13px] font-semibold text-ink mb-1">Email</strong>
                  <span className="text-[13px] text-ink-60">godlyteens40@gmail.com</span>
                </div>
              </div>
            </div>

            <strong className="font-montserrat text-[13px] font-bold tracking-[0.1em] uppercase text-ink block mb-3.5">
              Follow the movement
            </strong>
            <div className="flex gap-3">
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-line hover:border-green-800 hover:bg-green-50 transition-all text-ink-60 hover:text-green-800" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                </svg>
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-line hover:border-green-800 hover:bg-green-50 transition-all text-ink-60 hover:text-green-800" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-line hover:border-green-800 hover:bg-green-50 transition-all text-ink-60 hover:text-green-800" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-line hover:border-green-800 hover:bg-green-50 transition-all text-ink-60 hover:text-green-800" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <form onSubmit={handleSubmit(onSubmit)} className="border border-line rounded-[16px] p-8 bg-white border-2 border-green-100">
            <h3 className="font-fraunces font-bold text-[24px] mb-2 text-ink">Send a message</h3>
            <p className="text-[13px] text-ink-60 mb-8">We reply within 48 hours.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-2">First name</label>
                <input {...register("first_name")} type="text" placeholder="Grace" className="w-full px-4 py-3 border border-line rounded-[10px] bg-white text-ink placeholder-ink-40 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent border-2 border-green-100" />
                {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name.message}</p>}
              </div>
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-2">Last name</label>
                <input {...register("last_name")} type="text" placeholder="Okafor" className="w-full px-4 py-3 border border-line rounded-[10px] bg-white text-ink placeholder-ink-40 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent border-2 border-green-100" />
                {errors.last_name && <p className="text-red-500 text-xs mt-1">{errors.last_name.message}</p>}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-2">Email</label>
              <input {...register("email")} type="email" placeholder="grace@example.com" className="w-full px-4 py-3 border border-line rounded-[10px] bg-white text-ink placeholder-ink-40 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent border-2 border-green-100" />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-2">I'm interested in</label>
              <select {...register("interested_in")} className="w-full px-4 py-3 border border-line rounded-[10px] bg-white text-ink focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent border-2 border-green-100">
                <option value="">Select an option</option>
                <option value="Joining a chapter">Joining a chapter</option>
                <option value="Partnering financially">Partnering financially</option>
                <option value="Volunteering">Volunteering</option>
                <option value="Event registration">Event registration</option>
                <option value="Media / press enquiry">Media / press enquiry</option>
              </select>
              {errors.interested_in && <p className="text-red-500 text-xs mt-1">{errors.interested_in.message}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-2">Your message</label>
              <textarea {...register("message")} placeholder="Tell us what's on your heart..." className="w-full px-4 py-3 border border-line rounded-[10px] bg-white text-ink placeholder-ink-40 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent min-h-[120px] resize-none border-2 border-green-100"></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              disabled={mutation.isPending}
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-[15px] font-semibold text-white bg-green-600 hover:bg-green-600 rounded-[10px] transition-all duration-220 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgba(11,107,58,0.5)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {mutation.isPending ? "Sending..." : "Send message"}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
