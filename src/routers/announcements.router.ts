import { Router } from "express";
import middlewares from "../middlewares";
import { announcementControllers } from "../controllers";
import { announcementCreateSchema, announcementUpdateSchema } from "../schemas";

export const announcementRouter: Router = Router();

announcementRouter.post(
  "/:id",
  middlewares.userExists,
  middlewares.verifyToken,
  middlewares.isOwner,
  middlewares.validateBody(announcementCreateSchema),
  announcementControllers.create
);

announcementRouter.get(
  "/:idAnnouncement",
  middlewares.announcementExists,
  announcementControllers.readById
);
announcementRouter.get(
  "",
  middlewares.pagination,
  announcementControllers.read
);

announcementRouter.patch(
  "/:idAnnouncement",
  middlewares.announcementExists,
  middlewares.verifyToken,
  middlewares.isAnnouncementOwner,
  middlewares.validateBody(announcementUpdateSchema),
  announcementControllers.update
);

announcementRouter.delete(
  "/:idAnnouncement",
  middlewares.announcementExists,
  middlewares.verifyToken,
  middlewares.isAnnouncementOwner,
  announcementControllers.destroy
);
