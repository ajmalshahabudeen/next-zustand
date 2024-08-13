## Getting Started

1. Use [bun](https://bun.sh/) runtime. --Recommended
2. open the repository directory and run `bun install`.
3. run `bun dev` to start the development server.
4. Read package.json for more details.

## Stack Used

- [zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [next](https://nextjs.org/)
- [chakra-ui](https://v2.chakra-ui.com/)

---

- The recommended way to name a store is start with 'use' and end with 'Store'. eg: useUserStore
- To create a Store use `create()` from `zustand`
- Pass the initial value and some other function in `create()`.
```
 create((set) => ({
   bears: 0,
   increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
   removeAllBears: () => set({ bears: 0 }),
 }));
```
--------

- To persist the store, use `persist()` from `zustand/middleware`
- Pass two parameters in `persist()` function. one is the normal set() function from `zustand`, and the other is the name of the storage and type of storage.
```
 persist((set) => ({
   bears: 0,
   increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
   removeAllBears: () => set({ bears: 0 }),
 }),
   {
     name: "bears-store",
     storage: createJSONStorage(() => localStorage),
   }
 );
 ```
 - Look in `hooks/userStore.ts` for more details.