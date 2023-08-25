import { z } from "zod"
import { emailSchema, passwordSchema } from "../schemas/resetPassword";

export type emailUser = z.infer<typeof emailSchema>;
export type passwordUser = z.infer<typeof passwordSchema>;

