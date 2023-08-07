import { z } from "zod";

const imageSchema = z.object({
  id: z.number(),
  url: z.string(),
});
const imageCreateSchema = imageSchema.omit({ id: true });

export { imageSchema, imageCreateSchema };
