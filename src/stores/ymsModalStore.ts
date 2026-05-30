import { create } from "zustand";

interface YmsModalState {
  isOpen: boolean;
  photos: string[];
  currentIndex: number;
  open: (photos: string[]) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
}

export const useYmsModalStore = create<YmsModalState>((set) => ({
  isOpen: false,
  photos: [],
  currentIndex: 0,
  open: (photos) => set({ isOpen: true, photos, currentIndex: 0 }),
  close: () => set({ isOpen: false, photos: [], currentIndex: 0 }),
  next: () =>
    set((s) => ({
      currentIndex: s.currentIndex < s.photos.length - 1 ? s.currentIndex + 1 : 0,
    })),
  prev: () =>
    set((s) => ({
      currentIndex: s.currentIndex > 0 ? s.currentIndex - 1 : s.photos.length - 1,
    })),
}));
