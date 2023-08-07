import { z } from "zod";
import {
  announcementCreateSchema,
  announcementReturnCreateSchema,
  announcementReturnReadSchema,
} from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { Announcement } from "../entities";

type AnnouncementCreate = z.infer<typeof announcementCreateSchema>;
type AnnouncementReturnRead = z.infer<typeof announcementReturnReadSchema>;
type AnnouncementReturnCreate = z.infer<typeof announcementReturnCreateSchema>;
type AnnouncementUpdate = DeepPartial<Announcement>;
type AnnouncementRepo = Repository<Announcement>;

export {
  AnnouncementCreate,
  AnnouncementRepo,
  AnnouncementReturnRead,
  AnnouncementReturnCreate,
  AnnouncementUpdate,
};
