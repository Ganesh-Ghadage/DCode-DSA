import { create } from "zustand";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

import { axiosInstance } from "../lib/axios";
import type { Submission } from "../types";

interface ExecutionState {
  submission: Submission | null
  isExecuting: boolean
  isRunning: boolean
  errorMessage: string | null

  executeCode: (source_code: string, language_id: number, stdin: string[], expected_outputs: string[], problemId: string) => void
  runCode: (source_code: string, language_id: number, stdin: string[], expected_outputs: string[], problemId: string) => void
  resetData: () => void
}

export const useExecutionStore = create<ExecutionState>()((set) => ({
  submission: null,
  isExecuting: false,
  isRunning: false,
  errorMessage: null,

  executeCode: async (source_code, language_id, stdin, expected_outputs, problemId) => {
    try {
      set({ isExecuting: true });
      set({ submission: null })
      set({ errorMessage: null })

      const res = await axiosInstance.post("/execute-code", { source_code, language_id, stdin, expected_outputs, problemId });

      set({ submission: res.data.data });

      toast.success(res.data.message);
    } catch (error) {
      set({
        errorMessage: error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      })
      set({ submission: null })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    }
    finally {
      set({ isExecuting: false });
    }
  },

  runCode: async (source_code, language_id, stdin, expected_outputs, problemId) => {
    try {
      set({ isRunning: true });
      set({ submission: null })
      set({ errorMessage: null })

      const res = await axiosInstance.post("/execute-code/run", { source_code, language_id, stdin, expected_outputs, problemId });

      set({ submission: res.data.data });

      toast.success(res.data.message);
    } catch (error) {
      set({
        errorMessage: error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      })
      set({ submission: null })
      toast.error(
        error instanceof AxiosError && error?.response?.data.message
          ? error.response.data.message
          : "Something went wrong"
      );
    }
    finally {
      set({ isRunning: false });
    }
  },

  resetData: () => {
    set({ isExecuting: false });
    set({ isRunning: false });
    set({ submission: null })
    set({ errorMessage: null })
  }

}))