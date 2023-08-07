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

// imageRouter.get("/:id", middlewares.userExists, imageControllers.read);

// imageRouter.patch(
//   "/:id",
//   middlewares.userExists,
//   middlewares.verifyToken,
//   middlewares.isOwner,
//   middlewares.validateBody(userUpdateschema),
//   middlewares.uniqueEmail,
//   middlewares.uniqueCpf,
//   imageControllers.update
// );

// imageRouter.delete(
//   "/:id",
//   middlewares.userExists,
//   middlewares.verifyToken,
//   middlewares.isOwner,
//   imageControllers.destroy
// );
