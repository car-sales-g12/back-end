import { z } from "zod";
import { addressSchema } from "./address.schemas";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(250).min(3),
  email: z.string().email().max(250),
  cpf: z.string().max(11).min(11),
  telephone: z.string().max(25),
  birth_date: z.string(),
  password: z.string().max(250).min(5),
  is_seller: z.boolean(),
  perfilImg: z.string().nullable(),
  description: z.string().nullable(),
  reset_token: z.string().nullable().default(null),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  addresses: z.array(addressSchema).nullable().nullish(),
});
const userReturnWithOutRelationsSchema = userSchema.omit({
  address: true,
  password: true,
  cpf: true,
});
const perfilPatchSchema = z.object({ perfilImg: z.string() });
const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  addresses: true,
  comments: true,
  perfilImg: true,
});
const userReturnSchema = userSchema.omit({
  password: true,
  comments: true,
  announcements: true,
  addresses: true,
  cpf: true,
});

const userReturnWithAddressSchema = userReturnSchema.extend({
  addresses: z.array(addressSchema),
});
const userUpdateschema = userCreateSchema.partial();

export {
  userSchema,
  userCreateSchema,
  userReturnSchema,
  userUpdateschema,
  userReturnWithAddressSchema,
  userReturnWithOutRelationsSchema,
  perfilPatchSchema,
};
