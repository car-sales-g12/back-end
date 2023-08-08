import { z } from "zod";

const addressSchema = z.object({
  id: z.number().positive(),
  street: z.string().min(3).max(250),
  number: z.string().min(1).max(250),
  complement: z.string().min(2).max(250),
  state: z.string().min(2).max(250),
  city: z.string().min(2).max(250),
  zip_code: z.string().min(2).max(250),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
});

const addressCreateSchema = addressSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
const addressUpdateSchema = addressCreateSchema.partial();

export { addressSchema, addressCreateSchema, addressUpdateSchema };
