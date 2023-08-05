import { z } from "zod";

const announcementSchema = z.object({
  id: z.number(),
  brand: z.string().max(100),
  model: z.string().max(100),
  year: z.string().max(100),
  fuel: z.string().max(100),
  km: z.number().min(0).max(9999999999.99),
  color: z.string().max(100),
  value_fipe: z.number().min(0).max(9999999999.99),
  value: z.number().min(0).max(9999999999.99),
  description: z.string().nullable(),
  cover_img: z.string(),
  createdAt: z.string().or(z.date()),
});
const announcementCreateSchema = announcementSchema.omit({
  id: true,
  createdAt: true,
});

export { announcementSchema, announcementCreateSchema };
