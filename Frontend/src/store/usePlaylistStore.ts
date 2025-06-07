import { create } from 'zustand'
import toast from 'react-hot-toast'
import { AxiosError } from 'axios'
import type { z } from 'zod'

import { axiosInstance } from '../lib/axios'
import type { Playlist } from '../types'
import { playlistSchema } from '../schemas/playlistSchema'

interface PlaylistState {
  allPlaylists: Playlist[]
  playlist: Playlist | null
  isLoading: boolean
  errorMessage: string | null

  getPlaylists: () => void
  getPlaylistById: (id: string) => void
  createPlaylist: (data: z.infer<typeof playlistSchema>) => void
  updatePlaylist: (id: string, data: z.infer<typeof playlistSchema>) => void
  addProblemInPlaylist: (id: string, problemIds: string[]) => void
  removeProblemFromPlaylist: (id: string, problemIds: []) => void
  deletePlaylist: (id: string) => void
}

export const usePlaylistStore = create<PlaylistState>()((set, get) => ({
  allPlaylists: [],
  playlist: null,
  isLoading: false,
  errorMessage: null,

  getPlaylists: async () => {
    try {
      set({ isLoading: true })
      set({ errorMessage: null })
      const res = await axiosInstance.get("/playlist")
      set({ allPlaylists: res.data.data })
      toast.success(res.data.message)
    } catch (error) {
      set({
        errorMessage: error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      })
      set({ allPlaylists: [] })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    } finally {
      set({ isLoading: false })
    }
  },

  getPlaylistById: async (id: string) => {
    try {
      set({ isLoading: true })
      set({ errorMessage: null })
      const res = await axiosInstance.get(`/playlist/${id}`)
      set({ playlist: res.data.data })
      toast.success(res.data.message)
    } catch (error) {
      set({
        errorMessage: error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      })
      set({ playlist: null })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    } finally {
      set({ isLoading: false })
    }
  },

  createPlaylist: async (data: z.infer<typeof playlistSchema>) => {
    try {
      set({ isLoading: true })
      set({ errorMessage: null })
      const res = await axiosInstance.post(`/playlist/create-playlist`, data)
      toast.success(res.data.message || "Playlist created successfully")
      set((state) => ({
        allPlaylists: [...state.allPlaylists, res.data.data]
      }))
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
      set({ isLoading: false })
    }
  },

  updatePlaylist: async (id: string, data: z.infer<typeof playlistSchema>) => {
    try {
      set({ isLoading: true })
      set({ errorMessage: null })
      const res = await axiosInstance.patch(`/playlist/${id}/update`, data)
      toast.success(res.data.message)
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
      set({ isLoading: false })
    }
  },

  addProblemInPlaylist: async (id: string, problemIds: string[]) => {
    try {
      set({ isLoading: true })
      set({ errorMessage: null })
      const res = await axiosInstance.post(`/playlist/${id}/add-problems`, { problemIds })

      if (get().playlist?.id === id) {
        await get().getPlaylistById(id)
      }

      toast.success(res.data.message)
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
      set({ isLoading: false })
    }
  },

  removeProblemFromPlaylist: async (id: string, problemIds: []) => {
    try {
      set({ isLoading: true })
      set({ errorMessage: null })
      const res = await axiosInstance.delete(`/playlist/${id}/remove-problems`, { data: problemIds })

      if (get().playlist?.id === id) {
        await get().getPlaylistById(id)
      }

      toast.success(res.data.message)
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
      set({ isLoading: false })
    }
  },

  deletePlaylist: async (id: string) => {
    try {
      set({ isLoading: true })
      set({ errorMessage: null })
      const res = await axiosInstance.delete(`/playlist/${id}`)
      toast.success(res.data.message)
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
      set({ isLoading: false })
    }
  }
}))