import { z } from 'zod'
import { passwordSchema } from './passwordSchema'

export const signupSchema = z.object({
  email: z.string().email("Enter a valid email"),
  name: z.string().min(3, "Name should be at least 3 character"),
  password: passwordSchema,
  confirmPassword: passwordSchema
})
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password do not match",
    path: ['confirmPassword'],
  });