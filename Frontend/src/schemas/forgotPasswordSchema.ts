import { z } from 'zod'
import { passwordSchema } from './passwordSchema'

export const forgotPasswordSchema = z.object({
  email: z.string().email("Enter a valid email"),
})

export const changePasswordSchema = z.object({
  email: z.string().email("Enter a valid email"),
  newPassword: passwordSchema
})