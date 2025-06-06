import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import type { User } from "../types";
import { AxiosError } from "axios";
import type { CredentialResponse } from "@react-oauth/google";

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
  authUser: User | null,
  isLoggingIn: boolean,
  isSigningUp: boolean,
  isCheckingAuth: boolean,
  errorMessage: string | null,

  checkAuth: () => void,
  signup: (data: signupData) => void,
  login: (data: loginData) => void
  logout: () => void
  googleLogin: (credentialResponse: CredentialResponse) => void
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
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
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
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
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
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    }
  },

  googleLogin: async (credentialResponse: CredentialResponse) => {
    set({ isLoggingIn: true })
    try {
      const res = await axiosInstance.post(
        "/auth/google",
        {
          token: credentialResponse.credential,
        },
        {
          withCredentials: true,
        }
      );
      set({ authUser: res.data.data })
      toast.success(res.data?.message || "login successfull")
    } catch (error) {
      set({ errorMessage: (error instanceof Error && error.message) ? error.message : "Something went wrong" })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    } finally {
      set({ isLoggingIn: false })
    }
  }

}))