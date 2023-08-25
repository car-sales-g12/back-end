import { z } from "zod";

const emailSchema = z.object({
  email: z.string().email().max(250),
});

const passwordSchema = z.object({
  password: z.string().max(250).min(5),
});

export { emailSchema, passwordSchema}