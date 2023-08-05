import { Router } from "express";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateschema } from "../schemas";
import { userControllers } from "../controllers";
import { userExists } from "../middlewares/userExists.middleware";

export const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.uniqueEmail,
  middlewares.uniqueCpf,
  userControllers.create
);

userRouter.get("/:id", userControllers.read);

userRouter.patch(
  "/:id",
  middlewares.userExists,
  middlewares.verifyToken,
  middlewares.isOwner,
  middlewares.validateBody(userUpdateschema),
  middlewares.uniqueEmail,
  middlewares.uniqueCpf,
  userControllers.update
);

userRouter.delete(
  "/:id",
  middlewares.userExists,
  middlewares.verifyToken,
  middlewares.isOwner,
  userControllers.destroy
);
