import { z } from "zod";

const commentSchema = z.object({
  id: z.number(),
  comment: z.string(),
  createdAt: z.string().or(z.date()),
});

const commentCreateSchema = commentSchema.omit({ id: true, createdAt: true });

export { commentSchema, commentCreateSchema };
