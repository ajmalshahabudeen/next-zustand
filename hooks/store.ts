import { create } from "zustand";

type State = {
  bears: number;
};

export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state: State) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: any) => set({ bears: newBears }),
}));