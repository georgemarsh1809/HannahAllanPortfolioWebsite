import { create } from "zustand";

export const useStore = create((set) => ({
    tab: "/",
    setTab: (newTab) => set((state) => ({ tab: newTab })),

}))