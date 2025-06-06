import { create } from 'zustand';

export const useStore = create((set) => ({
    tab: '/',
    setTab: (newTab) => set(() => ({ tab: newTab })),
    showManualSlider: false,
    toggleManualSlider: () =>
        set((state) => ({ showManualSlider: !state.showManualSlider })),
}));
