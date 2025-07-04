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
  isLoading: boolean,
  isVerfiyMailSending: boolean

  checkAuth: () => void,
  signup: (data: signupData) => void,
  login: (data: loginData) => void
  logout: () => void
  googleLogin: (credentialResponse: CredentialResponse) => void
  verifyMail: (token: string) => void
  resendVerifyMail: () => void
}

export const useAuthStore = create<AuthState>()((set) => ({
  authUser: null,
  isLoggingIn: false,
  isCheckingAuth: false,
  isSigningUp: false,
  errorMessage: null,
  isLoading: false,
  isVerfiyMailSending: false,

  checkAuth: async () => {
    set({ isCheckingAuth: true })
    set({ errorMessage: null })
    try {
      const res = await axiosInstance.get("/auth/profile")
      set({ authUser: res.data.data })
    } catch (error) {
      set({
        errorMessage: error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      })
      set({ authUser: null })
    } finally {
      set({ isCheckingAuth: false })
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true })
    set({ errorMessage: null })
    try {
      const res = await axiosInstance.post("/auth/register", data)
      set({ authUser: res.data.data })
      toast.success(res.data?.message || "Signup successfull")
    } catch (error) {
      set({
        errorMessage: error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      })
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
    set({ errorMessage: null })
    try {
      const res = await axiosInstance.post("/auth/login", data)
      set({ authUser: res.data.data })
      toast.success(res.data?.message || "login successfull")
    } catch (error) {
      set({
        errorMessage: error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      })
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
      set({ errorMessage: null })
      await axiosInstance.post("/auth/logout")
      set({ authUser: null })
      toast.success("logout successfull")
    } catch (error) {
      set({
        errorMessage: error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    }
  },

  googleLogin: async (credentialResponse: CredentialResponse) => {
    set({ isLoggingIn: true })
    set({ errorMessage: null })
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
      set({
        errorMessage: error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    } finally {
      set({ isLoggingIn: false })
    }
  },

  verifyMail: async (token: string) => {
    set({ isLoading: true, errorMessage: null })
    try {
      const res = await axiosInstance.get(`/auth/verify/${token}`)
      toast.success(res.data?.message || "Your email has been verified.")
      await useAuthStore.getState().checkAuth()
    } catch (error) {
      set({
        errorMessage: error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Verification failed"
      )
    } finally {
      set({ isLoading: false })
    }
  },

  resendVerifyMail: async () => {
    set({ isVerfiyMailSending: true })
    set({ errorMessage: null })
    try {
      const res = await axiosInstance.post("/auth/resend-verify-email")
      toast.success(res.data?.message || "Verify email sent successfull")
    } catch (error) {
      set({
        errorMessage: error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    } finally {
      set({ isVerfiyMailSending: false })
    }
  }

}))