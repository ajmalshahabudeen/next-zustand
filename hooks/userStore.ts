import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user: any) => set({ user: user }),
      removeUser: () => set({ user: null }),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

// The recommended way to name a store is start with 'use' and end with 'Store'. eg: useUserStore
// To create a Store use create() from `zustand`
// Pass the initial value and some other function in create().

// create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
// }));

//---------

// To persist the store, use persist() from `zustand/middleware`
// Pass two parameters in persist() function. one is the normal set() function from `zustand`, and the other is the name of the storage and type of storage.

// persist((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
// }),
//   {
//     name: "bears-store",
//     storage: createJSONStorage(() => localStorage),
//   }
// );