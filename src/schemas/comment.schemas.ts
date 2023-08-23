import { z } from "zod";
import { userSchema } from "./user.schemas";
import { announcementSchema } from "./announcement.schemas";

const commentSchema = z.object({
  id: z.number(),
  comment: z.string(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  user: userSchema,
  announcement: announcementSchema,
});
const commentReturnSchema = z.object({
  id: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  comment: z.string(),
  user: z.object({
    id: z.number(),
    name: z.string(),
    perfilImg: z.string().nullable(),
  }),
  announcement: z.object({
    id: z.number(),
  }),
});
const commentReturnArraySchema = commentReturnSchema
  .omit({ announcement: true })
  .array();

const commentCreateSchema = commentSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  announcement: true,
  user: true,
});
const commentUpdateSchema = commentCreateSchema.partial();

export {
  commentSchema,
  commentCreateSchema,
  commentReturnSchema,
  commentUpdateSchema,
  commentReturnArraySchema,
};
