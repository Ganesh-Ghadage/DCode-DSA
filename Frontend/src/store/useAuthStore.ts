import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

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
    const res = await axiosInstance.get("/profile")
    
    console.log(res)
  },

  signup: async (data) => {

  },

  login: async (data) => {

  },

  logout: async () => {

  }

}))

