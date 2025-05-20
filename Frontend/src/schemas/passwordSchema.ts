import { z } from 'zod'

export const passwordSchema = z
  .string()
  .min(6, "Password must be at least 6 charters")
  .max(20, "Password can not exceed 20 charters")
  .refine((password) => /[A-Z]/.test(password), "Password must contain at least one uppercase charcter")
  .refine((password) => /[a-z]/.test(password), "Password must contain at least one lowercase charcter")
  .refine((password) => /[0-9]/.test(password), "Password must contain at least one number charcter")
  .refine((password) => /[!@#$%^&*]/.test(password), "Password must contain at least one special charcter");