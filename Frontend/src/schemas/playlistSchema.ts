import { z } from 'zod'

export const playlistSchema = z.object({
  name: z.string().min(3, "name must be at least 3 characters"),
  description: z.string().optional(),
})