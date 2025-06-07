import { create } from 'zustand'
import { toast } from 'react-hot-toast'

import { axiosInstance } from '../lib/axios'
import { type Problem } from '../types/Problem'
import { AxiosError } from 'axios'
import type { z } from 'zod'
import type { problemSchema } from '@/schemas/problemSchema'

interface ProblemState {
  problems: Problem[]
  problem: Problem | null
  solvedProblems: Problem[]
  isProblemsLoading: boolean
  isProblemLoading: boolean
  isProblemUpdating: boolean
  isProblemDeleting: boolean
  errorMessage: string | null

  getAllProblems: () => void
  getProblemById: (id: string) => void
  updateProblem: (id: string, data: z.infer<typeof problemSchema>) => void
  deleteProblem: (id: string) => void
  getSolvedProblems: () => void
}

export const useProblemStore = create<ProblemState>()((set, get) => ({
  problems: [],
  problem: null,
  solvedProblems: [],
  isProblemsLoading: false,
  isProblemLoading: false,
  isProblemUpdating: false,
  isProblemDeleting: false,
  errorMessage: null,

  getAllProblems: async () => {
    try {
      set({ isProblemsLoading: true })
      set({ errorMessage: null })
      const res = await axiosInstance.get("/problems/get-all-problems")
      set({ problems: res.data.data })
    } catch (error) {
      set({
        errorMessage: error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      })
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
      set({ errorMessage: null })
      const res = await axiosInstance.get(`/problems/get-problem/${id}`)
      set({ problem: res.data.data })
      toast.success(res.data?.message || "Problem fetched successfully")
    } catch (error) {
      set({
        errorMessage: error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      })
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

  updateProblem: async (id: string, data: z.infer<typeof problemSchema>) => {
    try {
      set({ isProblemUpdating: true })
      set({ errorMessage: null })
      const res = await axiosInstance.put(`/problems/update-problem/${id}`, data)

      if (get().problem?.id === id) {
        await get().getAllProblems()
      }

      toast.success(res.data?.message || "Problem updated successfully")
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
      set({ isProblemUpdating: false })
    }
  },

  deleteProblem: async (id: string) => {
    try {
      set({ isProblemDeleting: true })
      set({ errorMessage: null })
      const res = await axiosInstance.delete(`/problems/delete-problem/${id}`)

      if (get().problem?.id === id) {
        await get().getAllProblems()
      }
      toast.success(res.data?.message || "Problem deleted successfully")
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
      set({ isProblemDeleting: false })
    }
  },

  getSolvedProblems: async () => {
    try {
      set({ errorMessage: null })
      const res = await axiosInstance.get("/problems/get-solved-problems")
      set({ solvedProblems: res.data.data })
    } catch (error) {
      set({
        errorMessage: error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      })
      set({ solvedProblems: [] })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    }
  }
}))