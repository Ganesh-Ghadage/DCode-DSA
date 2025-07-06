import { z } from 'zod'

const MAX_FILE_SIZE_MB = 2

export const profileUpdateSchema = z.object({
  name: z.string().min(3, "Name should be at least 3 character"),
  image: z
    .custom<FileList>()
    .refine((files) => !files || files.length === 0 || files[0]?.type.startsWith("image/"), {
      message: "Only image files are allowed",
    })
    .refine(
      (files) => !files || files.length === 0 || files[0]?.size <= MAX_FILE_SIZE_MB * 1024 * 1024,
      {
        message: `Max file size is ${MAX_FILE_SIZE_MB}MB`,
      }
    )
    .optional(),
})