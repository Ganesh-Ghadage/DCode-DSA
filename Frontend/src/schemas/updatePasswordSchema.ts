import { z } from 'zod'
import { passwordSchema } from './passwordSchema'

export const updatePasswordSchema = z.object({
  email: z.string().email("Enter a valid email"),
  oldPassword: passwordSchema,
  newPassword: passwordSchema
})
  .refine((data) => data.oldPassword != data.newPassword, {
    message: "old password and new password should not be same",
    path: ['newPassword'],
  });