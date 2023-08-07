import { Router } from "express";
import middlewares from "../middlewares";

import { announcementControllers } from "../controllers";
import { announcementCreateSchema } from "../schemas";

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
  "/:id",
  middlewares.announcementExists,
  announcementControllers.readById
);

// announcementRouter.patch(
//   "/:id",
//   middlewares.userExists,
//   middlewares.verifyToken,
//   middlewares.isOwner,
//   middlewares.validateBody(userUpdateschema),
//   middlewares.uniqueEmail,
//   middlewares.uniqueCpf,
//   userControllers.update
// );

// announcementRouter.delete(
//   "/:id",
//   middlewares.userExists,
//   middlewares.verifyToken,
//   middlewares.isOwner,
//   userControllers.destroy
// );
