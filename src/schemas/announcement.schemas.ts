import { z } from "zod";
import { userSchema } from "./user.schemas";
import { commentSchema } from "./comment.schemas";

const announcementSchema = z.object({
  id: z.number(),
  brand: z.string().min(2).max(100),
  model: z.string().min(1).max(100),
  year: z.string().min(2).max(100),
  fuel: z.string().min(2).max(100),
  km: z.number().min(0).max(9999999999.99),
  color: z.string().min(2).max(100),
  good_deal: z.boolean(),
  active: z.boolean(),
  value: z.number().min(0).max(9999999999.99),
  description: z.string().nullable().nullish(),
  cover_img: z.string(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
});
const announcementCreateSchema = announcementSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
const announcementUpdateSchema = announcementCreateSchema.partial();
const announcementReturnCreateSchema = announcementSchema
  .extend({
    user: userSchema.omit({ cpf: true, password: true }),
    comments: commentSchema.array(),
  })
  .omit({ comments: true });
const announcementReturnReadSchema = announcementSchema.extend({
  km: z.number().or(z.string()),
  value: z.number().or(z.string()),
  user: userSchema.omit({ cpf: true, password: true }),
});
const arrayAnnouncementReturnWithUser = announcementReturnReadSchema.array();

export {
  announcementSchema,
  announcementCreateSchema,
  announcementReturnCreateSchema,
  announcementReturnReadSchema,
  announcementUpdateSchema,
  arrayAnnouncementReturnWithUser,
};
