import { create } from "zustand";
import api from "../lib/axios";

const useAuthStore = create((set) => ({
  authUser: null,
  ischeckingAuth: false,
  checkAuth: async () => {
    set({ ischeckingAuth: true });
    try {
      const response = await api("/auth/check");
      if (response.ok) {
        const data = await response.json();
        set({ authUser: data.user, ischeckingAuth: false });
      } else {
        set({ authUser: null, ischeckingAuth: false });
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
      set({ authUser: null, ischeckingAuth: false });
    }
  }}));

  export default useAuthStore;
