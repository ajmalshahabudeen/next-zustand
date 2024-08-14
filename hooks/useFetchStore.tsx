import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useFetchStore = create(
  persist(
    (set) => ({
      isLoading: false,
      userData: {},
      setIsLoading: (isLoading: boolean) => set({ isLoading }),
      fetch: async (url: string) => {
        set({ isLoading: true });
        const response = await fetch(url);
        const data = await response.json();
        set({ userData: data, isLoading: false });
      },
      removeData: () => set({ userData: {} }),
    }),
    {
      name: "fetch-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
