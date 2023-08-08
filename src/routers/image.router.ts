import { Router } from "express";
import middlewares from "../middlewares";
import { imageCreateSchema } from "../schemas";
import { imageControllers } from "../controllers";

export const imageRouter: Router = Router();

imageRouter.post(
  "/:idAnnouncement",
  middlewares.announcementExists,
  middlewares.verifyToken,
  middlewares.isAnnouncementOwner,
  middlewares.validateBody(imageCreateSchema),
  imageControllers.create
);

imageRouter.get(
  "/:idAnnouncement",
  middlewares.announcementExists,
  imageControllers.read
);

imageRouter.delete(
  "/:idImage",
  middlewares.verifyToken,
  middlewares.imageExistsAndIsOwner,
  imageControllers.destroy
);
