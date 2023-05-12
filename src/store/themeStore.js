import { create } from "zustand";
import { persist } from "zustand/middleware";

const useThemeStore = create((set) => ({
  theme: "dark",

  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "dark" ? "" : "dark" })),
}));

// const useThemeStore = create(
//   persist(themeStore, {
//     name: "theme",
//   })
// );

export default useThemeStore;
