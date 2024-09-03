import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCurrentUser = create(
  persist(
    (set) => ({
      currentUser: {},
      setCurrentUser: (newCurrentUser) => {
        set({ currentUser: newCurrentUser });
      },
      clearCurrentUser: () => {
        set({ currentUser: {} });
        localStorage.clear();
      },
    }),
    {
      name: "currentUserInfo",
    }
  )
);

export default useCurrentUser;
