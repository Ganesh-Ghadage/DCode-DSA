import { create } from 'zustand'
import toast from 'react-hot-toast'
import { AxiosError } from 'axios'
import type { z } from 'zod'

import { axiosInstance } from '../lib/axios'
import type { Sheet } from '../types'
import { sheetSchema } from '../schemas/sheetsSchema'

interface SheetState {
  allSheets: Sheet[]
  sheet: Sheet | null
  isLoading: boolean
  errorMessage: string | null

  getSheets: () => void
  getSheetById: (id: string) => void
  createSheet: (data: z.infer<typeof sheetSchema>) => void
  updateSheet: (id: string, data: z.infer<typeof sheetSchema>) => void
  addProblemInSheet: (id: string, problemIds: string[]) => void
  removeProblemFromSheet: (id: string, problemIds: string[]) => void
  deleteSheet: (id: string) => void
}

export const useSheetStore = create<SheetState>()((set, get) => ({
  allSheets: [],
  sheet: null,
  isLoading: false,
  errorMessage: null,

  getSheets: async () => {
    try {
      set({ isLoading: true })
      const res = await axiosInstance.get("/sheet")
      set({ allSheets: res.data.data })
      toast.success(res.data.message)
    } catch (error) {
      set({ errorMessage: (error instanceof Error && error.message) ? error.message : "Something went wrong" })
      set({ allSheets: [] })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    } finally {
      set({ isLoading: false })
    }
  },

  getSheetById: async (id: string) => {
    try {
      set({ isLoading: true })
      const res = await axiosInstance.get(`/sheet/${id}`)
      set({ sheet: res.data.data })
      toast.success(res.data.message)
    } catch (error) {
      set({ errorMessage: (error instanceof Error && error.message) ? error.message : "Something went wrong" })
      set({ sheet: null })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    } finally {
      set({ isLoading: false })
    }
  },

  createSheet: async (data: z.infer<typeof sheetSchema>) => {
    try {
      set({ isLoading: true })
      const res = await axiosInstance.post(`/sheet/create-sheet`, data)
      toast.success(res.data.message || "Sheet created successfully")
      set((state) => ({
        allSheets: [...state.allSheets, res.data.data]
      }))
    } catch (error) {
      set({ errorMessage: (error instanceof Error && error.message) ? error.message : "Something went wrong" })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    } finally {
      set({ isLoading: false })
    }
  },

  updateSheet: async (id: string, data: z.infer<typeof sheetSchema>) => {
    try {
      set({ isLoading: true })
      const res = await axiosInstance.patch(`/sheet/${id}/update`, data)
      toast.success(res.data.message)
    } catch (error) {
      set({ errorMessage: (error instanceof Error && error.message) ? error.message : "Something went wrong" })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    } finally {
      set({ isLoading: false })
    }
  },

  addProblemInSheet: async (id: string, problemIds: string[]) => {
    try {
      set({ isLoading: true })
      const res = await axiosInstance.post(`/sheet/${id}/add-problem`, { problemIds })

      if (get().sheet?.id === id) {
        await get().getSheetById(id)
      }

      toast.success(res.data.message)
    } catch (error) {
      set({ errorMessage: (error instanceof Error && error.message) ? error.message : "Something went wrong" })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    } finally {
      set({ isLoading: false })
    }
  },

  removeProblemFromSheet: async (id: string, problemIds: string[]) => {
    try {
      set({ isLoading: true })
      const res = await axiosInstance.delete(`/sheet/${id}/remove-problem`, { data: {problemIds} })

      if (get().sheet?.id === id) {
        await get().getSheetById(id)
      }

      toast.success(res.data.message)
    } catch (error) {
      set({ errorMessage: (error instanceof Error && error.message) ? error.message : "Something went wrong" })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    } finally {
      set({ isLoading: false })
    }
  },

  deleteSheet: async (id: string) => {
    try {
      set({ isLoading: true })
      const res = await axiosInstance.delete(`/sheet/${id}`)
      toast.success(res.data.message)
    } catch (error) {
      set({ errorMessage: (error instanceof Error && error.message) ? error.message : "Something went wrong" })
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