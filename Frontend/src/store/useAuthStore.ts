import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

interface signupData {
  name: string,
  email: string,
  password: string
}

interface loginData {
  email: string,
  password: string
}

interface AuthState {
  authUser: any,
  isLoggingIn: boolean,
  isSigningUp: boolean,
  isCheckingAuth: boolean,
  errorMessage: string | null,

  checkAuth: () => void,
  signup: (data: signupData) => void,
  login: (data: loginData) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()((set) => ({
  authUser: null,
  isLoggingIn: false,
  isCheckingAuth: false,
  isSigningUp: false,
  errorMessage: null,

  checkAuth: async () => {
    set({ isCheckingAuth: true })
    try {
      const res = await axiosInstance.get("/auth/profile")
      set({ authUser: res.data.data })
    } catch (error) {
      set({ errorMessage: (error instanceof Error && error.message) ? error.message : "Something went wrong" })
      set({ authUser: null })
      toast.error((error instanceof Error && error.message) ? error.message : "Something went wrong")
    } finally {
      set({ isCheckingAuth: false })
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true })
    try {
      const res = await axiosInstance.post("/auth/register", data)
      set({ authUser: res.data.data })
      toast.success(res.data?.message || "Signup successfull")
    } catch (error) {
      set({ errorMessage: (error instanceof Error && error.message) ? error.message : "Something went wrong" })
      toast.error((error instanceof Error && error.message) ? error.message : "Something went wrong")
      console.log(error)
    } finally {
      set({ isSigningUp: false })
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true })
    try {
      const res = await axiosInstance.post("/auth/login", data)
      set({ authUser: res.data.data })
      toast.success(res.data?.message || "login successfull")
    } catch (error) {
      set({ errorMessage: (error instanceof Error && error.message) ? error.message : "Something went wrong" })
      toast.error((error instanceof Error && error.message) ? error.message : "Something went wrong")
      console.log(error)
    } finally {
      set({ isLoggingIn: false })
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout")
      set({ authUser: null })
      toast.success("logout successfull")
    } catch (error) {
      set({ errorMessage: (error instanceof Error && error.message) ? error.message : "Something went wrong" })
      toast.error((error instanceof Error && error.message) ? error.message : "Something went wrong")
      console.log(error)
    }
  }

}))