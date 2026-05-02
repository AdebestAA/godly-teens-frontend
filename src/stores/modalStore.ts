import { create } from "zustand";

interface ModalState {
  isJoinModalOpen: boolean;
  openJoinModal: () => void;
  closeJoinModal: () => void;
  joinFormData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    age: string;
    location: string;
  };
  updateJoinFormData: (data: Partial<ModalState["joinFormData"]>) => void;
  submitJoinForm: () => void;
}

export const useModalStore = create<ModalState>((set, get) => ({
  isJoinModalOpen: false,
  openJoinModal: () => set({ isJoinModalOpen: true }),
  closeJoinModal: () => set({ isJoinModalOpen: false }),
  joinFormData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    location: "",
  },
  updateJoinFormData: (data) =>
    set((state) => ({
      joinFormData: { ...state.joinFormData, ...data },
    })),
  submitJoinForm: () => {
    const formData = get().joinFormData;
    console.log("Join form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you for joining! We will contact you soon.");
    get().closeJoinModal();
    // Reset form
    set({
      joinFormData: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        age: "",
        location: "",
      },
    });
  },
}));
