import { z } from "zod"
// const generateSchema = !type || !role || !level || !techstack || !amount || !userid
 export const generateSchema = z.object({
  type: z.enum(["behavioral", "technical", "mixed"]),
  role: z.string().min(1, "Role is required"),
  level: z.enum(["junior", "mid", "senior"]),
  techstack: z.string().min(1, "Tech stack is required"),
  amount: z.number().int().positive("Amount must be a positive integer"),
  userid: z.string().min(1, "User ID is required")
})
export type GenerateSchema = z.infer<typeof generateSchema>