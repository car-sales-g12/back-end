import { Router } from "express";
import middlewares from "../middlewares";
import { commentCreateSchema } from "../schemas";
import commentContollers from "../controllers/comment.contollers";

export const commentRouter: Router = Router();

commentRouter.post(
  "/:id/:idAnnouncement",
  middlewares.userExists,
  middlewares.announcementExists,
  middlewares.verifyToken,
  middlewares.validateBody(commentCreateSchema),
  commentContollers.create
);

commentRouter.get(
  "/:idAnnouncement",
  middlewares.announcementExists,
  commentContollers.read
);

// userRouter.patch(
//   "/:id",
//   middlewares.userExists,
//   middlewares.verifyToken,
//   middlewares.isOwner,
//   middlewares.validateBody(userUpdateschema),
//   middlewares.uniqueEmail,
//   middlewares.uniqueCpf,
//   userControllers.update
// );

// userRouter.delete(
//   "/:id",
//   middlewares.userExists,
//   middlewares.verifyToken,
//   middlewares.isOwner,
//   userControllers.destroy
// );
