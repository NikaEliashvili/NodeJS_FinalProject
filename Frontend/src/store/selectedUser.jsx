import { create } from "zustand";

const useCurrentSelectedUser = create((set) => ({
  currentSelectedUser: {},
  setCurrentSelectedUser: (newCurrentSelectedUser) => {
    set({ currentSelectedUser: newCurrentSelectedUser });
  },
  clearCurrentSelectedUser: () => {
    set({ currentSelectedUserurrentSelectedUser: {} });
  },
}));

export default useCurrentSelectedUser;
