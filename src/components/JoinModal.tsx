import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useModalStore } from "../stores/modalStore";
import { useMemberMutation } from "../hooks/useMemberMutation";
import { memberSchema, type MemberFormData } from "../lib/validations";
import { getErrorMessage } from "../lib/error";

const JoinModal: React.FC = () => {
  const { isJoinModalOpen, closeJoinModal } = useModalStore();
  const mutation = useMemberMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MemberFormData>({
    resolver: zodResolver(memberSchema),
  });

  const onSubmit = (data: MemberFormData) => {
    console.log(data);

    mutation.mutate(data, {
      onSuccess: () => {
        toast.success("Thank you for joining! We'll be in touch soon.");
        reset();
        closeJoinModal();
      },
      onError: (error) => {
        toast.error(getErrorMessage(error));
      },
    });
  };

  if (!isJoinModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-[24px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] max-w-md w-full max-h-[95vh] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-100 to-gold/20 rounded-full -translate-y-12 translate-x-12 opacity-50" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-gold/20 to-green-100 rounded-full translate-y-10 -translate-x-10 opacity-50" />

        <div className="relative p-6">
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

          <p className="text-ink-60 mb-6 leading-relaxed text-sm">
            Join thousands of teens discovering who God made them to be. Fill
            out the form below and we'll get you started.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-1">
                  First Name
                </label>
                <input
                  {...register("first_name")}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-ink placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  placeholder="Enter your first name"
                />
                {errors.first_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.first_name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-1">
                  Last Name
                </label>
                <input
                  {...register("last_name")}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-ink placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  placeholder="Enter your last name"
                />
                {errors.last_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-1">
                Email Address
              </label>
              <input
                {...register("email")}
                type="email"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-ink placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-1">
                Phone Number
              </label>
              <input
                {...register("phone_number")}
                type="tel"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-ink placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                placeholder="+234 xxx xxx xxxx"
              />
              {errors.phone_number && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone_number.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-1">
                  Age
                </label>
                <input
                  {...register("age")}
                  type="number"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-ink placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  placeholder="18"
                  min="13"
                  max="30"
                />
                {errors.age && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.age.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-60 mb-1">
                  Location
                </label>
                <input
                  {...register("location")}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-ink placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  placeholder="City, Country"
                />
                {errors.location && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.location.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={mutation.isPending}
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 text-[15px] font-semibold rounded-xl transition-all duration-300 border border-transparent bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {mutation.isPending ? "Submitting..." : "Join the Movement"}
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

          <p className="text-[12px] text-ink-40 text-center mt-4">
            By joining, you agree to receive updates from GTIM. We respect your
            privacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinModal;
