import { create } from 'zustand'
import { toast } from 'react-hot-toast'

import { axiosInstance } from '../lib/axios'
import { type Problem } from '../types/Problem'
import { AxiosError } from 'axios'

interface ProblemState {
  problems: Problem[]
  problem: Problem | null
  solvedProblems: Problem[]
  isProblemsLoading: boolean
  isProblemLoading: boolean
  isProblemUpdating: boolean
  isProblemDeleting: boolean
  errorMessage: string

  getAllProblems: () => void
  getProblemById: (id: string) => void
  updateProblem: (id: string, data: Problem) => void
  deleteProblem: (id: string) => void
  getSolvedProblems: () => void
}

export const useProblemStore = create<ProblemState>()((set) => ({
  problems: [],
  problem: null,
  solvedProblems: [],
  isProblemsLoading: false,
  isProblemLoading: false,
  isProblemUpdating: false,
  isProblemDeleting: false,
  errorMessage: '',

  getAllProblems: async () => {
    try {
      set({ isProblemsLoading: true })

      const res = await axiosInstance.get("/problems/get-all-problems")
      set({ problems: res.data.data })
    } catch (error) {
      set({ errorMessage: (error instanceof Error && error.message) ? error.message : "Something went wrong" })
      set({ problems: [] })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    } finally {
      set({ isProblemsLoading: false })
    }
  },

  getProblemById: async (id: string) => {
    try {
      set({ isProblemLoading: true })

      const res = await axiosInstance.get(`/problems/get-problem/${id}`)
      set({ problem: res.data.data })
      toast.success(res.data?.message || "Problem fetched successfully")
    } catch (error) {
      set({ errorMessage: (error instanceof Error && error.message) ? error.message : "Something went wrong" })
      set({ problem: null })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    } finally {
      set({ isProblemLoading: false })
    }
  },

  updateProblem: async (id: string, data: Problem) => {
    try {
      set({ isProblemUpdating: true })

      const res = await axiosInstance.put(`/problems/update-problem/${id}`, data)
      toast.success(res.data?.message || "Problem updated successfully")
    } catch (error) {
      set({ errorMessage: (error instanceof Error && error.message) ? error.message : "Something went wrong" })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    } finally {
      set({ isProblemUpdating: false })
    }
  },

  deleteProblem: async (id: string) => {
    try {
      set({ isProblemDeleting: true })

      const res = await axiosInstance.delete(`/problems/delete-problem/${id}`)
      toast.success(res.data?.message || "Problem deleted successfully")
    } catch (error) {
      set({ errorMessage: (error instanceof Error && error.message) ? error.message : "Something went wrong" })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    } finally {
      set({ isProblemDeleting: false })
    }
  },

  getSolvedProblems: async () => {
    try {
      const res = await axiosInstance.get("/problems/get-solved-problems")
      set({ solvedProblems: res.data.data })
    } catch (error) {
      set({ errorMessage: (error instanceof Error && error.message) ? error.message : "Something went wrong" })
      set({ solvedProblems: [] })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    }
  }
}))