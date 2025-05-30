import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import type { DashboardData } from "@/types/dashboard";

interface DashboardState {
  dashboardData: DashboardData | null
  isLoading: boolean
  errorMessage: string | null

  fectchData: () => void
}

export const useDashboardStore = create<DashboardState>()((set) => ({
  dashboardData: null,
  isLoading: false,
  errorMessage: null,

  fectchData: async () => {
    try {
      set({ isLoading: true })
      const res = await axiosInstance.get("/dashboard")
      set({ dashboardData: res.data.data })
      toast.success(res.data.message)
    } catch (error) {
      set({ errorMessage: (error instanceof Error && error.message) ? error.message : "Something went wrong" })
      set({ dashboardData: null })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    } finally {
      set({ isLoading: false })
    }
  }
}))