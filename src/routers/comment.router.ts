import { Router } from "express";
import middlewares from "../middlewares";
import { commentCreateSchema, commentUpdateSchema } from "../schemas";
import { commentContollers } from "../controllers";

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

commentRouter.patch(
  "/:idComment",
  middlewares.verifyToken,
  middlewares.commentExists,
  middlewares.isCommentOwner,
  middlewares.validateBody(commentUpdateSchema),
  commentContollers.update
);

commentRouter.delete(
  "/:idComment",
  middlewares.commentExists,
  middlewares.verifyToken,
  middlewares.isCommentOwner,
  commentContollers.destroy
);
