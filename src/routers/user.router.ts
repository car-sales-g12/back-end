import { Router } from "express";
import middlewares from "../middlewares";
import {
  perfilPatchSchema,
  userCreateSchema,
  userUpdateschema,
} from "../schemas";
import { userControllers } from "../controllers";
import { emailSchema, passwordSchema } from "../schemas/resetPassword";

export const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.uniqueEmail,
  middlewares.uniqueCpf,
  userControllers.create
);

userRouter.get("/:id", middlewares.userExists, userControllers.read);

userRouter.patch(
  "/perfilImg/:id",
  middlewares.userExists,
  middlewares.verifyToken,
  middlewares.isOwner,
  middlewares.validateBody(perfilPatchSchema),
  userControllers.perfilPatch
);

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


userRouter.post("/resetPassword", middlewares.validateBody(emailSchema),  userControllers.sendResetEmailPassword);

userRouter.patch("/resetPassword/:token", middlewares.validateBody(passwordSchema), userControllers.resetPassword);


