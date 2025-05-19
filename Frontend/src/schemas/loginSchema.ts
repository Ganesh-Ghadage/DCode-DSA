import { z } from 'zod'
import { passwordSchema } from './passwordSchema'

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: passwordSchema,
})