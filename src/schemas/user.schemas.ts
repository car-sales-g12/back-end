import { z } from "zod";
import { addressSchema } from "./address.schemas";
import { announcementSchema } from "./announcement.schemas";
import { commentSchema } from "./comment.schemas";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(250),
  email: z.string().max(250),
  cpf: z.string().max(11),
  telephone: z.string().max(25),
  birth_date: z.string().or(z.date()),
  password: z.string().max(250),
  is_seller: z.boolean().nullable(),
  description: z.string().nullable(),
  createdAt: z.string().or(z.date()),
  addresses: z.array(addressSchema),
  announcements: z.array(announcementSchema),
  comments: z.array(commentSchema),
});

const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
  addresses: true,
  announcements: true,
  comments: true,
});
const userReturnSchema = userSchema.omit({
  password: true,
  comments: true,
  announcements: true,
  cpf: true,
});
const userUpdateschema = userCreateSchema.partial();

export { userSchema, userCreateSchema, userReturnSchema, userUpdateschema };
