import { z } from 'zod'

export const sheetSchema = z.object({
  name: z.string().min(3, "name must be at least 3 characters"),
  company: z.string(),
  description: z.string().optional(),
})