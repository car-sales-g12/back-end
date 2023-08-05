import { z } from "zod";
import { addressSchema } from "./address.schemas";
import { announcementSchema } from "./announcement.schemas";
import { commentSchema } from "./comment.schemas";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(250).min(3),
  email: z.string().email().max(250),
  cpf: z.string().max(11).min(11),
  telephone: z.string().max(25),
  birth_date: z.string(),
  password: z.string().max(250).min(5),
  is_seller: z.boolean(),
  description: z.string().nullable(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  addresses: z.array(addressSchema),
  announcements: z.array(announcementSchema),
  comments: z.array(commentSchema),
});

const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  addresses: true,
  announcements: true,
  comments: true,
});
const userReturnSchema = userSchema.omit({
  password: true,
  comments: true,
  announcements: true,
  addresses: true,
  cpf: true,
});

const userReturnWithAddressSchema = userReturnSchema.extend({
  addresses: addressSchema.array(),
});
const userUpdateschema = userCreateSchema.partial();

export {
  userSchema,
  userCreateSchema,
  userReturnSchema,
  userUpdateschema,
  userReturnWithAddressSchema,
};
