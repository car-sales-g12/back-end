import { z } from "zod";

const addressSchema = z.object({
  id: z.number().positive(),
  street: z.string().max(250),
  number: z.string().max(250),
  complement: z.string().max(250),
  state: z.string().max(250),
  city: z.string().max(250),
  zip_code: z.string().max(250),
});

const addressCreateSchema = addressSchema.omit({ id: true });

export { addressSchema, addressCreateSchema };
