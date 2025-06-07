import { create } from 'zustand'
import toast from 'react-hot-toast'
import { AxiosError } from 'axios'

import { axiosInstance } from '../lib/axios'
import type { Submission } from '../types'

interface SubmissionState {
  allSubmissions: Submission[]
  problemSubmissions: Submission[]
  submissionData: {
    totalCount: number
    acceptedCount: number
  }
  isALLSubmissionLodading: boolean
  isProblemSubmissionLodading: boolean
  isCountLoading: boolean
  errorMessage: string | null

  getAllSubmissions: () => void
  getSubmissionForProblem: (problemId: string) => void
  getSubmissionCountForProblem: (problemId: string) => void
}

export const useSubmissionStore = create<SubmissionState>()((set) => ({
  allSubmissions: [],
  problemSubmissions: [],
  submissionData: {
    totalCount: 0,
    acceptedCount: 0
  },
  isALLSubmissionLodading: false,
  isProblemSubmissionLodading: false,
  isCountLoading: false,
  errorMessage: null,

  getAllSubmissions: async () => {
    try {
      set({ isALLSubmissionLodading: true })
      set({ errorMessage: null })
      const res = await axiosInstance.get("/submissions/get-all-submissions")
      set({ allSubmissions: res.data.data })
      toast.success(res.data.message)
    } catch (error) {
      set({
        errorMessage: error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      })
      set({ allSubmissions: [] })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    } finally {
      set({ isALLSubmissionLodading: false })
    }
  },

  getSubmissionForProblem: async (problemId) => {
    try {
      set({ isProblemSubmissionLodading: true })
      set({ errorMessage: null })
      const res = await axiosInstance.get(`/submissions/get-submission/${problemId}`)
      set({ problemSubmissions: res.data.data })
    } catch (error) {
      set({
        errorMessage: error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      })
      set({ problemSubmissions: [] })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    } finally {
      set({ isProblemSubmissionLodading: false })
    }
  },

  getSubmissionCountForProblem: async (problemId) => {
    try {
      set({ isCountLoading: true })
      set({ errorMessage: null })
      const res = await axiosInstance.get(`/submissions/get-submissions-count/${problemId}`)
      set({ submissionData: res.data.data })
    } catch (error) {
      set({
        errorMessage: error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      })
    } finally {
      set({ isCountLoading: false })
    }
  }

}))